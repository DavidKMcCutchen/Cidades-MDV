import { createAction, props } from "@ngrx/store";
import { Cidade } from "@cidades/api-interfaces";

// Select Entity

export const selectCidade = createAction(
    '[CIDADE] Select Cidade',
    props<{ cidadeId: string }>()
);

// Load all Entities

export const loadCidades = createAction(
    '[CIDADE] Load Cidades'
);

export const loadCidadesSuccess = createAction(
    '[CIDADE] Load Cidades Success',
    props<{ cidades: Cidade[]}>()
);

export const loadCidadesFailure = createAction(
    '[CIDADE] Load Cidades Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadCidade = createAction(
    '[CIDADE] Load Cidade',
    props<{ cidadeId: string}>()
);

export const loadCidadeSuccess = createAction(
    '[CIDADE] Load Cidade Success',
    props<{ cidade: Cidade}>()
);

export const loadCidadeFailure = createAction(
    '[CIDADE] Load Cidade Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createCidade = createAction(
    '[CIDADE] Create Cidade',
    props<{ cidade: Cidade}>()
);

export const createCidadeSuccess = createAction(
    '[CIDADE] Create Cidade Success',
    props<{ cidade: Cidade}>()
);

export const createCidadeFailure = createAction(
    '[CIDADE] Create Cidade Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateCidade = createAction(
    '[CIDADE] Update Cidade',
    props<{ cidade: Cidade}>()
);

export const updateCidadeSuccess = createAction(
    '[CIDADE] Update Cidade Success',
    props<{ cidade: Cidade}>()
);

export const updateCidadeFailure = createAction(
    '[CIDADE] Create Cidade Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteCidade = createAction(
    '[CIDADE] Delete Cidade',
    props<{ cidade: Cidade}>()
);

export const deleteCidadeSuccess = createAction(
    '[CIDADE] Delete Cidade Success',
    props<{ cidade: Cidade}>()
);

export const deleteCidadeFailure = createAction(
    '[CIDADE] Create Cidade Failed',
    props<{ error: any}>()
);