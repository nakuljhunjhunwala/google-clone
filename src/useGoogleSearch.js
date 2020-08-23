// eslint-disable-next-line no-unused-vars
import React, {useState , useEffect} from 'react';
import API_KEY from "./keys";

const CONTEXT_KEY = "56e0cd4163f56514c"

const useGoogleSearch = (term) => {
   const [data, setdata] = useState(null);

   useEffect(()=>{
    const fecthData = async() =>{
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(res => res.json())
        .then(result => {
            setdata(result)
        })
    }

    fecthData();

   }, [term])

   return{data}
};


export default useGoogleSearch;
