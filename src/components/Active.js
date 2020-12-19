import React from 'react';
import Form from './Form'
import ListItem from './ListItem'
import addTodo from '../addtodo.svg'

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
            {list.length !== 0 ? (
                list
            ) : (
                <div style={{display : 'flex', justifyContent : 'center', paddingTop : 50}}>
                    <img className='error-img' src={addTodo} alt="no data"/>
                </div>
            )}
        </div>
    );
}

export default Active;
