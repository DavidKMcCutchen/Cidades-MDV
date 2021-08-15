import { emptyCidade } from "@cidades/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cidadeAdapter, CidadeState, CIDADE_FEATURE_KEY } from "./cidades.reducer";

export const getCidadeState = createFeatureSelector<CidadeState>(CIDADE_FEATURE_KEY);

const { selectAll, selectEntities } = cidadeAdapter.getSelectors();

export const getCidadesLoaded = createSelector(
    getCidadeState,
    (state: CidadeState) => state.loaded
);

export const getCidadeError = createSelector(
    getCidadeState,
    (state: CidadeState) => state.error 
);

export const getAllCidades = createSelector(
    getCidadeState,
    (state: CidadeState) => selectAll(state)
);

export const getCidadeEntities = createSelector(
    getCidadeState,
    (state: CidadeState) => selectEntities(state)
);

export const getSelectedCidadeId = createSelector(
    getCidadeState,
    (state: CidadeState) => state.selectedId
);

export const getSelectedCidade = createSelector(
    getCidadeEntities,
    getSelectedCidadeId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyCidade
);



















