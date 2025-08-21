import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button 
                    className="m-2 p-2 bg-black text-white rounded-lg"
                    onClick={
                        () =>  dispatch(clearCart())
                    }
                >Clear Cart</button>
                {
                 cartItems.length === 0 && <h1>Cart is empty Add Items to the cart!</h1>   
                }
                <ItemList items={cartItems}/>   
            </div>
        </div>
    )
}

export default Cart;