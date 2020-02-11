import React, {Suspense, useReducer} from 'react';
import { reducer, initialState} from './reducers/index';
import Counter from './Counter';

const ImageComponent = React.lazy(()=>import('./ImageComponent'));

const imageArray = [
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
    'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
    'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
    'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'
]
export const Context = React.createContext();

const App2 = () => {
    const [store, dispatch] = useReducer(reducer, initialState);

    return(<>
        <div>App2</div>
        <Context.Provider value={{ store, dispatch }}><Counter/></Context.Provider>
       
     {imageArray.map((image,i) =>  <Suspense fallback={<div>Loading...</div>}><ImageComponent src= 'https://homepages.cae.wisc.edu/~ece533/images/zelda.png' imageUrl={image}/></Suspense>)}

        </>
    )
}
export default App2;

// Suspense is not available server-side and React.lazy can only work with Suspense. That's why today, React.lazy is not an option if you need Server Side Rendering.