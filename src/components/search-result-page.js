import React from "react";
import SearchAnimator from "../js/searchanimator";
import "../styles/searchanimation.css";

export default class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.animationcontainer = React.createRef();
  }

  componentDidMount = () => {
    this.animator = new SearchAnimator(this.animationcontainer.current);
    this.animator.setupPlayers();
    setTimeout(() => {
      this.startSearchAnimations();
    }, 300);
  };

  startSearchAnimations = () => {
    this.animator.startSearchAnimations();
  };

  render() {
    return (
      <div className="grid-box" ref={this.animationcontainer}>
        <div className="content-holder" >
          <span className="winner-title pop-b card-revealer">Match winner</span>
          <div className="pack-box card-revealer">
            <span className="match-percentage-title pop-m">93%</span>
            <div className="profile-box-spacer"></div>
            <span className="profile-username pop-b">Killa_xX</span>
            <span className="profile-bio-text pop-r">
              Love to play games online, send dm to team up!
            </span>
            <div className="stat-box pop-m">
              <div className="stat-background-box">Key smasher</div>
              <div className="stat-background-box small-stat-box stat-value">
                98
              </div>
            </div>
            <div className="stat-box pop-m">
              <div className="stat-background-box">Potato</div>
              <div className="stat-background-box small-stat-box stat-value">
                84
              </div>
            </div>
            <div className="stat-box pop-m">
              <div className="stat-background-box">Boss slayer</div>
              <div className="stat-background-box small-stat-box stat-value">
                77
              </div>
            </div>
            <div className="stat-box pop-m">
              <div className="stat-background-box">Hustler</div>
              <div className="stat-background-box small-stat-box stat-value">
                100
              </div>
            </div>
          </div>
          <button className="card-revealer main-button">Message</button>
        </div>

        <div className="animation-box">
          <div className="player-profile-box">
            <div className="player-rotater">
              <div className="barrel"></div>
            </div>
            <div className="profile-image-box" id="player-1"></div>
          </div>

          <div className="player-profile-box">
            <div className="player-rotater">
              <div className="barrel"></div>
            </div>
            <div className="profile-image-box" id="player-2"></div>
          </div>

          <div className="player-profile-box">
            <div className="player-rotater">
              <div className="barrel"></div>
            </div>
            <div className="profile-image-box" id="player-3"></div>
          </div>

          <div className="player-profile-box">
            <div className="player-rotater">
              <div className="barrel"></div>
            </div>
            <div className="profile-image-box" id="player-4"></div>
          </div>

          <div className="player-profile-box">
            <div className="player-rotater p5">
              <div className="barrel"></div>
            </div>
            <div className="profile-image-box" id="player-5"></div>
          </div>

          <div className="player-profile-box">
            <div className="player-rotater">
              <div className="barrel"></div>
            </div>
            <div className="profile-image-box" id="player-6"></div>
          </div>
        </div>
        <span className="progress-text pop-b">Buddy match in progress...</span>
      </div>
    );
  }
}
