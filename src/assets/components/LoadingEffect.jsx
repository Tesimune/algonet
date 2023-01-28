import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function LoadingEffect(props) {
    const [loading, setLoading] = useState(true);

    const location = useLocation();
  
    useEffect(() => {
        // setLoading(true)
        window.addEventListener("load", () => setLoading(false));
        setTimeout(() => {
        setLoading(false);
        }, 2000);
        // return () => window.removeEventListener("load", () => setLoading(false));
    }, [location.pathname]);

  return (
    <div>
        {loading ? 
            <>
                <div className='bg-white flex justify-center items-center min-h-screen p-9'>
                    <img src='/app/algonet.gif' className='flex items-center text-5xl font-bold' />
                </div> 
            </>
            :
            <div>
                {props.children}
            </div>
        }
    </div>
  )
}

export default LoadingEffect