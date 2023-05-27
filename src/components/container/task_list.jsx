import React from 'react';
import { Task } from '../../models/task.class.js'
import { LEVELS } from '../../models/levels.enum.js';

import {TaskComponent} from '../../pure/TaskComponent.jsx'


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'desc ejemplo',false,LEVELS.NORMAL);

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            <TaskComponent task={defaultTask}/>
        </div>
    );
};




export default TaskListComponent;
