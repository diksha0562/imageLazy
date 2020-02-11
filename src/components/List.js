import React from 'react';
const List = (props) => {
    const onDrag = event => {
        event.dataTransfer.setData("text", event.target.getAttribute('key'));
    }

    const getDim = event => {
        props.onDropElement({x:event.clientX-100, y: event.clientY, key: new Date().getUTCMilliseconds()});
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <ul>
                <li draggable key="event-1" onDragStart={onDrag} onDragEnd={getDim} key="events">Events</li>
            </ul>
        </React.Fragment>
    )
}

export default List;