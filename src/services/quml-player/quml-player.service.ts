// TODO: Capacitor temp fix 
import { Inject, Injectable } from '@angular/core';
import { ContentService } from '@project-fmps/sunbird-sdk';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QumlPlayerService  {

  constructor(
    @Inject('CONTENT_SERVICE') private contentService: ContentService,
  ) {}

  getQuestion(questionId: string): Observable<any> {
    return this.contentService.getQuestionList([questionId]);
  }

  getQuestions(questionIds: string[], parentId: string): Observable<any> {
    return this.contentService.getQuestionList(questionIds, parentId);
  }

  getQuestionSetHierarchy(data) {
    return this.contentService.getQuestionSetHierarchy(data);
  }

  getQuestionSet(identifier: string) {
    return this.contentService.getQuestionSetHierarchy(identifier);
  }

  getAllQuestionSet(identifiers: string[]) {
    return of({});
  }
}


