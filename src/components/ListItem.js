import React from 'react'
import sheet from './ListItem.module.css'

const ListItem = ({active, value, onCheck, onDelete, children}) => {

    const item = active === 2 ? (
        <svg className={sheet.icon} onClick={() => {onDelete()}} height='24' width='24' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 
            10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 
            19 17.59 13.41 12z'></path>
        </svg>
    ) : (
        null
    )

    const span = value ? (
        <span className={sheet.text+' '+sheet.deleted}>{children}</span>
    ) : (
        <span className={sheet.text}>{children}</span>
    )

    function handleCheck(e) {
        let value = e.currentTarget.checked;
        onCheck(value);
    }

    return (
        <div className={sheet.container}>
            <input className={sheet.input} type="checkbox" checked={value} name="check" onChange={handleCheck}/>
            {span}
            {item}
        </div>
    )

}

export default ListItem