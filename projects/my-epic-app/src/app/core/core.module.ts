import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CommonModule, DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    // material
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    DecimalPipe
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule {}
