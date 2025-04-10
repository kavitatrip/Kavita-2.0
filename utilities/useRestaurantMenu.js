import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null);

    useEffect(() => {
        fetchResData();
    }, []);

    const fetchResData = async () => {
        const res = await fetch(
            MENU_URL
        );
        const resData = await res.json();
        console.log(resData?.data, resId);   
        setResInfo(resData?.data)
    }
    return resInfo;
}

export default useRestaurantMenu;