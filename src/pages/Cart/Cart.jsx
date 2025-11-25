import React from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import { food_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const {cartItems,addToCart,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div className="cart-items-list" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{cartItems[item._id]*item.price}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p>X</p>
                <button onClick={()=>removeFromCart(item._id)}>Remove</button>
              </div>
            )
          }

        })}
      </div>
      <div className="cart-buttom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>

            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <p>{getTotalCartAmount()+2}</p>
            </div>
            
          </div>
          <button onClick={()=>navigate("/order")}>Proceed to checkout</button>
        </div>
        <div className="cart-promocode">
          <p>Have a promocode ?</p>
          <input type="text" placeholder='Promocode' />
          <button>Apply</button>

        </div>
      </div>


    </div>
  )
}

export default Cart