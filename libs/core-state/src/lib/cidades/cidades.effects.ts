import { Injectable } from "@angular/core";
import { Cidade } from "@cidades/api-interfaces";
import { CidadesService } from "@cidades/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as CidadesActions from './cidades.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class CidadesEffects{
    loadCidade$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CidadesActions.loadCidade),
            fetch({
                run: (action) =>
                    this.cidadesService
                        .find(action.cidadeId)
                        .pipe(map((cidade: Cidade) => CidadesActions.loadCidadeSuccess({ cidade }))),
                    onError: (action, error) => CidadesActions.loadCidadeFailure({ error })    
                })
            ));
    loadCidades$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CidadesActions.loadCidades),
            fetch({
                run: () =>
                    this.cidadesService
                    .all()
                    .pipe(
                        map((cidades: Cidade[]) => CidadesActions.loadCidadesSuccess({ cidades }))
                    ),
                onError: (action, error) => CidadesActions.loadCidadesFailure({ error })    
            })
    ));
    createCidade$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CidadesActions.createCidade),
            pessimisticUpdate({
                run: (action) =>
                    this.cidadesService
                        .create(action.cidade)
                        .pipe(map((cidade: Cidade) => CidadesActions.createCidadeSuccess({ cidade }))),
                    onError: (action, error) => CidadesActions.createCidadeFailure({ error })    
            })
    ));

    updateCidade$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CidadesActions.updateCidade),
            pessimisticUpdate({
                run: (action) =>
                    this.cidadesService
                        .update(action.cidade)
                        .pipe(map((cidade: Cidade) => CidadesActions.updateCidadeSuccess({ cidade}))),
                    onError: (action, error) => CidadesActions.updateCidadeFailure({ error })    
            })
    ));

    deleteCidade$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CidadesActions.deleteCidade),
            pessimisticUpdate({
                run: (action) =>
                    this.cidadesService
                        .delete(action.cidade)
                        .pipe(
                            map(() => CidadesActions.deleteCidadeSuccess({ cidade: action.cidade }))
                        ),
                    onError: (action, error) => CidadesActions.deleteCidadeFailure({ error })    
            })
        ));

    constructor(
        private actions$: Actions,
        private cidadesService: CidadesService
    ) {}
}; 

