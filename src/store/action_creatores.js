import * as ACT from './action';

export function updateCatalogList(payload) {
    return {
        type: ACT.UPDATE_LIST,
        payload,
    };
}
export function fetchFailed() {
    return {
        type: ACT.FETCH_FAILED,
    };
}
export function fetchSuccess() {
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
export function updateColor(payload) {
    return {
        type: ACT.UPDATE_COLOR,
        payload,
    };
}
export function updateCategory(payload) {
    return {
        type: ACT.UPDATE_CATEGORY,
        payload,
    };
}
export function updateBrand(payload) {
    return {
        type: ACT.UPDATE_BRAND,
        payload,
    };
}
export function updatePrice(payload) {
    return {
        type: ACT.UPDATE_PRICE,
        payload,
    };
}
export function filterCategory(payload) {
    return {
        type: ACT.FILTER_CATEGORY,
        payload,
    };
}
export function filterBrand(payload) {
    return {
        type: ACT.FILTER_BRAND,
        payload,
    };
}
export function filterPrice(payload) {
    return {
        type: ACT.FILTER_PRICE,
        payload,
    };
}
export function filterColor(payload) {
    return {
        type: ACT.FILTER_COLOR,
        payload,
    };
}
export function updateCount(payload) {
    return {
        type: ACT.RESET_COUNT,
        payload,
    };
}
export function updateCart(payload) {
    return {
        type: ACT.UPDATE_CART,
        payload,
    };
}
export function updateQuanCart(payload) {
    return {
        type: ACT.UPDATE_QUANCART,
        payload,
    };
}
export function sortPrice(payload) {
    return {
        type: ACT.SORT_PRICE,
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

export function fetchFilterData () {
    return (dispatcher) => {
        dispatcher(updateLoading(true));
        const categoryData = fetch ('http://test-api.ipromote.ru/API/CATEGORY/FIND');
        const colorData = fetch ('http://test-api.ipromote.ru/API/COLOR/FIND');
        const brandData = fetch ('http://test-api.ipromote.ru/API/BRAND/FIND');
        const priceData = fetch ('http://test-api.ipromote.ru/API/CATALOG/RANGE');

        const allResponse = Promise.all([
            categoryData,
            colorData,
            brandData,
            priceData,
        ]);

        allResponse.then(
            (responseArr) => {
                return Promise.all([
                    responseArr[0].json(),
                    responseArr[1].json(),
                    responseArr[2].json(),
                    responseArr[3].json(),
                ]);
            }
        ).then (
            (dataArr) => {
                dispatcher(updateColor(dataArr[1].data));
                dispatcher(updateCategory(dataArr[0].data));
                dispatcher(updatePrice(dataArr[3].data));
                dispatcher(updateBrand(dataArr[2].data));
            }
        ).catch(
            (error) => {
                console.log('ВНИМАНИЕ: ошибка загрузки двнных Фильтра', error);
            }
        ).finally(
            () => {
                dispatcher(updateLoading(false));
            }
        )
    }
}