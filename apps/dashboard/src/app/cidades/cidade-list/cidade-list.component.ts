import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cidade } from '@cidades/api-interfaces';

@Component({
  selector: 'cidades-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.scss']
})
export class CidadeListComponent {
  @Input() cidades: Cidade[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
