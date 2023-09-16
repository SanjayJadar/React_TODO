import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import Clock from 'react-digital-clock';
import Tooltip from '@material-ui/core/Tooltip';

const getLocalData = () => {
    const lists = localStorage.getItem('myTodoData');
    
    if(lists){
        return JSON.parse(lists);
    }
    else{
        return [];
    }
}

const App = () => {

    const [inputList, setInputList] = useState(''); 
    const [Items, setItems] = useState(getLocalData());

    const itemEvent = (e) => {  
        setInputList(e.target.value);
    }

    const listOfItems = () => {
        if(inputList){
            setItems((oldItems)=>{
                return [...oldItems, inputList]
            });
            setInputList('');
        }
    }

    // Delete Item
    const deleteItem = (id) => {
        console.log('deleted');
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !== id;
            })
        })
    }

    // Update Item
    // const updateItem = (id) => {
    //     console.log('Updated');
    //     Items[id]                                      // Inprogress
    //     setItems([...Items, Items[id]])
    // }

    // Setting the data in localStorage
    useEffect(()=>{
        localStorage.setItem('myTodoData', JSON.stringify(Items))
    },[Items]);

    return (
        <> 
            <div style={{backgroundColor:'black',fontSize:'40px'}}>
            <Clock/>
            </div>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type='text' placeholder="Add Items" value={inputList} onChange={itemEvent}/>
                    <Tooltip title='Add'>
                    <button onClick={listOfItems}>+</button>
                    </Tooltip>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {Items.map((itemVal, index)=>{
                            // key = 
                            return <ToDoList key={index} id={index} inputList={inputList} setInputList={setInputList} text={itemVal} onSelect={deleteItem}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}


export default App;