import { RES_IMG } from "../../utilities/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../../utilities/reduxSlices/cartSlice";

const ItemsList = (items) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item)); //'Pasta' = action.payload, dispatching an action addItems
  };
  return (
    <div>
      {items?.data?.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b border-gray-50 text-left"
        >
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold">{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
              <p className="text-gray-500 text-xs">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-40">
            <img src={RES_IMG + item.card.info.imageId} />
              {/* <div className="absolute"> */}
                <div className="mx-10 px-3"> 
              <button className="bg-black text-white"> - </button>
             
                <button
                  className="rounded-s-sm bg-black text-white cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  {' '} ADD +
                </button>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;