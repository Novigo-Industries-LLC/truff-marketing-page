import RevealingText from './revealing-text';

const HotSauceAnimation = () => (
  <div id="hot-sauce-animation-banner-container">
    <RevealingText />
    <div id="hot-sauce-animation-banner">
      <div className="papers" style={{
        "--total": 5
      }}>
        <div id='paper-zero' className="paper -rogue" style={{
            "--i": 0,
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='paper-one' className="paper" style={{
            "--i": 1
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='paper-two' className="paper" style={{
            "--i": 2
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='paper-three' className="paper -rogue" style={{
            "--i": 3,
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='paper-four' className="paper" style={{
            "--i": 4
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='paper-five' className="paper" style={{
            "--i": 5
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='paper-six' className="paper -rogue" style={{
            "--i": 0,
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='paper-seven' className="paper -rogue" style={{
            "--i": 0,
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='paper-eight' className="paper -rogue" style={{
            "--i": 0,
        }}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="shadow">
        <div className="paper-shadow" style={{
            "--i": 0
        }}></div>
        <div className="paper-shadow" style={{
            "--i": 1
        }}></div>
        <div className="paper-shadow" style={{
            "--i": 2
        }}></div>
        <div className="paper-shadow" style={{
            "--i": 3
        }}></div>
        <div className="paper-shadow" style={{
            "--i": 4
        }}></div>
      </div>
    </div>
  </div>
);

export default HotSauceAnimation;