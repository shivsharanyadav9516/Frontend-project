import React, { useContext } from 'react'
import './PlaceOrder.css'
import { useOutletContext } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order">
  <div className="place-order-left">
    <p className="title">Delivery Information</p>
    <div className="multi-fields">
      <input type="text" placeholder="First Name" name="firstName" required />
      <input type="text" placeholder="Last Name" name="lastName" required />
    </div>
    <div className="multi-fields">
      <input type="text" placeholder="City" name="city" required />
      <input type="text" placeholder="State" name="state" required />
    </div>
    <div className="multi-fields">
      <input type="text" placeholder="Zip Code" name="zipCode" required />
      <input type="text" placeholder="Country" name="country" required />
    </div>
    <input type="email" placeholder="Email Address" name="email" required />
    <input type="text" placeholder="Street Address" name="streetAddress" required />
  </div>
  <div className="place-order-right">
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
          <button>Proceed to Payment</button>
        </div>
    
  </div>
  <button type="submit" className="place-order-btn">Place Order</button>
</form>
   
  )
}

export default PlaceOrder