
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header__logo"></div>
      <div className="header__search"></div>
      <div className="header_nav">
        <div className="nav__item">
          <div className="nav__itemLineOne">Hello Gust</div>
          <div className="nav__itemLineTwo">Sign In</div>
        </div>
        <div className="nav__item">
          <div className="nav__itemLineOne">Your</div>
          <div className="nav__itemLineTwo">Shop</div>
        </div>
        <div className="nav__item">
          <div className="nav__itemLineOne">Basket</div>
          <div className="nav__itemLineTwo">0</div>
        </div>
      </div>
    </div>
  );
}

export default App;
