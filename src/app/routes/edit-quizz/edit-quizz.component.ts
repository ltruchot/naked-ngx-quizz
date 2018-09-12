import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { IQuizzItem } from '@app/shared/models/quizz.model';
import { HttpService } from '@app/core/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-quizz',
  templateUrl: './edit-quizz.component.html',
})
export class EditQuizzComponent implements OnInit {
  id$: Observable<string>;
  currentItem: IQuizzItem;
  public formQuizz: FormGroup;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.id$ = this._route.paramMap.pipe(map(params => params.get('id')));
    this.id$
      .pipe(
        switchMap((id: string) => {
          if (id === 'new') {
            return of({ theme: '', question: '', answer: '' });
          }
          return this._httpService.get('quizz/' + id);
        }),
        tap(item => {
          this.currentItem = item;
          this.formQuizz = this._formBuilder.group({
            question: [item.question, Validators.required],
            answer: [item.answer, Validators.required],
          });
        }),
        catchError(err => {
          this._router.navigate(['/edit-quizz', 'new']);
          return throwError(err);
        }),
      )
      .subscribe();
  }

  handleSubmit(value: IQuizzItem, isValid: boolean): void {
    if (isValid) {
      console.log('post', value);
    }
  }
}
