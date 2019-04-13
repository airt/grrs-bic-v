import { Component } from '@angular/core';
import { Book } from '../entities/book.entity';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {

  constructor() { }

  data = {}

  submit() {
    // TODO: Error Checking
    console.log('submit')
    console.log('form data', this.data)
    const book: Book = {
      bookName: String(this.data['bookName'] || ''),
      authors: String(this.data['authors'] || '').split(/[,;，；]/),
      isbns: String(this.data['isbns'] || '').split(/[,;，；]/),
      coverUrl: String(this.data['coverUrl'] || ''),
      summary: String(this.data['summary'] || ''),
      topics: String(this.data['topics'] || '').split(/[,;，；]/),
      series: String(this.data['series'] || '').split(/[,;，；]/),
      isFiction: Boolean(this.data['isFiction'] || ''),
      arBl: Number(this.data['arBl'] || ''),
      arIl: String(this.data['arIl'] || ''),
      arPoints: Number(this.data['arPoints'] || ''),
      arRating: Number(this.data['arRating'] || ''),
      lexilePrefix: String(this.data['lexilePrefix'] || ''),
      lexile: Number(this.data['lexile'] || ''),
      wordcount: Number(this.data['wordcount'] || ''),
      pagecount: Number(this.data['pagecount'] || ''),
      amazonRating: Number(this.data['amazonRating'] || ''),
    }
    console.log('book', book)
  }

  clean() {
    console.log('clean')
    this.data = {}
  }

}
