import Plate from "./Plate";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

function Cart({ items, inc, dec }) {
  return (
    <div className="panel cart">
      <h1>Your Cart</h1>
      {items.filter((i) => i.count).length === 0 && (
        <p className="empty">Your cart is empty.</p>
      )}

      <ul className="cart-summary">
        {items.map(
          (item, index) =>
            (item.count && (
              <li key={index}>
                <Plate item={item} qty={item.count} />
                <CartItem
                  item={item}
                  inc={() => {
                    inc(index);
                  }}
                  dec={() => {
                    dec(index);
                  }}
                />
                <div className="subtotal">
                  ${(item.price * item.count) / 100}
                </div>
              </li>
            )) ||
            ""
        )}
      </ul>
      <CartTotal items={items} />
    </div>
  );
}

export default Cart;
