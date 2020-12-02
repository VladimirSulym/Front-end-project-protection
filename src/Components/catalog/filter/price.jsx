import React from 'react';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useDispatch, useSelector} from "react-redux";
import {filterPrice} from "../../../store/action_creatores";

function PriceFilter(props) {

    const Slider = require('rc-slider');
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);

    const dispatch = useDispatch();

    function handleRangeMove (e) {
        dispatch(filterPrice(e))
    }

    return (
            <Range
                min={21}
                max={110}
                defaultValue={[21,110]}
                onChange={handleRangeMove}
            />
    );
}

export default React.memo(PriceFilter);