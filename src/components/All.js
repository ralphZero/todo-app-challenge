import React from 'react';
import Form from './Form';
import ListItem from './ListItem';
import addTodo from '../addtodo.svg'

const All = ({data, sender, onChecked}) => {
    const active = 0;

    const list = data.length !== 0 ? (data.map((item) => {
        return (
            <ListItem key={Math.floor(Math.random()*16777215).toString(16)} id={item.id} active={active} value={item.done} onChecked={onChecked}>{item.action}</ListItem>
        )
    })) : (
        <div style={{display : 'flex', justifyContent : 'center', paddingTop : 50}}>
            <img className='error-img' src={addTodo} alt="no data"/>
        </div>
    )
    return (
        <div style={{padding : 10}}>
            <Form newTodo={sender}/>
            {list}
        </div>
    );
}

export default All;
