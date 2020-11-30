import * as ACT from './action';

export function updateCatalogList(payload) {
    return {
        type: ACT.UPDATE_LIST,
        payload,
    };
}
export function fetchFailed(payload) {
    return {
        type: ACT.FETCH_FAILED,
    };
}
export function fetchSuccess(payload) {
    return {
        type: ACT.FETCH_SUCCESS,
    };
}
export function updateLoading(payload) {
    return {
        type: ACT.UPDATE_LOADING,
        payload,
    };
}

export function fetchData () {
    return (dispatcher) => {
        dispatcher(updateLoading(true));
        const data = fetch ('http://test-api.ipromote.ru/API/CATALOG/FIND');

        data.then(response => {
            return response.json();
        }).then(localData => {
            dispatcher(updateCatalogList(localData.data));

            dispatcher(fetchSuccess());
        }).catch((e) => {
            dispatcher(fetchFailed());

            console.log('САБОТАЖ: ошибка загрузки данных', e);
        }).finally(() => {
            dispatcher(updateLoading(false));
        });
    }
}