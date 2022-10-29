const FancyButton = ({text, onClick, styles = {}}) => {
  return (
    <button className="fancy-button" onClick={onClick} style={{marginTop: '3em', ...styles}}>
      {text}
      <div className="fancy-button__horizontal"></div>
      <div className="fancy-button__vertical"></div>
    </button>
  );
};

export default FancyButton;