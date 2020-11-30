import {combineReducers} from "redux";
import * as ACT from './action';

const initialStore = {
    catalogList: [],
    isLoading: false,
    fetchStatus: null,
    categoryList: [],
    colorList: [],
    brandList: [],
    priceRange: []
};

function rootReducer(store = initialStore, action) {

    switch (action.type) {
        case ACT.UPDATE_LIST:
            return {
            ...store,
                catalogList: action.payload,
            }

        case ACT.UPDATE_LOADING:
            return {
            ...store,
                isLoading: action.payload,
            }

        case ACT.FETCH_SUCCESS:
        case ACT.FETCH_FAILED:
            return {
            ...store,
                fetchStatus: action.payload,
            }
    }
    return store;
}

export default () => combineReducers({
    app: rootReducer,
})