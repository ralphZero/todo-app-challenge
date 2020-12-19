import React from 'react';
import Form from './Form';
import ListItem from './ListItem';

const All = ({data, sender, onChecked}) => {
    const active = 0;

    const list = data.map((item) => {
        return (
            <ListItem key={Math.floor(Math.random()*16777215).toString(16)} id={item.id} active={active} value={item.done} onChecked={onChecked}>{item.action}</ListItem>
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
