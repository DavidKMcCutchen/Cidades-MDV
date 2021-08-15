import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cidade, emptyCidade } from '@cidades/api-interfaces';
import { CidadeFacade } from '@cidades/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'cidades-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit {
  allCidades$: Observable<Cidade[]> = this.cidadeFacade.allCidades$;
  selectedCidade$: Observable<Cidade> = this.cidadeFacade.selectedCidades$;

  form: FormGroup;

  constructor(
    private cidadeFacade: CidadeFacade,
    private formBuilder: FormBuilder
  ) {
    this.cidadeFacade.mutations$.subscribe((_) => this.resetCidade());
  }

  ngOnInit() {
    this.initForm();
    this.cidadeFacade.loadCidades();
    this.resetCidade()
  }

  selectCidade(cidade: Cidade) {
    this.cidadeFacade.selectCidade(cidade.id)
    this.form.patchValue(cidade);
  }

  saveCidade(cidade: Cidade) {
    this.cidadeFacade.saveCidade(cidade);
  }

  deleteCidade(cidade: Cidade) {
    this.cidadeFacade.deleteCidade(cidade);
  }

  resetCidade() {
    this.form.reset();
    this.selectCidade(emptyCidade)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [''],
      estado: [''],
      populacao: [''],
      seguranca: [''],
      praia: ['']
    })
  }
}
