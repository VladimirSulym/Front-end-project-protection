import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterColor} from "../../../store/action_creatores";

function ColorFilter(props) {
    const {id, color} = props;

    const statColor = useSelector((store) => store.app.filter.color);
    console.log('statColor 6666 ->',statColor);

    const dispatch = useDispatch();

    function handleClick (e) {
        dispatch(filterColor(e.target.getAttribute('idColor')))
    }

    return (
        <>
                <li className="m-r-10">
                    <input
                        className="checkbox-color-filter"
                        id={`color-filter${id}`}
                        type="checkbox"
                        name={`color-filter${id}`}
                    />
                    <label
                        className="color-filter"
                        style = {{backgroundColor: `#${color}`}}
                        htmlFor={`color-filter${id}`}
                        onClick={handleClick}
                        idColor={id}
                    />
                </li>
            </>
    );
}

export default React.memo(ColorFilter);