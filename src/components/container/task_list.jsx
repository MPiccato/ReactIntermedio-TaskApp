import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class.js'
import { LEVELS } from '../../models/levels.enum.js';

import {TaskComponent} from '../../pure/TaskComponent.jsx'


const TaskListComponent = () => {

    // Estado del componente
    const defaultTask = new Task('Example', 'desc ejemplo',false,LEVELS.NORMAL);

    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true)
    

    //Control de ciclo de vida

    useEffect(() => {
        console.log('Control de cambio de tareas')
        setLoading(false)
        return () => {
            console.log('tarea completada')
        };
    }, [tasks]);

    const changeCompleted = () => {
        console.log('Cambiar el estado de una tarea')
    }
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            <TaskComponent task={defaultTask}/>
        </div>
    );
};




export default TaskListComponent;
