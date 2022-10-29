const { Image } = require("@chakra-ui/react");

const AnimatedTab = ({ selectedTab, onTabChange }) => {
  return (
    <div className="products">
      <input className="type-of-product" type="radio" name="hot_sauce" id="s1" checked={selectedTab === 'hot_sauce'} onChange={onTabChange} />
      <input className="type-of-product" type="radio" name="mayo" id="s2" checked={selectedTab === 'mayo'} onChange={onTabChange} />
      <input className="type-of-product" type="radio" name="pasta_sauce" id="s3" checked={selectedTab === 'pasta_sauce'} onChange={onTabChange} />
      <input className="type-of-product" type="radio" name="oil" id="s4" checked={selectedTab === 'oil'} onChange={onTabChange} />
      <label className="type-of-product-label" for="s1">
        <img
          src="https://res.cloudinary.com/aa1997/image/upload/v1666656116/truffle-black-hot-suace.jpg"
          alt="Truff Black Hot Sauce"
        />
      </label>
      <label className="type-of-product-label" for="s2">
        <img
          src="https://res.cloudinary.com/aa1997/image/upload/v1666666194/truff-mayo.png"
          alt="Truff Mayo"
        />
      </label>
      <label className="type-of-product-label" for="s3">
        <img
          src="https://res.cloudinary.com/aa1997/image/upload/v1666666194/BLACK_TRUFFLE_POMODORO.png"
          alt="Black Truffle Pomodoro"
        />
      </label>
      <label className="type-of-product-label" for="s4">
        <img
          src="https://res.cloudinary.com/aa1997/image/upload/v1666671118/black_truffle_oil.png"
          alt="Black Truffle Oil"
        />
      </label>
      <div className="products-circle"></div>
      <div className="products_content">
        <div className="products_bottom">
          <span className="products-indicator"></span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTab;