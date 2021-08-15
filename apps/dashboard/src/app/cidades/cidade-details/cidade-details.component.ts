import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Cidade } from '@cidades/api-interfaces';

@Component({
  selector: 'cidades-cidade-details',
  templateUrl: './cidade-details.component.html',
  styleUrls: ['./cidade-details.component.scss']
})
export class CidadeDetailsComponent {
  currentCidade: Cidade;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set cidade(value) {
    if (value) this.originalTitle = value.name;
    this.currentCidade = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
