import React from 'react';
import Form from './Form'
import ListItem from './ListItem'

const Active = ({data, sender, onChecked}) => {
    
    const active = 1;

    const list = data.map((item) => {
        return !item.done ? (
            <ListItem key={Math.random()} active={active} value={item.done} onChecked={onChecked}>{item.action}</ListItem>
        ) : null
    })

    return (
        <div>
            <Form newTodo={sender} />
            {list}
        </div>
    );
}

export default Active;
