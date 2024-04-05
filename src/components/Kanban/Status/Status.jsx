import React from 'react';
import "../css/StatusCard.css";
import Button from "../../UI/Button/Button";
function Status({ title, isDraggingOver,children }) {

  const [taskCount, setTaskCount] = React.useState(0);

  React.useEffect(() => {
    setTaskCount(React.Children.count(children));
  }, [children]);


  return (
    <div className={isDraggingOver ? 'status draggingover': 'status'}>
      <div className='status-header'>
        <h3>{title} ({taskCount})</h3>
        
      </div>
      <div className='task-list'>
        {children}
      </div>
      <Button title="Add Task" />{/* Style this button in your CSS */}
    </div>
  )
}

export default Status;
