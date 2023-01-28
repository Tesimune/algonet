import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function LoadingEffect(props) {
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, [location.pathname]);
  
    useEffect(() => {
        window.addEventListener("load", () => setLoading(false));
        return () => window.removeEventListener("load", () => setLoading(false));
    }, []);

  return (
    <div>
        {loading ? 
            <>
                <div className='flex justify-center items-center min-h-screen'>
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