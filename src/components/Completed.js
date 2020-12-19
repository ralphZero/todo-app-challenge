import React from 'react';
import ListItem from './ListItem'
import sheet from './DeleteButton.module.css'

const Completed = ({data, sender, onChecked, onDeleted}) => {

    const active = 2;

    const list = data.map((item) => {
        return item.done ? (
            <ListItem key={Math.random()} active={active} value={item.done} onChecked={onChecked}>{item.action}</ListItem>
        ) : null
    })

    function handleDelete(e){
        console.log('delete all');
    }

    return (
        <div>
            {list}
            <button onClick={handleDelete} className={sheet.btn} >delete all</button>
        </div>
    );
}

export default Completed;
