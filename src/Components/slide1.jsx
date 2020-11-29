import React from "react";

function Slide1 () {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
            widht: '100%'
        }}>
            <img src="./images/master-slide-02.jpg" alt="IMG-BENNER"/>
        </div>
    )
}

export default React.memo(Slide1);