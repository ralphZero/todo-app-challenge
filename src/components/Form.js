import React from 'react'
import sheet from './Form.module.css'

const Form = (props) => {

    function onButtonClick(e) {
        const input = e.currentTarget.previousElementSibling;
        props.newTodo = input.value;
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