import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-book-form-dialog',
  templateUrl: './book-form-dialog.component.html',
  styleUrls: ['./book-form-dialog.component.css'],
})
export class BookFormDialogComponent implements OnInit {

  constructor(private dialog: MatDialogRef<BookFormDialogComponent>) { }

  ngOnInit() {
    const element: HTMLElement = this.dialog._containerInstance['_elementRef'].nativeElement
    element.style.background = 'rgba(0, 0, 0, 0.0)'
    element.style.boxShadow = 'none'
  }

  close() {
    this.dialog.close();
  }

}
