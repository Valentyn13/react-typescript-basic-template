import  {TodoItem} from './TodoItem';
import {ITodo} from './../types/data'

interface ITodoListProps {
    items:ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList:React.FC<ITodoListProps> = (props) => {
 const {items,removeTodo, toggleTodo} = props;
    return (
    <div>
        {
            props.items.map((todo) => <TodoItem 
            key={todo.id}
             {...todo}
             toggleTodo={toggleTodo}
             removeTodo={removeTodo}
             />)
        }
    </div>
    )
}



export  {
    TodoList
}