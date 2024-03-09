import React, {useState,useEffect} from 'react'

 function Counter() {


// {const [counter, setCounter]= useState(0)

  const [counter, setCounter] = useState(0);
  // const [textboxValue, setTextBoxValue] = useState(0);
// function incre (){

// if(counter<=10){
// setCounter(counter + 1)

// }
// else{
//      setCounter(counter - 1)

// }
// }


// useEffect(() => {
  
//     setCounter((prevCount) => {
//       if (prevCount < 10) {
//         return prevCount + 1;
//       } else {
//         return prevCount - 1;
//       }
//       })
// },[]);

// function decre(){
//   if(counter>0){
//     setCounter(counter - 1)

//   }
// }
// function modifyCounter() {
//   setCounter(counter + textboxValue);
//   }

  return (
   <>

   {/* <button onClick={incre}>Incre</button>
   <p>{counter}</p> */}

   {/* <button onClick={incre}>Decre</button> */}
  {/* <input
          type="text"
          placeholder="Enter a number"
          onChange={(e) => {
            setTextBoxValue(Number(e.target.value));
          }}
        />
<button onClick={modifyCounter}>Change Counter Value</button>
<p>{counter}</p> */}


{/* <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <p>{counter}</p>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        Decrement
      </button> */}

<button onClick={()=>setCounter(counter +1)}>increament</button>
<p>{counter}</p>
<button onClick={()=>setCounter(counter -1)}>decreament</button>
   </>
  )
}

export default Counter