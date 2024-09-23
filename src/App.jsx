import { useSelector, useDispatch } from 'react-redux';

function App() {
   const data = useSelector(store => store);
   const dispatch = useDispatch();

   function handleIncrease(){
    dispatch({type:"INCREASE"});
   }

   function handleDecrease(){
    dispatch({type:"DECREASE"});
   }

   return(
    <>
    <h1>Count: {data}</h1>
    <button onClick={handleIncrease}>INCREASE</button>
    <button onClick={handleDecrease}>DeCREASE</button>
    </>
   )
}

export default App
