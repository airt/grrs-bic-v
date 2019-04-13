import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookFormService } from './book-form/book-form.service'
import { BookFormComponent } from './book-form/book-form.component';
import { BookFormDialogComponent } from './book-form/book-form-dialog.component';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatDividerModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookFormDialogComponent,
  ],
  entryComponents: [
    BookFormDialogComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    BookFormService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
