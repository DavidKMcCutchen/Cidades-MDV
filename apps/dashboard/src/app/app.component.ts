import { Component } from '@angular/core';

@Component({
  selector: 'cidades-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Cidades';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'cidades', icon: 'view_list', title: 'Cidades'}
  ]
}
