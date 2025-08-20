import ItemList from "../components/ItemList"

const RestaurantCatagory = (props) => {
    const { data , showItems, setShowIndex } = props;

    const showListItem = () => {
        setShowIndex()
    }

    return (
        <div className="w-6/12 my-2 m-auto bg-gray-20 shadow-lg p-4 "> 
            <div className="flex justify-between cursor-pointer" onClick={showListItem}>
                <span className="font-bold">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>{showItems === false ? "⬇️" : "➖"}</span>
            </div>
                {showItems === true ? <ItemList items={data.itemCards} /> : null}
        </div>
    )
}

export default RestaurantCatagory;