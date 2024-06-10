import { useState, useEffect } from "react"




function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getData = async () => {
            setisPending(true)
            try {
                const request = await fetch(url)

                if (!request.ok) {
                    throw new Error("Something went wrong : (");
                }

                const response = await request.json();
                setData(response) ;
                setisPending(false);
                setError(null);
            } catch (err) {
                console.log(err.message);
                setisPending(false);
                setError(err.message);
            }
        
        } 
        getData()
    }, [url]);
  return {data, isPending, error}
}

export  {useFetch};