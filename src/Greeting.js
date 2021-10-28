import React from 'react';

const Greetings = ({firstName, lastName,}) => {
    return (<div>
        Hey you! {firstName} {lastName}!
    </div>); 
};

export default Greetings