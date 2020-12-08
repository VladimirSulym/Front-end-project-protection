import React, {useEffect} from 'react';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useDispatch, useSelector} from "react-redux";
import {filterPrice} from "../../../store/action_creatores";

function PriceFilter(props) {
    console.log("props =>",props);
    const {priceMin, priceMax} = props;

    const Slider = require('rc-slider');
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);

    const dispatch = useDispatch();

    useSelector((store) => store.app.priceRange);

    useEffect(()=>{
        dispatch(filterPrice([+priceMin, +priceMax]))
    },[])

    function handleRangeMove (e) {
        dispatch(filterPrice(e))
    }

    return (
            <Range
                min={+priceMin}
                max={+priceMax}
                // value={[priceRange[0],priceRange[1]]}
                defaultValue={[+priceMin, +priceMax]}
                onChange={handleRangeMove}
            />
    );
}

export default React.memo(PriceFilter);