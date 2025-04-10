import ItemsList from "./ItemsList";

const RestaurantCategories = ({ data, showItems, setShowIndex, index }) => {
  const handleShowItems = () => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the index
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-3 bg-gray-200 shadow-lg p-4 cursor-pointer">
        <div className="flex justify-between" onClick={handleShowItems}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemsList data={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
