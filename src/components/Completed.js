import React from 'react';
import ListItem from './ListItem'
import sheet from './DeleteButton.module.css'
import completeTodo from '../completetodo.svg'

const Completed = ({data, onChecked, onDeleted}) => {

    const active = 2;

    const list = data.map((item) => {
        return item.done ? (
            <ListItem key={Math.floor(Math.random()*16777215).toString(16)} id={item.id} active={active} value={item.done} onChecked={onChecked} onDelete={onDeleted}>{item.action}</ListItem>
        ) : null
    }).filter((item) => {
        return item !== null
    })

    return (
        <div style={{padding : 10}}>
            {list.length !== 0 ? (
                list
            ) : (
                <div style={{display : 'flex', justifyContent : 'center', paddingTop : 50, paddingBottom : 50}}>
                    <img className='error-img' src={completeTodo} alt="no data"/>
                </div>
            )}
            <button onClick={() => {onDeleted()}} className={sheet.btn}>delete all</button>
        </div>
    );
}

export default Completed;
