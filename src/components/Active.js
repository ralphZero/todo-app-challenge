import React from 'react';
import Form from './Form'
import ListItem from './ListItem'

const Active = ({data, sender, onChecked}) => {
    
    const active = 1;

    const list = data.map((item) => {
        return !item.done ? (
            <ListItem key={Math.floor(Math.random()*16777215).toString(16)} id={item.id} active={active} value={item.done} onChecked={onChecked}>{item.action}</ListItem>
        ) : null
    })

    return (
        <div style={{padding : 10}}>
            <Form newTodo={sender} />
            {list}
        </div>
    );
}

export default Active;
