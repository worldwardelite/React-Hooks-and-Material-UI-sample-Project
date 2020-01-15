
import React, {useState, useEffect} from 'react';

const useFetch = (callback, url) => {

    const [loading, setLoading] = useState(false);
    
    const fetchIitialData = async () =>{
      setLoading(true)
      
      const response = await fetch(url);
      const initialData = await response.json();
      callback(initialData);
      setLoading(false);
      console.log(initialData);
    }
  
    useEffect(() => {
        
      fetchIitialData();
    }, []) // it is only called once only at first because use [] at second parameter:, 
  
    return loading;
  }

  export default useFetch