import React, { useState } from 'react';
import ToDoItem from "./todoitem";
import { PlusCircleOutlined } from '@ant-design/icons';

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Gửi email nộp bài tập về nhà", dueDate: "Hôm nay" },
        { id: 2, title: "Học từ vựng tiếng anh mỗi ngày", dueDate: "Ngày mai" },
        { id: 3, title: "Viết tiểu luận môn Triết học", dueDate: "Tuần tới" }
    ]);

    
    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    };

    const addTask = () => {
        const newTask = { id: tasks.length + 1, title: "New Task", dueDate: "No Deadline" };
        setTasks([...tasks, newTask]);
    };

    
    const editTask = (id, newTitle, newDueDate) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, title: newTitle, dueDate: newDueDate } : task
        );
        setTasks(newTasks);
    };

    return (
        <div className="ToDoList" style={{ marginLeft: '10px' }}>
            <h1>My work 🎯</h1>
            <div>
                {tasks.map(task => (
                    <ToDoItem 
                        key={task.id} 
                        id={task.id}
                        title={task.title} 
                        dueDate={task.dueDate} 
                        onDelete={() => deleteTask(task.id)}
                        onEdit={editTask}
                    />
                ))}
            </div>
            <div style={{ marginTop: '5px' }} onClick={addTask}>
                <PlusCircleOutlined style={{ fontSize: '20px', color: '#d1453b' }} /> Add Task
            </div>
        </div>
    );
}

export default ToDoList;
