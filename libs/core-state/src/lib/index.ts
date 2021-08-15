import { ActionReducerMap } from "@ngrx/store";
import * as fromCidades from './cidades/cidades.reducer';

export interface AppState {
    [fromCidades.CIDADE_FEATURE_KEY]: fromCidades.CidadeState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromCidades.CIDADE_FEATURE_KEY]: fromCidades.cidadeReducer
};