import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';

import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatDividerModule,
  MatCheckboxModule,
  MatFormFieldModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
