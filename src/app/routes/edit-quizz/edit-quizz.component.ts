import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { IQuizzItem } from '@app/shared/models/quizz.model';
import { HttpService } from '@app/core/services/http.service';

@Component({
  selector: 'app-edit-quizz',
  templateUrl: './edit-quizz.component.html',
})
export class EditQuizzComponent implements OnInit {
  id$: Observable<string>;
  item$: Observable<IQuizzItem>;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.id$ = this._route.paramMap.pipe(map(params => params.get('id')));
    this.item$ = this.id$.pipe(
      switchMap((id: string) => {
        if (id === 'new') {
          return of({ theme: '', question: '', answer: '' } as IQuizzItem);
        }
        return this._httpService.get('quizz/' + id);
      }),
      catchError(err => {
        this._router.navigate(['/edit-quizz', 'new']);
        return throwError(err);
      }),
    );
  }
}
