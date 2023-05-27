import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Task} from '../models/task.class.js'
import '../styles/task.scss'
import { LEVELS } from '../models/levels.enum.js';

export const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('tarea creada')
        return () => {
            console.log('tarea a punto de desmontarse')
        };
    }, [task]);

    /** Function returns a Bedge 
     * depending on the level of te task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6> 
                )
            case LEVELS.BLOQUING:
                return (
                    <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6> 
                )
            default:
                break;

        }

    }

    /**Function that returns icons depending completion tasks */
    function taskIconCompleted(){
        if (task.completed) {
            return (<i className='bi-toggle-on' style={{color:'green', fontWeight:'bold'}}></i>)
        } else {
            return (<i className='bi-toggle-off' style={{color:'red', fontWeight:'bold'}}></i>)
        }
    }


    return (

        <tr className='fw-normal'>
            <th><span className='ms-2'>{task.name}</span></th>
            <td><span className='align-middle'>{task.description}</span></td>
            <td>{taskLevelBadge()}</td>
            <td className='align-middle'>{taskIconCompleted()}
                <i className='bi-trash' style={{color:'tomato', fontSize:'20px'}}></i>
            </td>

        </tr>
       
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};



