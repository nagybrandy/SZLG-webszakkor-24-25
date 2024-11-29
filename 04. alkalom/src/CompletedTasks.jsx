import React from 'react'
import CompletedTaskItem from './CompletedTaskItem'

const CompletedTasks = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(task => <CompletedTaskItem task={task} key={task.id} />)}
        </ul>
    )
}

export default CompletedTasks
