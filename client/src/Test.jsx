import { useEffect } from 'react';
import { useState } from 'react';

export default function Test(){

    //add state
    const [count, setCount] = useState(0);


    // #1 Prints first
    console.log("Component rendered");


    // #3 after component renders, useEffect runs and prints this
    useEffect( () => {
        console.log("useEffect called in Test.jsx");
    }, [count] );

    // onClick of the button run increment_count functionw
    function increment_count(){

        setCount( (prevCount) => prevCount + 1 );
        
    }



    // #2 UI is painted on the screen
    return(

        <>
        <h1>{count}</h1>
        <button onClick={increment_count}>
            Increase
        </button>
        
        
        </>



    )


    
}