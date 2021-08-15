import { Cidade } from "@cidades/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as CidadesActions from './cidades.actions';

export const CIDADE_FEATURE_KEY = 'cidades';

export interface CidadeState extends EntityState<Cidade> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface CidadePartialState {
    readonly [CIDADE_FEATURE_KEY]: CidadeState
};

export const cidadeAdapter: EntityAdapter<Cidade> = createEntityAdapter<Cidade>();

export const initialCidadeState: CidadeState = cidadeAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailure = (state, { error }): CidadeState => ({ ...state, error });

const onDispatch = (state, action): CidadeState => ({
    ...state,
    loaded: false,
    error: null
});

const _cidadeReducer = createReducer(
    initialCidadeState,
    on(
        CidadesActions.loadCidadeFailure,
        CidadesActions.loadCidadesFailure,
        CidadesActions.createCidadeFailure,
        CidadesActions.updateCidadeFailure,
        CidadesActions.deleteCidadeFailure,
        onFailure
    ),
    on(
        CidadesActions.loadCidade,
        CidadesActions.loadCidades,
        CidadesActions.createCidade,
        CidadesActions.updateCidade,
        CidadesActions.deleteCidade,
        onDispatch
    ),
    on(
        CidadesActions.loadCidadeSuccess, (state, { cidade}) =>
        cidadeAdapter.upsertOne(cidade, {...state, loaded: true})
    ),
    on(
        CidadesActions.selectCidade, (state, { cidadeId }) => ({
            ...state,
            selectedId: cidadeId
        })
    ),
    on(
        CidadesActions.loadCidadesSuccess, (state, { cidades }) =>
        cidadeAdapter.setAll(cidades, {...state, loaded: true})
    ),
    on(
        CidadesActions.deleteCidadeSuccess, (state, { cidade }) =>
        cidadeAdapter.removeOne(cidade.id, {...state, loaded: true})
    ),
    on(
        CidadesActions.updateCidadeSuccess, (state, { cidade }) =>
        cidadeAdapter.updateOne(
            {id: cidade.id, changes: cidade},
            {...state, loaded: true}
        )
    ),
    on(
        CidadesActions.createCidadeSuccess, (state, {cidade }) =>
        cidadeAdapter.addOne(cidade, {...state, loaded: true})
    ),
)

export function cidadeReducer(
    state: CidadeState | undefined,
    action: Action
) {
    return _cidadeReducer(state, action)
}