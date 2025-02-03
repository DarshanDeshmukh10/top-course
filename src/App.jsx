import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import './App.css';
import { apiUrl,filterData } from './data';
import { useState, useEffect } from 'react';
import {toast} from "react-toastify";
//import Toastify from 'toastify-js';
//import 'toastify-js/src/toastify.css';
import Spinner from './components/Spinner';
function App() {
 
  const[courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(true);
  
  useEffect(()=>{
    const fetchdata=async()=>{
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        //save data to a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchdata();
  },[])
  return ( 
    <div className='flex flex-col min-h-screen'>
        <div>
          <Navbar/>
        </div>    
        <div className='bg-[#4a4e69]'>
        <div>
          <Filter filterData={filterData}/>
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} />)
          }
        </div>
        </div>
         
        
    </div>
  );
}

export default App;
