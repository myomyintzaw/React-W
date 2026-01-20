import React, { useReducer } from "react";


const initialState={
    count:1000
};

function reducer(state:typeof initialState,action:{type:string}){
    switch(action.type){
        case 'increment':
            return {count:state.count + 1};
        case 'decrement':
            return {count:state.count -1};
        case 'reset':
            return {count:0};
        default:
            throw new Error();            
    }
}


const HelloReducer:React.FC=()=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    return(
     <>   
            <p>Count: {state.count}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded mx-2" onClick={() => dispatch({ type: "increment" })}>
             Increment
             </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded mx-2" onClick={() => dispatch({ type: "decrement" })}>
             Decrement
             </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded mx-2" onClick={() => dispatch({ type: "reset" })}>
             Reset
             </button>
     </>
    );
};
export default HelloReducer;




// ==========================simple write method========================//

// export default function HelloReducer() {
//     const [state,dispatch]=useReducer(reducer,initialState);

//   return (
//     <>     
//             <p>Count: {state.count}</p>
//             <button className="px-4 py-2 bg-blue-500 text-white rounded mx-2" onClick={() => dispatch({ type: "increment" })}>
//             Increment
//             </button>
//              <button className="px-4 py-2 bg-blue-500 text-white rounded mx-2" onClick={() => dispatch({ type: "decrement" })}>
//               Decrement
//             </button>
//              <button className="px-4 py-2 bg-blue-500 text-white rounded mx-2" onClick={() => dispatch({ type: "reset" })}>
//             Increment
//             </button>
//             {/* <button className="bg-green-500 px-2 py-2 rounded-md text-white mx-2" onClick={()dispatch({type:'increment'})}>Increment </button> */}
        
//     </>
//   );
// }

