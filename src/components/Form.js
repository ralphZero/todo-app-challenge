import React from 'react'
import sheet from './Form.module.css'

const Form = ({newTodo}) => {

    function onButtonClick(e) {
        const input = e.currentTarget.previousElementSibling;
        newTodo(input.value);
        input.value = null;
    }

    return (
        <div className={sheet.container}>
            <input className={sheet.input} type="text" placeholder='add details' onSubmit={(e)=>{e.preventDefault()}} />
            <button className={sheet.btn} onClick={onButtonClick} >Add</button>
        </div>
    )
}
export default Form