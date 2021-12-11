const sum = (cost, item) => cost + item.price * item.count;

function CartTotal({ items }) {
  const subtotal = items.reduce(sum, 0);
  const tax = subtotal * 0.0975;

  return (
    <div className="totals">
      <div className="line-item">
        <div className="label">Subtotal:</div>
        <div className="amount price subtotal">
          ${(subtotal / 100).toFixed(2)}
        </div>
      </div>
      <div className="line-item">
        <div className="label">Tax:</div>
        <div className="amount price tax">${(tax / 100).toFixed(2)}</div>
      </div>
      <div className="line-item total">
        <div className="label">Total:</div>
        <div className="amount price total">
          ${((subtotal + tax) / 100).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
