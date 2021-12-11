function MenuItem({ item, inc }) {
  return (
    <div className="content">
      <p className="menu-item">{item.name}</p>
      <p className="price">${item.price / 100}</p>
      {item.count > 0 ? (
        <button className="in-cart">
          <img src="images/check.svg" alt="Check" /> In Cart{" "}
        </button>
      ) : (
        <button className="add" onClick={inc}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default MenuItem;
