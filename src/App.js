import React, {useState} from 'react';
import List from './components/List';
import Grid from './components/Grid';

const App = (props) => {
    const [elementPosArray, updateElementPosArray] = useState([]);

    const onDropElement = ({x,y,key}) => {
        const elementPosArrayCopy = elementPosArray.slice();
        elementPosArrayCopy.push({x,y, key});
        updateElementPosArray(elementPosArrayCopy);
        console.log('elementPosArrayCopy',elementPosArrayCopy);
    }

    const updatePosElement = ({x,y,key}) => {
      const elementPosArrayCopy = elementPosArray.map((element)=>{
        if(element.key == key){
          element.x = x;
          element.y = y;
        }
        return element;
      });
      updateElementPosArray(elementPosArrayCopy);
    }

      
    return(
        <div style={{display:'flex'}}>
          {console.log('elementPosArray',elementPosArray)}
            <List onDropElement={onDropElement}/>
            <Grid elementPosArray={elementPosArray} updatePosElement={updatePosElement}/>
        </div>
    )
}


export default App;