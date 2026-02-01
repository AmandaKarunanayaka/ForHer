import { useState } from "react";
import "./flower.scss";
import "./App.css";

export default function App() {
  const [showLetter, setShowLetter] = useState(false);

  const handleButtonClick = () => {
    setShowLetter(true);
  };

  const handleBackClick = () => {
    setShowLetter(false);
  };

  return (
    <div className="app">
      <div className="night"></div>

      {!showLetter && (
        <>
          <div className="flowers">
            <div className="flower flower--1">
              <div className="flower__leafs flower__leafs--1">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                ))}
              </div>

              <div className="flower__line">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
                ))}
              </div>
            </div>

            <div className="flower flower--2">
              <div className="flower__leafs flower__leafs--2">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                ))}
              </div>

              <div className="flower__line">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
                ))}
              </div>
            </div>

            <div className="flower flower--3">
              <div className="flower__leafs flower__leafs--3">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                ))}
              </div>

              <div className="flower__line">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay content (safe for tablet) */}
          <div className="overlay">
            <h1 className="title">
              One Month Together<br />I Love You Princess ❤️
            </h1>
            <button className="romantic-button" onClick={handleButtonClick}>
              Click Here
              <br />
              💌
            </button>
          </div>
        </>
      )}

      {showLetter && (
        <div className="letter-container">
          <div className="letter">
            <button className="back-button" onClick={handleBackClick}>
              ← Back to Flowers
            </button>
            <p className="letter-greeting">To my princess,</p>
            <p className="letter-content">It has already been a month, and I truly hope I’ve been a good boyfriend to you.
              You are the sweetest, cutest, and most beautiful person I have ever met, and being with you makes my days brighter in ways I never imagined.
              <br /><br />
              I can’t wait for all the years ahead of us, for the memories we’ll create, the moments we’ll share, and the little things that will mean everything just because it’s you.
              <br /><br />
              I love youuu sooo muchhhh ❤️ ummmaaaaa 😘
              <br /><br />
              Yours, <br />Amanda
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
