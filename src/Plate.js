function Plate({ item, qty }) {
  return (
    <div className="plate">
      <img src={"images/" + item.image} alt={item.alt} className="plate" />
      {qty && <div className="quantity">{qty}</div>}
    </div>
  );
}

export default Plate;
