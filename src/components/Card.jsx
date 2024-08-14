import Draggable from 'react-draggable';
import { useState, useRef } from 'react';

const Card = (props) => {

  const nodeRef = useRef(null);
  const [text, setText] = useState('Write something here.');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Draggable nodeRef={nodeRef} handle=".header">
      <div ref={nodeRef} className="card">
        <div className="header">{props.title}</div>
        {isEditing ? <div><textarea className="text-input" value={text} onChange={(e) => 
          setText(e.target.value)} onDoubleClick={() => setText('')} /><button onClick={() => 
          setIsEditing(false)}>Save</button></div> : <p onClick={() => setIsEditing(true)}>{text}</p>}
      </div>
    </Draggable>
  )
}

export default Card;