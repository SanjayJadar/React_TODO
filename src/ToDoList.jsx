import React from "react";
import Tooltip from '@material-ui/core/Tooltip'; 

const ToDoList = (props) => {

    return (
        <>
            <div className="todo_style">
                <Tooltip title='Delete'>
                <i className="fa fa-times" aria-hidden='true' onClick={()=>{
                    props.onSelect(props.id)
                }}/>
                </Tooltip> 
                <li onClick={()=>{props.setInputList(props.text);  props.onSelect(props.id)}}>{props.text}</li>             
             </div>
        </>
    )

}

export default ToDoList;