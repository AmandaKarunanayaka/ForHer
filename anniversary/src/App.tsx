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
            <p className="letter-content">Meeting you has been the most beautiful thing that has ever happened to me. Not a single day goes by without you crossing my mind. You are the sweetest, kindest, and most beautiful person I have ever met. My life feels brighter in a way I can’t fully describe, and it’s all because of you.
 <br /><br />
I’m really glad you prank called me. Even though we don’t get to talk much, hearing your voice feels like the warmest hug. I love it when you call me baba. It’s a feeling I can’t put into words, and it means more to me than you know.
 <br /><br />
I hope I’ve been a good boyfriend to you, because you truly deserve the best. I can’t wait for all the years ahead of us. Just you and me together is my dream. I want to create millions of memories with you, share countless beautiful moments, and hold them close for the rest of our lives.
 <br /><br />
I love you sooo muchhh princess ❤️ You mean everything to me... Ummmmaaaa 😘😘
              <br /><br />
              Yours, <br />Amanda
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
