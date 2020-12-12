import React from 'react';

function PaginationPage(props) {
    const {number_page} = props;
    console.log('number_page =>',number_page)
    return (
            <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">
                {number_page}
            </a>
            // <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
    );
}

export default React.memo(PaginationPage);