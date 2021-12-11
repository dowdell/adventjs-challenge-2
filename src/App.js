import items from "./menuItems";
import Menu from "./Menu";
import Cart from "./Cart";
import react from "react";

class App extends react.Component {
  state = { items };
  incrementItem = (index) => {
    this.state.items[index].count++;
    this.setState({ items: this.state.items });
  };
  decrementItem = (index) => {
    this.state.items[index].count--;
    this.setState({ items: this.state.items });
  };
  render() {
    return (
      <div className="wrapper menu">
        <Menu items={this.state.items} inc={this.incrementItem} />
        <Cart
          items={this.state.items}
          inc={this.incrementItem}
          dec={this.decrementItem}
        />
      </div>
    );
  }
}

export default App;
