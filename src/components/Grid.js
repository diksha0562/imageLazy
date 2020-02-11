import React, {useState} from 'react';
import Sketch from './Sketch';

const Grid = ({elementPosArray, updatePosElement}) => {

    const [svgImage, updateImage] = useState();

    const importImage = () => {
        if(svgImage == 'uploaded'){
            return elementPosArray.map((elementPos, index)=><Sketch elementPos={elementPos} key={index} updatePosElement={updatePosElement}/>)
        }
        return ''
    }

    const onSvgDrop = (e) => {
        e.preventDefault();
        updateImage('uploaded');
    }

    return(
        <React.Fragment>
            <svg width={window.innerWidth-200} height={window.innerHeight}  data-attr="gridSvg" onDrop={onSvgDrop} onDragOver={(e)=>e.preventDefault()} style={{backgroundColor:'peachpuff'}}>
            {/* <svg viewBox="100 0 300 100" width="100%" height="100%"  data-attr="gridSvg" onDrop={onSvgDrop} onDragOver={(e)=>e.preventDefault()} style={{border: '3px solid red'}}> */}
                <g>
                    {/* <rect width="100%" height="100%" fill="thistle"/> */}
                    {importImage()}
                </g>
            </svg>
        </React.Fragment>
    )
}
export default Grid;