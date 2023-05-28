import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class.js'
import { LEVELS } from '../../models/levels.enum.js';

import {TaskComponent} from '../../pure/TaskComponent.jsx'
import TaskForm from '../../pure/forms/taskForm.jsx';


const TaskListComponent = () => {

    // Estado del componente
    const defaultTask1 = new Task('Example1', 'desc ejemplo',false,LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'desc ejemplo',false,LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'desc ejemplo',false,LEVELS.BLOQUING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2,defaultTask3]);
    const [loading, setLoading] = useState(true)
    

    //Control de ciclo de vida

    useEffect(() => {
        console.log('Control de cambio de tareas')
        setLoading(false)
        return () => {
            console.log('tarea completada')
        };
    }, [tasks]);

   
    function completeTask(task){
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // Actualizamos el estado del componente y el icono
        setTasks(tempTasks);
    }

    return (

        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrolling = 'true' style={{position:'relative', height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Tarea</th>
                                    <th scope='col'>Descripción</th>
                                    <th scope='col'>Prioridad</th>
                                    <th scope='col'>Acciones posibles</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key = {index} 
                                            task={task}
                                            complete={completeTask}/>
                                        
                                        )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    <TaskForm/>
                </div>
            </div>
            
        </div>
    );
};




export default TaskListComponent;
