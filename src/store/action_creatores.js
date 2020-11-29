import * as ACT from './action';

export function updateMovieList(payload) {
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
export function updateSerchText(payload) {
    return {
        type: ACT.UPDATE_SEARCH_TEXT,
        payload,
    };
}
export function clearSearchText(payload) {
    return {
        type: ACT.CLEAR_SEARCH_TEXT,
        payload,
    };
}