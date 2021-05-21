import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function EditableField(props) {
    const inputRef = useRef();
    let value = props.value;
    const [editMode, setEditMode] = useState(props.editMode || false);
    function swapMode() {
        if (editMode) {
            props.onNewValue(inputRef.current.value);
        }
        setEditMode(!editMode);
    }
    function onKeyDown(event) {
        if (event.keyCode === 13) {
            props.onNewValue(inputRef.current.value);
            setEditMode(false);
        }
    }
    return (
        <>
            {editMode ? <input type="text" defaultValue={value} ref={inputRef} onKeyDown={onKeyDown} /> : <span>{value}</span>}
            <button onClick={swapMode} className="edit-btn"><FontAwesomeIcon icon={faPen} /></button>

        </>
    )
}

export default EditableField;