import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button onClick={() => history.push("/checkout")}>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
