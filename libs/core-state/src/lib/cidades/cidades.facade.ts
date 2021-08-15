import { Injectable } from "@angular/core";
import { Cidade } from "@cidades/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter, timestamp } from "rxjs/operators";
import * as CidadesActions from './cidades.actions';
import * as CidadesSelectors from './cidades.selectors';
import * as fromCidades from './cidades.reducer';

@Injectable({
    providedIn: 'root',
})

export class CidadeFacade {
    allCidades$ = this.store.pipe(
        map((state) => CidadesSelectors.getAllCidades(state)),
    )
    selectedCidades$ = this.store.pipe(select(CidadesSelectors.getSelectedCidade));
    loaded$ = this.store.pipe(select(CidadesSelectors.getCidadesLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === CidadesActions.createCidade({} as any) .type ||
        action.type === CidadesActions.updateCidade({} as any) .type ||
        action.type === CidadesActions.deleteCidade({} as any) .type 
    ))

    selectCidade(cidadeId: string) {
        this.dispatch(CidadesActions.selectCidade({ cidadeId }));
    };

    loadCidades() {
        this.dispatch(CidadesActions.loadCidades());
    };

    loadCidade(cidadeId: string) {
        this.dispatch(CidadesActions.loadCidade({ cidadeId }));
    };

    saveCidade(cidade: Cidade) {
        cidade.id ? this.updateCidade(cidade) : this.createCidade(cidade);
    };

    createCidade(cidade: Cidade) {
        this.dispatch(CidadesActions.createCidade({ cidade }));
    };

    updateCidade(cidade: Cidade) {
        this.dispatch(CidadesActions.updateCidade({ cidade }));
    };

    deleteCidade(cidade: Cidade) {
        this.dispatch(CidadesActions.deleteCidade({ cidade }));
    };

    dispatch(action: Action) {
        this.store.dispatch(action)
    };




    constructor(
        private store: Store<fromCidades.CidadePartialState>,
        private actions$: ActionsSubject
    ) {}
}