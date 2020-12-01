import React from 'react';

function BrandFilter(props) {
    const {title} = props;
    return (
        <li className="p-t-4">
            <a href="#" className="s-text13 active1">
                {title}
            </a>
        </li>
    );
}

export default React.memo(BrandFilter);