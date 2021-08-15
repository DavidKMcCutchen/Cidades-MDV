import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CidadesComponent } from './cidades/cidades.component';
import { CidadeDetailsComponent } from './cidades/cidade-details/cidade-details.component';
import { CidadeListComponent } from './cidades/cidade-list/cidade-list.component';
import { MaterialModule } from "@cidades/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@cidades/core-data";
import { CoreStateModule } from "@cidades/core-state";
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent, CidadesComponent, CidadeDetailsComponent, CidadeListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
