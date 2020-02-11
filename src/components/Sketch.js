import React, {useState} from 'react';
const Sketch = ({elementPos,updatePosElement}) => {
    const [dragging, setDragging] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: elementPos.x, y: elementPos.y });
    const [origin, setOrigin] = useState({ x: 0, y: 0 });
    const labelX =   coordinates.x;
    const labelY = coordinates.y;

    const deleteElement = (e)=>{
        console.log('TODO:delete');
    }
    const onMouseDownSvg = e => {
 
        setOrigin({ x: e.clientX, y: e.clientY });
        setDragging(true);
    }

    const onMouseMoveSvg = e => {
       
         const xCoordinate = origin.x + e.clientX-elementPos.x;
         const yCoordinate = origin.y + e.clientY-elementPos.y;
   
        if (dragging && xCoordinate>0 && yCoordinate>0 && xCoordinate< window.innerWidth-200 && yCoordinate < window.innerHeight) {
          let xShiftFromOrigin = e.clientX-origin.x;
          let xCordinateElem = elementPos.x + xShiftFromOrigin;
          let yShiftFromOrigin = e.clientY-origin.y;
          let yCordinateElem = elementPos.y + yShiftFromOrigin;
          console.log('x,y',xCoordinate, yCoordinate);
          setCoordinates({
            x: xCordinateElem,
            y: yCordinateElem,
          })
        }
      }

      const onMouseUpSvg = () => {
          console.log('coordinates on mouseup', coordinates);
          setDragging(false);
          updatePosElement({x:coordinates.x, y: coordinates.y , key: elementPos.key});
      }
    return(
                <svg key={elementPos.key}>
                
       
            <g 
           
                key={elementPos.key}
                style={{userSelect: 'none'}} 
                transform={`translate(${labelX}, ${labelY})`}
                onMouseDown={onMouseDownSvg}
                onMouseMove={onMouseMoveSvg}
                onMouseUp={onMouseUpSvg}

            >
            <rect width="100" height="100" strokeWidth="4" fill="transparent" stroke="rgb(0,0,0)"/>
            <circle cx="70" cy="10" r="7" fill="brown" onClick={deleteElement}/>
            <line x1="100" y1="5" x2="200" y2="5" stroke="rgb(255,0,0)" strokeWidth="2" />
            </g>
             
            </svg>
    )
}

export default Sketch;