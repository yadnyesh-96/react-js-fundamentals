import { useState, useEffect } from "react";

function useFetch(url){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        if(!url) return;

        setLoading(true);

        fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw new Error("Something went wrong");
                }
                return res.json();
            })
            .then((res)=>{
                setData(res);
                setError(null);
            })
            .then((e)=>{
                setError(e.message);
            })
            .finally(()=>{
                setLoading(false);
            })
    },[])

    return {data,loading,error}
}

export default useFetch;