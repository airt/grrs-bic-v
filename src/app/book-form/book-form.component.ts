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

  regular(data: {}): Book {
    return {
      bookName: String(data['bookName'] || ''),
      authors: String(data['authors'] || '').split(/[,;，；]/),
      isbns: String(data['isbns'] || '').split(/[,;，；]/),
      coverUrl: String(data['coverUrl'] || ''),
      summary: String(data['summary'] || ''),
      topics: String(data['topics'] || '').split(/[,;，；]/),
      series: String(data['series'] || '').split(/[,;，；]/),
      isFiction: Boolean(data['isFiction'] || ''),
      arBl: Number(data['arBl'] || ''),
      arIl: String(data['arIl'] || ''),
      arPoints: Number(data['arPoints'] || ''),
      arRating: Number(data['arRating'] || ''),
      lexilePrefix: String(data['lexilePrefix'] || ''),
      lexile: Number(data['lexile'] || ''),
      wordcount: Number(data['wordcount'] || ''),
      pagecount: Number(data['pagecount'] || ''),
      amazonRating: Number(data['amazonRating'] || ''),
    };
  }

}
