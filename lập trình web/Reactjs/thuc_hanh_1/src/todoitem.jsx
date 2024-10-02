import React, { useState } from 'react';
import './todo.css';
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';

const ToDoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(props.title);
    const [editedDueDate, setEditedDueDate] = useState(props.dueDate);

    
    const handleSave = () => {
        props.onEdit(props.id, editedTitle, editedDueDate);
        setIsEditing(false); 
    };

    return (
        <div className="ToDoItem">
            <input type="checkbox" />
            <div className="ItemContent">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            value={editedDueDate}
                            onChange={(e) => setEditedDueDate(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <p className="Title">{props.title}</p>
                        <p className="DueDate">{props.dueDate}</p>
                    </>
                )}
            </div>
            <div className="Action">
                {isEditing ? (
                    <CheckOutlined onClick={handleSave} />
                ) : (
                    <EditOutlined onClick={() => setIsEditing(true)} />
                )}
                <DeleteOutlined onClick={props.onDelete} />
            </div>
        </div>
    );
};

export default ToDoItem;

