import Animator from "./animator";
const animator = new Animator();

export default class SearchAnimator {
  constructor(container) {
    this.container = container;
    this.players = container.querySelectorAll(".player-profile-box");
    this.pack = container.querySelector(".pack-box");
    this.animationbox = container.querySelector(".animation-box");
    this.cardrevealers = container.querySelectorAll(".card-revealer");
    this.playerstats = container.querySelectorAll(".stat-box");
    this.packoffset = this.pack.getBoundingClientRect().top;
    this.boxdimensions = this.animationbox.getBoundingClientRect();
    this.winnerindex = 0;
    this.boxwidth = this.boxdimensions.width;
    this.boxheight = this.boxdimensions.height;
    this.delay = 0;
    this.shootingpreface = [4, 3, 5, 2, 0];

    this.positions = {
      p0: {
        top: 9,
        left: 50,
        target: 2,
      },
      p1: {
        top: 32,
        left: 14,
        target: 0,
      },
      p2: {
        top: 30,
        left: 85,
        target: 5,
      },
      p3: {
        top: 48,
        left: 54,
        target: 4,
      },
      p4: {
        top: 69,
        left: 24,
        target: 1,
      },
      p5: {
        top: 67,
        left: 80,
        target: 3,
      },
    };
  }

  setupPlayers = () =>{
    this.players.forEach((player, index) => {
      let rotater = this.players[index].querySelector(".player-rotater");
      let p = this.positions[`p${index}`];
      let t = this.positions[`p${p.target}`];

      player.style.left = `${p.left}%`;
      player.style.top = `${p.top}%`;

      let degrees = this.calculatePlayerRotation(p, t);
      rotater.style.transform = `rotate(${degrees}deg)`;
      p.rotation = degrees;
    });
  }

  startSearchAnimations = () => {
    this.shootingpreface.forEach((shooter, index) => {
      let p = this.positions[`p${shooter}`];
      let t = this.positions[`p${p.target}`];

      let bulletbox = this.generatePlayerBullets();
      bulletbox.style.transform = `translate(-50%, -50%) rotate(${p.rotation}deg)`;

      bulletbox.style.top = `${p.top}%`;
      bulletbox.style.left = `${p.left}%`;
      this.animationbox.appendChild(bulletbox);

      setTimeout(() => {
        animator.animateCss({
          element: bulletbox,
          duration: 550,
          easing: "linear",
          cssType: "left",
          value: `${t.left}%`,
        });

        animator.animateCss(
          {
            element: bulletbox,
            duration: 550,
            easing: "linear",
            cssType: "top",
            value: `${t.top}%`,
          },
          () => {
            this.fadePlayer(this.players[p.target], bulletbox);
            bulletbox.parentNode.removeChild(bulletbox);
          }
        );
      }, 900 * (index * 0.6));
      this.delay += 900 * (index * 0.6);
    });

    //Profile circle to pack box
    setTimeout(() => {
      let barrel = this.players[this.winnerindex].querySelector(".barrel");
      let progresstext = this.container.querySelector('.progress-text');

      animator.animateCss(
        {
          element: barrel,
          duration: 400,
          easing: "inOut",
          cssType: "opacity",
          value: "0",
        },
        () => {
          barrel.parentNode.removeChild(barrel);
        }
      );

      animator.animateCss({
        element: progresstext,
        duration: 600,
        easing: "inOut",
        cssType: "opacity",
        value: "0",
      }, () =>{
        progresstext.parentNode.removeChild(progresstext);
      });

      animator.animateCss({
        element: this.players[this.winnerindex],
        duration: 600,
        easing: "inOut",
        cssType: "width",
        value: "120px",
      });

      animator.animateCss({
        element: this.players[this.winnerindex],
        duration: 600,
        easing: "inOut",
        cssType: "height",
        value: "120px",
      });

      animator.animateCss({
        element: this.players[this.winnerindex],
        duration: 1000,
        easing: "inOut",
        cssType: "transform",
        value: "reset",
      });

      animator.animateCss({
        element: this.players[this.winnerindex],
        duration: 600,
        easing: "inOut",
        cssType: "left",
        value: "50%",
      });

      animator.animateCss({
        element: this.players[this.winnerindex],
        duration: 600,
        easing: "inOut",
        cssType: "top",
        value: this.packoffset + 90 + "px",
      });

      setTimeout(() => {
        this.cardrevealers.forEach((revealer) => {
          animator.animateCss({
            element: revealer,
            duration: 1000,
            easing: "strong",
            cssType: "opacity",
            value: "1",
          });
        });

        setTimeout(() => {
          for (let i = 0; i < this.playerstats.length; i++) {
            setTimeout(() => {
              animator.animateCss({
                element: this.playerstats[i],
                duration: 300,
                easing: "inOut",
                cssType: "opacity",
                value: "1",
              });
            }, 130 * i);
          }
        }, 250);
      }, 400);
    }, 2800);
  };

  calculatePlayerRotation = (p, t) => {
    let px = (p.left / 100) * this.boxwidth;
    let py = (p.top / 100) * this.boxheight;
    let tx = (t.left / 100) * this.boxwidth;
    let ty = (t.top / 100) * this.boxheight;
    let startdegrees;

    if (ty < py && tx > px) {
      startdegrees = 0;
    }

    if (ty > py && tx > px) {
      startdegrees = 90;
    }

    if (ty > py && tx < px) {
      startdegrees = 180;
    }

    if (ty < py && tx < px) {
      startdegrees = 270;
    }

    let opposite = Math.abs(tx - px);
    let hypotenuse = Math.abs(ty - py);

    let degrees = (Math.atan(opposite / hypotenuse) * 180) / Math.PI;

    return startdegrees + degrees;
  }

  generatePlayerBullets = () =>{
    let wrapper = document.createElement("div");
    let bulletbox = document.createElement("div");
    let bullet = document.createElement("div");
    wrapper.classList.add("bullet-box-wrapper");
    bullet.classList.add("bullet");
    bulletbox.classList.add("bullet-box");
    bulletbox.appendChild(bullet);
    wrapper.appendChild(bulletbox);

    return wrapper;
  }

  fadePlayer = (player, bullet) => {
    animator.animateCss(
      {
        element: player,
        duration: 600,
        easing: "strongOut",
        cssType: "transform",
        value: "scale(0)",
      },
      () => {
        if ('vibrate' in navigator) {
            navigator.vibrate([350, 100]);
        }
        player.parentNode.removeChild(player);
      }
    );
  }
}
