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
        <div className="card">
            <div className="card-header">
                <h1>Todo List</h1>
            </div>
            <div className="card-body">
                <div className="flex">
                    <Input placeholder="Add new task.."/>
                    <button className="mx-1 text-2xl px-1 hover:bg-white/25"><i className="fa-solid fa-plus my-auto"></i></button>
                </div>
                <ul className="flex flex-col gap-y-2 mt-2">
                {lists.map((list) => 
                    <li className={`px-2 rounded-lg cursor-pointer ${list.completed ? 'line-through opacity-50' :  'hover:bg-white/25'}`}
                    onClick={() => toggleComplete(list.id)} key={list.id}>{list.title}</li>
                )}
                </ul>
            </div>
        </div>
     );
}
 
export default TodoList;