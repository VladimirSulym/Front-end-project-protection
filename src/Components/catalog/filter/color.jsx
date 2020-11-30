import React from 'react';

function ColorFilter(props) {
    return (
        <div className="filter-color p-t-22 p-b-50 bo3">
            <div className="m-text15 p-b-12">
                Цвет
            </div>

            <ul className="flex-w">
                <li className="m-r-10">
                    <input
                        className="checkbox-color-filter"
                        id="color-filter1"
                        type="checkbox"
                        name="color-filter1"
                    />
                    <label className="color-filter color-filter1" htmlFor="color-filter1" />
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter"
                           id="color-filter2"
                           type="checkbox"
                           name="color-filter2"
                    />
                    <label className="color-filter color-filter2" htmlFor="color-filter2" />
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter"
                           id="color-filter3"
                           type="checkbox"
                           name="color-filter3"
                    />
                    <label className="color-filter color-filter3" htmlFor="color-filter3" />
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter"
                           id="color-filter4"
                           type="checkbox"
                           name="color-filter4"
                    />
                    <label className="color-filter color-filter4" htmlFor="color-filter4" />
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter"
                           id="color-filter5"
                           type="checkbox"
                           name="color-filter5"
                    />
                    <label className="color-filter color-filter5" htmlFor="color-filter5" />
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter"
                           id="color-filter6"
                           type="checkbox"
                           name="color-filter6"
                    />
                    <label className="color-filter color-filter6" htmlFor="color-filter6" />
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter"
                           id="color-filter7"
                           type="checkbox"
                           name="color-filter7"
                    />
                    <label className="color-filter color-filter7" htmlFor="color-filter7" />
                </li>
            </ul>
        </div>
    );
}

export default React.memo(ColorFilter);