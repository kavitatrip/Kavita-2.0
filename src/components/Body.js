import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import UserContext from "../../utilities/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8687877&lng=77.6603593&collection=80440&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8687877&lng=77.6603593&collection=80440&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const resData = await res.json();

    // console.log(resData);
    const displayData = resData?.data?.cards.slice(3);
    setResList(displayData);
    setFilteredList(displayData);
  };

  if (resList.length === 0) return <Shimmer />;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body">
      <div className="filter flex flex-col space-y-4 p-4">
        {/* Search Input and Button */}
        <div className="flex items-center space-x-4 px-2">
          <input
            className="border border-solid rounded-md px-3 py-2"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg mx-2"
            onClick={() => {
              const filteredValue = resList.filter((res) =>
                res.info.name.includes(searchText)
              );
              setFilteredList(filteredValue);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Restaurants Button */}
        <div className="px-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md w-full"
            onClick={() => {
              const dataa = resList.filter((res) => res.info.avgRating > 4.3);
              console.log(dataa);
              setResList(dataa);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        {/* Username Input */}
        <div className="flex items-center space-x-4 mx-4">
          <label>Username :  </label>
          <input
            className="border border-solid rounded-md px-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredList?.map((item) => (
          <RestaurantCard key={item?.card.card.info?.id} resData={item} />
        ))}
      </div>
    </div>
  );
};
export default Body;
