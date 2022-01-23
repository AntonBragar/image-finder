import React from 'react';

const Button = ({showMore}) => {
    return (
        <button className="Button" type="button" onClick={showMore}>
            Show more...
        </button>
    );
};

export default Button;
