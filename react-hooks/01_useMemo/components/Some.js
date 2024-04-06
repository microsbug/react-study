import React from 'react';

const Some = (props) => {
    const begin = Date.now();

    while (1){
        if(Date.now() - begin > 3000){
            break;
        }
    }

    return (
        <div>
            <h2>Some —— {props.a + props.b}</h2>
        </div>
    );
};

export default Some;
