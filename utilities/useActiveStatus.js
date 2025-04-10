import { useEffect, useState } from "react"

const useActiveStatus = () => {
    const [ isActive, setIsActive ] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => setIsActive(true))

        window.addEventListener("offline", () => setIsActive(false))
    }, []);
     
    return isActive;
    
};

export default useActiveStatus;