import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BookFormDialogComponent } from './book-form-dialog.component';
import { BookFormService } from './book-form.service';
import { Book } from '../entities/book.entity';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {

  constructor(private service: BookFormService, private dialogService: MatDialog) { }

  data = {}

  submit() {
    // TODO: Error Checking
    console.log('submit..');
    console.log('form data', this.data);
    const book = this.regular(this.data);
    console.log('book', book);
    const dialog = this.openDialog();
    this.service.addBook(book).subscribe(() => { }, () => dialog.close(), () => { dialog.close(); this.clean() });
  }

  clean() {
    console.log('clean..');
    this.data = {};
  }

  openDialog(): MatDialogRef<any, any> {
    const dialog = this.dialogService.open(BookFormDialogComponent, { disableClose: true });
    return dialog;
  }

  regular(data: { [k: string]: string }): Partial<Book> {
    const split = (s: string) => s.split(/[,;，；]/);
    const h = <T, R>(x: T, f: (x: T) => R) => x && f(x)
    return {
      bookName: h(data['bookName'], String),
      authors: h(data['authors'], split),
      isbns: h(data['isbns'], split),
      coverUrl: h(data['coverUrl'], String),
      summary: h(data['summary'], String),
      topics: h(data['topics'], split),
      series: h(data['series'], split),
      isFiction: h(data['isFiction'], Boolean),
      arBl: h(data['arBl'], Number),
      arIl: h(data['arIl'], String),
      arPoints: h(data['arPoints'], Number),
      arRating: h(data['arRating'], Number),
      lexilePrefix: h(data['lexilePrefix'], String),
      lexile: h(data['lexile'], Number),
      wordcount: h(data['wordcount'], Number),
      pagecount: h(data['pagecount'], Number),
      amazonRating: h(data['amazonRating'], Number),
    };
  }

}
