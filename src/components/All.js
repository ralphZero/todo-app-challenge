import React from 'react';
import Form from './Form';
import ListItem from './ListItem';

const All = ({data, sender, onChecked}) => {
    const active = 0;

    const list = data.map((item) => {
        return (
            <ListItem key={Math.random()} id={item.id} active={active} value={item.done} onChecked={onChecked}>{item.action}</ListItem>
        )
    })
    return (
        <div style={{padding : 10}}>
            <Form newTodo={sender}/>
            {list}
        </div>
    );
}

export default All;
