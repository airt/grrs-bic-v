import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../entities/book.entity';

@Injectable()
export class BookFormService {

  constructor(private http: HttpClient) { }

  addBook(book: Book): Observable<void> {
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post<void>('/api/user/addBook', book, options);
  }

}
