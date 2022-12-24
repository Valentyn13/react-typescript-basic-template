import {ITodo} from './../types/data'

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id:number) => void;
}

const TodoItem:React.FC<ITodoItem> = (props) => {
 const {id, title, complete, removeTodo, toggleTodo} = props
    return(
        <div>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
            <span
            style={{
                display:'inline-block',
                margin: '2px 10px'
            }}
            >{title}</span>
            <button 
            onClick={()=>removeTodo(id)}
            style={{
                background: 'transparent',
                color:'red',
                outline:'none',
                border: 'none',
            }}
            >X</button>
        </div>
    )
}



export  {
    TodoItem
};