import React from 'react';
import {Link} from "react-router-dom";
import {CATALOG} from "../../../router/url";

function CategoryFilter(props) {

    const {title, url, key} = props
    return (
        <li key={key} className="p-t-4">
            <Link to={`${CATALOG}/${url}`} className="s-text13 active1">
                {title}
            </Link>
        </li>
    );
}

export default React.memo(CategoryFilter);