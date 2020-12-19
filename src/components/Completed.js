import React from 'react';
import ListItem from './ListItem'
import sheet from './DeleteButton.module.css'

const Completed = ({data, onChecked, onDeleted}) => {

    const active = 2;

    const list = data.map((item) => {
        return item.done ? (
            <ListItem key={Math.floor(Math.random()*16777215).toString(16)} id={item.id} active={active} value={item.done} onChecked={onChecked} onDelete={onDeleted}>{item.action}</ListItem>
        ) : null
    })

    return (
        <div style={{padding : 10}}>
            {list}
            <button onClick={() => {onDeleted()}} className={sheet.btn}>delete all</button>
        </div>
    );
}

export default Completed;
