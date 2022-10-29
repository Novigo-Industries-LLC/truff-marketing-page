const RevealingText = () => {
  return (
    <div className="block-revealing-container">
      <h1
        className="block-effect"
        style={{
          "--td": "1.2s",
        }}
      >
        <div
          className="block-reveal"
          style={{
            "--bc": "#B02B2D",
            " --d": ".5s",
          }}
        >
          Start Your Year Right
        </div>
        <div
          className="block-reveal"
          style={{
            "--bc": "#C09A5F",
            "--d": ".75s",
          }}
        >
          With <b>TRUFF</b>
        </div>
      </h1>
    </div>
  );
};

export default RevealingText;