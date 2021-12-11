import MenuItem from "./MenuItem";
import Plate from "./Plate";

function Menu({ items, inc }) {
  return (
    <div className="panel">
      <h1>To Go Menu</h1>
      <ul className="menu">
        {items.map((item, index) => (
          <li key={index}>
            <Plate item={item} />
            <MenuItem
              item={item}
              inc={() => {
                inc(index);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
