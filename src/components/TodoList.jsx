import {useState} from 'react';
import Input from './Input';

const TodoList = () => {

    const [lists, setLists] = useState([
        {
          id: 1,
          title: "Buy groceries",
          description: "Get milk, eggs, and bread from the store",
          completed: false,
        },
        {
          id: 2,
          title: "Finish project",
          description: "Complete the UI design for the new dashboard",
          completed: false,
        },
        {
          id: 3,
          title: "Workout",
          description: "Go for a 30-minute run",
          completed: true,
        },
        {
          id: 4,
          title: "Call Mom",
          description: "Check in and see how she's doing",
          completed: false,
        },
      ]);

    const toggleComplete = (id) => setLists(lists.map((list) => (list.id === id ? {...list, completed : !list.completed} : list )));

    return ( 
        <div className="card sm:min-w-96">
            <div className="card-header">
                <h1>Todo List</h1>
            </div>
            <div className="card-body">
                <div className="flex my-1">
                  <div className="flex-grow">
                    <Input style="rounded-full" placeholder="Add new task.."/>
                  </div>
                  <button className="mx-1 px-2 text-lg hover:bg-white/25 rounded-full"><i className="fa-solid fa-plus my-auto"></i></button>
                </div>
                <ul className="todo">
                {lists.map((list) => 
                    <li className={`todolist ${list.completed ? 'line-through opacity-50' :  'hover:bg-white/25'}`}
                    onClick={() => toggleComplete(list.id)} key={list.id}>{list.title}</li>
                )}
                </ul>
            </div>
        </div>
     );
}
 
export default TodoList;