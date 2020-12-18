import React from 'react';
import Form from './Form';

const All = ({sender, active}) => {
    
    return (
        <div>
            <Form newTodo={sender}/>
        </div>
    );
}

export default All;
