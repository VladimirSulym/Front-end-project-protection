import React from 'react';

function BrandFilter(props) {
    return (
    <ul className="p-b-54">
        <li className="p-t-4">
            <a href="#" className="s-text13 active1">
                All
            </a>
        </li>

        <li className="p-t-4">
            <a href="#" className="s-text13">
                Women
            </a>
        </li>

        <li className="p-t-4">
            <a href="#" className="s-text13">
                Men
            </a>
        </li>

        <li className="p-t-4">
            <a href="#" className="s-text13">
                Kids
            </a>
        </li>

        <li className="p-t-4">
            <a href="#" className="s-text13">
                Accesories
            </a>
        </li>
    </ul>
    );
}

export default React.memo(BrandFilter);