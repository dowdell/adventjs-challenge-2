function CartItem({ item, inc, dec }) {
  return (
    <div>
      <div className="content">
        <p className="menu-item">{item.name}</p>
        <p className="price">${item.price / 100}</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease" onClick={dec}>
          <img src="images/chevron.svg" alt="" />
        </button>
        <div className="quantity">{item.count}</div>
        <button className="increase" onClick={inc}>
          <img src="images/chevron.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
