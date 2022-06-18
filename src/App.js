import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
// import { fetchApiCall, fetchApiFail, fetchApiSuccess } from './Redux/Reducer/Reducer';
import {fetchAllUser} from './Redux/AsyncApi/AsyncAPI';
import MainComponents from './Components/MainComponents/MainComponents';
import LoaderBackdrop from './OtherComponents/LoaderBackdrop';

function App() {
  // const userState =  useSelector((state)=> state.userData)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllUser(1))
  }, [dispatch])


  return (
    <div>
      <LoaderBackdrop/>
      <MainComponents/>
      {/* <br></br>
      <button
          aria-label="fetchApiCall"
          onClick={() => dispatch(fetchApiCall())}
        >
          fetchApiCall
        </button>
        <button
          aria-label="fetchApiSuccess"
          onClick={() => dispatch(fetchApiSuccess([{data:"newData"}]))}
        >
          fetchApiSuccess
        </button>
        <button
          aria-label="fetchApiFail"
          onClick={() => dispatch(fetchApiFail("error ocured"))}
        >
          fetchApiFail
        </button> */}
    </div>
  );
}

export default App;
