import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class'
const TaskForm = ({add}) => {

    const nameRef = useRef();
    const descriptionRef = useRef();
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        );
        add(newTask);

    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-item-center mb-4'>
            <div className='form-outline flex-fill'>
                <input type="text" placeholder= 'Tarea...'ref={nameRef} id = 'inputName' className='form-control form-control-lg' required autoFocus />
                <input type="text" placeholder= 'Descripción' ref={descriptionRef} id = 'inputDescription' className='form-control form-control-lg' required/>
                <label htmlFor='selectLevel' className='sr-only'>Prioridad</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgente</option>
                    <option value={LEVELS.BLOQUING}>Bloqueado</option>

                </select>

            
            
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Agregar</button>

        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
