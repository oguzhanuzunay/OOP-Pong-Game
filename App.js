// Dom Element Load
const DomElemnets = (function () {
  const body = document.body;
  const backGround = document.createElement('div');

  //main Menu
  const mainMenu = document.createElement('div');
  const playButton = document.createElement('div');
  const guideButton = document.createElement('div');

  //How To Play Menu
  const guide = document.createElement('div');
  const rules = document.createElement('div');
  const x = document.createElement('div');

  //Game Stage
  const area = document.createElement('div');
  const userScore = document.createElement('div');
  const aiScore = document.createElement('div');
  const line = document.createElement('div');
  const userBlock = document.createElement('div');
  const aiBlock = document.createElement('div');
  const ball = document.createElement('div');

  const bot1Enabled = document.createElement('div');
  const bot1Level = document.createElement('div');
  const bot2Enabled = document.createElement('div');
  const bot2Level = document.createElement('div');

  const createDoms = function () {
    body.appendChild(backGround);

    //Game Stage
    body.appendChild(area);
    area.appendChild(userScore);
    area.appendChild(aiScore);
    area.appendChild(line);
    area.appendChild(userBlock);
    area.appendChild(aiBlock);
    area.appendChild(ball);

    area.appendChild(bot1Enabled);
    area.appendChild(bot1Level);
    area.appendChild(bot2Enabled);
    area.appendChild(bot2Level);

    //Main Menu
    body.appendChild(mainMenu);
    mainMenu.appendChild(playButton);
    mainMenu.appendChild(guideButton);

    //How to Play Menu
    body.appendChild(guide);
    guide.appendChild(rules);
    guide.appendChild(x);
  };
  const giveThemID = function () {
    //GameStage
    area.setAttribute('id', 'area');
    backGround.setAttribute('id', 'backGround');
    userScore.setAttribute('id', 'userScore');
    aiScore.setAttribute('id', 'aiScore');
    line.setAttribute('id', 'line');
    userBlock.setAttribute('id', 'userBlock');
    aiBlock.setAttribute('id', 'aiBlock');
    ball.setAttribute('id', 'ball');

    //Main Menu Stage
    mainMenu.setAttribute('id', 'mainMenu');
    playButton.setAttribute('id', 'playButton');
    guideButton.setAttribute('id', 'guideButton');

    //Guide Stage
    guide.setAttribute('id', 'guide');
    rules.setAttribute('id', 'rules');
    x.setAttribute('id', 'x');

    bot1Level.setAttribute('id', 'bot1Level');
    bot2Level.setAttribute('id', 'bot2Level');
    bot1Enabled.setAttribute('id', 'bot1Enabled');
    bot2Enabled.setAttribute('id', 'bot2Enabled');
  };
  const giveThemStyle = function () {
    // body style
    body.style.backgroundColor = '#f7f8fc';
    body.style.display = 'flex';
    body.style.alignItems = 'center';
    body.style.justifyContent = 'center';
    body.style.height = '100vh';
    body.style.margin = '0';

    //backGround style
    backGround.style.backgroundColor = '#ffffff';
    backGround.style.position = 'fixed';
    backGround.style.height = '100vh';
    backGround.style.width = '100vw';
    backGround.style.opacity = 0.8;
    backGround.style.top = 0;
    backGround.style.left = 0;

    // Area style
    area.style.width = '900px';
    area.style.height = '600px';
    area.style.backgroundColor = '#62247b';
    area.style.position = 'fixed';
    area.style.top = '50%';
    area.style.left = '50%';
    area.style.transform = 'translate(-50%, -50%)';

    // Score style
    userScore.style.color = '#c6a62f';
    aiScore.style.color = '#c6a62f';
    userScore.style.fontSize = '72px';
    aiScore.style.fontSize = '72px';
    userScore.style.position = 'absolute';
    aiScore.style.position = 'absolute';
    userScore.style.top = '15px';
    aiScore.style.top = '15px';
    userScore.style.left = '255px';
    aiScore.style.left = '675px';
    userScore.innerHTML = UIController.getScore('score1');
    aiScore.innerHTML = UIController.getScore('score2');

    // Line style
    line.style.width = '0px';
    line.style.height = '600px';
    line.style.borderLeft = '2px dashed #c6a62f';
    line.style.position = 'absolute';
    line.style.top = '0';
    line.style.left = '50%';

    // Block style
    userBlock.style.width = '12px';
    userBlock.style.height = '85px';
    userBlock.style.backgroundColor = '#c6a62f';
    aiBlock.style.width = '12px';
    aiBlock.style.height = '85px';
    aiBlock.style.backgroundColor = '#c6a62f';
    userBlock.style.position = 'absolute';
    aiBlock.style.position = 'absolute';

    //User and Ai Positions
    userBlock.style.left = '0px';
    aiBlock.style.left = '888px';
    userBlock.style.top = '0px';
    aiBlock.style.top = '0px';

    //ball style
    ball.style.width = '15px';
    ball.style.height = '15px';
    ball.style.position = 'absolute';
    ball.style.top = '250px';
    ball.style.left = '444px';
    ball.style.borderRadius = '50%';
    ball.style.backgroundColor = '#c6a62f';

    // botText Style
    bot1Enabled.innerHTML = '<h1>Bot - 1 Active</h1>';
    bot2Enabled.innerHTML = '<h1>Bot - 2 Active</h1>';
    bot1Enabled.style.fontSize = '12px';
    bot2Enabled.style.fontSize = '12px';
    bot1Enabled.style.color = 'red';
    bot2Enabled.style.color = 'red';
    bot1Enabled.style.position = 'fixed';
    bot2Enabled.style.position = 'fixed';
    bot1Enabled.style.top = '-25%';
    bot2Enabled.style.top = '-25%';
    bot1Enabled.style.left = '7%';
    bot2Enabled.style.left = '77%';
    bot1Level.innerHTML =
      '<h2>level: <span style="font-size:55px"> 1</span></h2>';
    bot2Level.innerHTML =
      '<h2>level: <span style="font-size:55px"> 1</span></h2>';
    bot1Level.style.fontSize = '12px';
    bot2Level.style.fontSize = '12px';
    bot1Level.style.color = 'red';
    bot2Level.style.color = 'red';
    bot1Level.style.position = 'fixed';
    bot2Level.style.position = 'fixed';
    bot1Level.style.top = '-20%';
    bot2Level.style.top = '-20%';
    bot1Level.style.left = '7%';
    bot2Level.style.left = '77%';
    bot1Enabled.style.display = 'none';
    bot2Enabled.style.display = 'none';
    bot1Level.style.display = 'none';
    bot2Level.style.display = 'none';

    //main Menu style
    mainMenu.style.width = '900px';
    mainMenu.style.height = '600px';
    mainMenu.style.backgroundColor = '#62247b';
    mainMenu.style.position = 'fixed';
    mainMenu.style.top = '50%';
    mainMenu.style.left = '50%';
    mainMenu.style.transform = 'translate(-50%, -50%)';

    //play Button style
    playButton.style.width = '150px';
    playButton.style.height = '90px';
    playButton.style.border = '5px solid #c6a62f';
    playButton.style.borderRadius = '5px';
    playButton.innerHTML = 'Play';
    playButton.style.fontSize = '72px';
    playButton.style.color = '#c6a62f';
    playButton.style.textAlign = 'center';
    playButton.style.textJustify = 'center';
    playButton.style.position = 'fixed';
    playButton.style.top = '25%';
    playButton.style.left = '42%';
    playButton.style.backgroundColor = '#62247b';
    playButton.style.transition = 'transform 1sn';

    playButton.onmouseover = function () {
      playButton.style.color = '#62247b';
      playButton.style.backgroundColor = '#c6a62f';
      playButton.style.border = '4px solid #ffffff';
    };
    playButton.onmouseleave = function () {
      playButton.style.color = '#c6a62f';
      playButton.style.backgroundColor = '#62247b';
      playButton.style.border = '5px solid #c6a62f';
    };

    //guideButton
    guideButton.style.width = '150px';
    guideButton.style.height = '60px';
    guideButton.style.border = '5px solid #c6a62f';
    guideButton.style.borderRadius = '5px';
    guideButton.innerHTML = 'Guide';
    guideButton.style.fontSize = '48px';
    guideButton.style.color = '#c6a62f';
    guideButton.style.textAlign = 'center';
    guideButton.style.textJustify = 'center';
    guideButton.style.position = 'fixed';
    guideButton.style.top = '50%';
    guideButton.style.left = '42%';
    guideButton.style.backgroundColor = '#62247b';
    guideButton.style.transition = 'all 1sn';

    guideButton.onmouseover = function () {
      guideButton.style.color = '#62247b';
      guideButton.style.backgroundColor = '#c6a62f';
      guideButton.style.border = '4px solid #ffffff';
    };
    guideButton.onmouseleave = function () {
      guideButton.style.color = '#c6a62f';
      guideButton.style.backgroundColor = '#62247b';
      guideButton.style.border = '5px solid #c6a62f';
    };

    //Guide
    guide.style.width = '900px';
    guide.style.height = '600px';
    guide.style.backgroundColor = '#62247b';
    guide.style.position = 'fixed';
    guide.style.top = '50%';
    guide.style.left = '50%';
    guide.style.transform = 'translate(-50%, -50%)';

    rules.innerHTML = `
    <h1>Rules</h1>
<p>1. The first user goes up with W and down with S.</p>
<p>2. The second user goes up with the up arrow key and down with the down arrow key.</p>
<p>3. It is possible to switch between the bot and the user in the game. It is activated with O for the first user and the P key for the second user.</p>
<p>4. It is possible to switch between the bot's difficulties. For the first user's bot, 1 key is easy bot, 2 key is normal bot, 3 key is hard bot level.</p>
<p>5. Likewise, you can use the 1,2,3 keys in the num pad for user 2.</p>
    `;
    rules.style.fontSize = '20px';
    rules.style.color = '#c6a62f';
    rules.style.textAlign = 'center';
    rules.style.textJustify = 'center';
    rules.style.position = 'fixed';
    rules.style.top = '10%';
    rules.style.left = '0%';
    rules.style.backgroundColor = '#62247b';

    x.innerHTML = 'X';
    x.style.fontSize = '45px';
    x.style.color = '#c6a62f';
    x.style.float = 'right';
    x.style.margin = '10px';
  };
  x.onmouseover = function () {
    x.style.color = '#ffffff';
    x.style.cursor = 'pointer';
  };
  x.onmouseleave = function () {
    x.style.color = '#c6a62f';
  };

  return {
    area: area,
    userScore: userScore,
    aiScore: aiScore,
    userBlock: userBlock,
    aiBlock: aiBlock,
    ball: ball,
    mainMenu: mainMenu,
    guide: guide,
    bot1Enabled: bot1Enabled,
    bot2Enabled: bot2Enabled,
    bot1Level: bot1Level,
    bot2Level: bot2Level,

    createDoms: createDoms,
    giveThemID: giveThemID,
    giveThemStyle,
  };
})();

// Objects Load
const Objects = (function () {
  const area = {
    height: 600,
    width: 900,
  };
  const block = {
    height: 85,
    width: 12,
  };

  const Ball = function (
    realElement,
    topPosition,
    leftPosition,
    radius,
    topSpeed,
    leftSpeed,
    boost
  ) {
    this.realElement = realElement;
    this.topPosition = topPosition;
    this.leftPosition = leftPosition;
    this.radius = radius;
    this.topSpeed = topSpeed;
    this.leftSpeed = leftSpeed;
    this.boost = boost;
    this.side = 0;
    this.shadows = [];
    this.left = realElement.offsetLeft;
    this.delta = 4;

    const startBall = function () {
      this.topPosition = 300;
      this.leftPosition = 450;
      realElement.style.top = this.topPosition + 'px';
      realElement.style.left = this.leftPosition + 'px';
      if (Math.random() < 0.5) {
        this.side = 1;
      } else {
        this.side = -1;
      }
      this.boost = 0;

      this.leftSpeed = this.side * (Math.random() * 2 + 3);
      this.topSpeed = Math.random() * -2 - 3;
    };
    const moveBall = function () {
      this.topPosition += this.topSpeed;
      this.leftPosition += this.leftSpeed;
      realElement.style.top = this.topPosition + 'px';
      realElement.style.left = this.leftPosition + 'px';
    };

    const ballBounce = function () {
      if (
        this.topPosition <= 10 ||
        this.topPosition >= area.height - this.radius
      ) {
        this.topSpeed = -this.topSpeed;
        Sounds.PlayWallHit();
      }
    };
    const addBoost = function () {
      this.boost++;
    };
    const flame = function () {
      if (this.boost >= 5) {
        console.log('ben Calısıyorum');
        var shadow = realElement.cloneNode();
        shadow.classList.add('shadow');
        shadow.style.transition = 'all 1s';
        shadow.style.zIndex = '-1';
        shadow.style.backgroundColor = '#ce1891';
        DomElemnets.area.appendChild(shadow);
        setTimeout(function () {
          shadow.style.backgroundColor = '#62247b';
        }, 1);

        this.shadows.push(shadow);
        if (this.shadows.length > 100) {
          this.shadows[0].parentNode.removeChild(this.shadows[0]);
          this.shadows.shift();
        }
        if (
          this.left + this.delta >
            document.body.offsetWidth - realElement.offsetWidth ||
          this.left < 0
        ) {
          this.delta = -this.delta;
        }
        this.left += this.delta;
        realElement.style.left = this.left + 'px';
      }
    };

    return {
      addBoost: addBoost,
      startBall: startBall,
      ballBounce: ballBounce,
      flame: flame,
      shadows: this.shadows,

      moveBall: moveBall,
      realElement: realElement,

      radius: this.radius,
      area: this.area,
    };
  };

  const Player = function (realElement, position, speed) {
    this.realElement = realElement;
    this.position = position;
    this.speed = speed;
    this.height = 85;
    this.width = 12;

    const move = function (addSpeed) {
      this.speed = addSpeed;
      this.position += this.speed;
      realElement.style.top = this.position + 'px';
    };

    const stopBlocking = function () {
      if (this.position <= 0) {
        this.position = 0;
        realElement.style.top = 0 + 'px';
      } else if (this.position >= area.height - block.height) {
        this.position = area.height - block.height;
        realElement.style.top = area.height - block.height + 'px';
      }
    };

    const ballBounceBlock1 = function (ball) {
      if (ball.leftPosition <= this.width) {
        if (
          ball.topPosition > this.position &&
          ball.topPosition < this.position + this.height
        ) {
          ball.boost++;
          ball.leftSpeed = -ball.leftSpeed + 1;
          if (ball.topSpeed > 0) {
            ball.topSpeed = ball.topSpeed + 0.5;
          }
          if (ball.topSpeed < 0) {
            ball.topSpeed = ball.topSpeed - 0.5;
          }
          Sounds.PlayHit();
        } else {
          UIController.addScore('player1');
          UIController.gameOver(ball);
          Sounds.PlayScore();

          ball.startBall();
        }
      }
    };

    const ballBounceBlock2 = function (ball) {
      if (ball.leftPosition >= area.width - ball.radius - block.width) {
        if (
          ball.topPosition > this.position &&
          ball.topPosition < this.position + this.height
        ) {
          ball.boost++;
          ball.leftSpeed = -ball.leftSpeed - 1;
          ball.topSpeed = ball.topSpeed + 1;
          Sounds.PlayHit();
        } else {
          UIController.addScore('player2');
          UIController.gameOver(ball);
          Sounds.PlayScore();
          ball.startBall();
        }
      }
    };

    return {
      move: move,
      stopBlocking: stopBlocking,
      position: this.position,
      speed: this.speed,
      ballBounceBlock1: ballBounceBlock1,
      ballBounceBlock2: ballBounceBlock2,
      width: this.width,
      height: this.height,
    };
  };

  return {
    Ball: Ball,
    Player: Player,
  };
})();

// Local Storage Load
const LocalStorage = (function () {
  var ScoreBoard = {
    score1: 0,
    score2: 0,
  };

  const setLocalStorage = function (score1, score2) {
    localStorage.setItem(
      'ScoreBoard',
      JSON.stringify({
        score1: score1,
        score2: score2,
      })
    );
  };

  const contorlLocalStorage = function () {
    return localStorage.getItem('ScoreBoard');
  };

  const getLocalStorage = function () {
    ScoreBoard = JSON.parse(localStorage.getItem('ScoreBoard'));
    this.setScore();
  };
  const setScore = function () {
    UIController.scores.score1 = ScoreBoard.score1;
    UIController.scores.score2 = ScoreBoard.score2;
  };
  return {
    setLocalStorage: setLocalStorage,
    getLocalStorage: getLocalStorage,
    setScore: setScore,
    contorlLocalStorage: contorlLocalStorage,
    ScoreBoard: ScoreBoard,
  };
})();

// cokies
const Cookies = (function () {
  var cookies;

  const setCookie = function (score1, score2, domain) {
    document.cookie = `score1=${score1};path=/;domain=${domain}`;
    setTimeout(function () {
      document.cookie = `score2=${score2};path=/;domain=${domain}`;
    }, 15);
  };

  const getCookie = function () {
    cookies = document.cookie
      .split(';')
      .map((cookie) => cookie.split('='))
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key.trim()]: decodeURIComponent(value),
        }),
        {}
      );
    return cookies;
  };
  const searchCookieScore1 = function () {
    let score1 = 'score1';
    return cookies[score1];
  };
  const searchCookieScore2 = function () {
    let score2 = 'score2';
    return cookies[score2];
  };

  return {
    setCookie: setCookie,
    cookies: cookies,
    getCookie: getCookie,

    searchCookieScore1: searchCookieScore1,
    searchCookieScore2: searchCookieScore2,
  };
})();

// UI Controller
const UIController = (function () {
  const scores = {
    score1: 0,
    score2: 0,
  };
  const getScore = function (score) {
    return scores[score];
  };

  const setOnFirstTime = function () {
    scores.score1 = 0;
    scores.score2 = 0;
  };

  const addScore = function (player) {
    if (player == 'player1') {
      scores.score1++;
      this.showScore(DomElemnets.userScore, scores.score1);
    } else if (player == 'player2') {
      scores.score2++;
      this.showScore(DomElemnets.aiScore, scores.score2);
    }
    LocalStorage.setLocalStorage(scores.score1, scores.score2);
    Cookies.setCookie(scores.score1, scores.score2, '.lcwaikiki.com');
  };
  const resetScores = function (el) {
    scores.score1 = 0;
    scores.score2 = 0;
    this.showScore(DomElemnets.userScore, scores.score1);
    this.showScore(DomElemnets.aiScore, scores.score2);
    setTimeout(function () {
      el.realElement.style.display = '';
    }, 25);
  };
  const gameOver = function (el) {
    if (scores.score1 == 5 || scores.score2 == 5) {
      ball.addBoost();
      el.realElement.style.display = 'none';
      setTimeout(function () {
        UIController.winnerScene();
        UIController.resetScores(el);
        LocalStorage.setLocalStorage(scores.score1, scores.score2);
        Cookies.setCookie(scores.score1, scores.score2, '.lcwaikiki.com');
      }, 25);
    }

    return scores;
  };
  const showScore = function (el, Playerscore) {
    el.innerHTML = Playerscore.toString();
  };
  const winnerScene = function () {
    var player = '';
    if (scores.score1 == 5) {
      player = 'Player-2';
    } else if (scores.score2 == 5) {
      player = 'Player-1';
    }

    alert(`${player} Win.`);
  };
  const levelChange = function (botName, level) {
    botName.innerHTML = `<h2>level: <span style="font-size:55px">${level}</span></h2>`;
  };
  const ShowBot = function (botName) {
    if (botName.style.display == 'none') {
      botName.style.display = '';
    } else {
      botName.style.display = 'none';
    }
  };

  return {
    scores: scores,
    winnerScene: winnerScene,
    addScore: addScore,
    resetScores: resetScores,
    gameOver: gameOver,
    showScore: showScore,
    getScore: getScore,
    levelChange: levelChange,
    ShowBot: ShowBot,
    setOnFirstTime: setOnFirstTime,
  };
})();

//load Sounds
const Sounds = (function () {
  const hitSound = new Audio('../sounds/hitSound.wav');
  const scoreSound = new Audio('../sounds/scoreSound.wav');
  const wallHitSound = new Audio('../sounds/wallHitSound.wav');

  const PlayHit = function () {
    hitSound.play();
  };
  const PlayScore = function () {
    scoreSound.play();
  };
  const PlayWallHit = function () {
    wallHitSound.play();
  };

  return {
    PlayHit: PlayHit,
    PlayScore: PlayScore,
    PlayWallHit: PlayWallHit,
  };
})();

// Bot Controller
const BotController = (function () {
  const Bot = function (player) {
    this.player = player;
    this.tolerance = 0.1;
    this.actived = false;

    const switchBot = function () {
      if (this.actived === true) {
        this.actived = false;
      } else {
        this.actived = true;
      }
    };
    const changeActived = function (status) {
      this.actived = status;
    };
    const botMove = function (player, ball) {
      if (this.actived === true) {
        var speed = 0;
        speed +=
          (ball.topPosition - player.position - player.height / 2) *
          this.tolerance;
        player.move(speed);
        player.stopBlocking();
      } else {
      }
    };
    const changeDificulty = function (tolerance) {
      this.tolerance = tolerance;
    };

    return {
      switchBot,
      changeActived,
      changeDificulty,
      botMove,
      tolerance: this.tolerance,
    };
  };

  return {
    Bot: Bot,
  };
})();

// Event Controller
const EvenetsController = (function (player1, player2) {})();

// Stage Controller
const StageController = (function () {
  const GameStage = function () {
    DomElemnets.area.style.display = '';
    DomElemnets.guide.style.display = 'none';
    DomElemnets.mainMenu.style.display = 'none';
  };
  const MenuStage = function () {
    DomElemnets.area.style.display = 'none';
    DomElemnets.guide.style.display = 'none';
    DomElemnets.mainMenu.style.display = '';
  };
  const GuideStage = function () {
    DomElemnets.area.style.display = 'none';
    DomElemnets.guide.style.display = '';
    DomElemnets.mainMenu.style.display = 'none';
  };
  var startStop = false;
  var game;
  return {
    game: game,
    startStop: startStop,
    GameStage: GameStage,
    MenuStage: MenuStage,
    GuideStage: GuideStage,
  };
})();

DomElemnets.createDoms();
DomElemnets.giveThemID();
Cookies.getCookie();
if (LocalStorage.contorlLocalStorage() == null) {
  if (
    Cookies.searchCookieScore1() === undefined &&
    Cookies.searchCookieScore2() === undefined
  ) {
    LocalStorage.setLocalStorage(0, 0);
    LocalStorage.setScore(0, 0);
  } else {
    LocalStorage.setLocalStorage(
      Cookies.searchCookieScore1(),
      Cookies.searchCookieScore2()
    );
    LocalStorage.setScore(
      Cookies.searchCookieScore1(),
      Cookies.searchCookieScore2()
    );
  }
}
LocalStorage.getLocalStorage();
DomElemnets.giveThemStyle();

const ball = new Objects.Ball(
  DomElemnets.ball,
  DomElemnets.ball.style.top,
  DomElemnets.ball.style.left,
  15,
  0,
  0,
  0
);

const player1 = new Objects.Player(DomElemnets.userBlock, 0, 0);
const player2 = new Objects.Player(DomElemnets.aiBlock, 0, 0);
const bot1 = new BotController.Bot(player1);
const bot2 = new BotController.Bot(player2);

function controlDown(e) {
  //w
  if (e.keyCode === 87) {
    player1.speed = -10;
  }
  //S
  else if (e.keyCode === 83) {
    player1.speed = 10;
  }
  //up arrow
  else if (e.keyCode === 38) {
    player2.speed = -10;
  }
  //down arrow
  else if (e.keyCode === 40) {
    player2.speed = 10;
  }
}
function controlUp(e) {
  //w
  if (e.keyCode === 87) {
    player1.speed = 0;
  }
  //S
  else if (e.keyCode === 83) {
    player1.speed = 0;
  }
  //up arrow
  else if (e.keyCode === 38) {
    player2.speed = 0;
  }
  //down arrow
  else if (e.keyCode === 40) {
    player2.speed = 0;
  }
}
function botKeyContol(e) {
  //Player 1 Bot
  if (e.keyCode === 79) {
    bot1.switchBot();
    UIController.ShowBot(DomElemnets.bot1Enabled);
    UIController.ShowBot(DomElemnets.bot1Level);
  }

  //-------- bot Levels --------------
  //EasyBot Active
  if (e.keyCode === 49) {
    bot1.changeDificulty(0.1);
    UIController.levelChange(DomElemnets.bot1Level, '1');
  }
  //NormalBot Active
  else if (e.keyCode === 50) {
    bot1.changeDificulty(0.15);
    UIController.levelChange(DomElemnets.bot1Level, '2');
  }
  //HardBot Active
  else if (e.keyCode === 51) {
    bot1.changeDificulty(0.2);
    UIController.levelChange(DomElemnets.bot1Level, '3');
  }

  //Player 2 Bot
  if (e.keyCode === 80) {
    bot2.switchBot();
    UIController.ShowBot(DomElemnets.bot2Enabled);
    UIController.ShowBot(DomElemnets.bot2Level);
  }

  //-------- bot Levels --------------
  //EasyBot Active
  if (e.keyCode === 97) {
    bot2.changeDificulty(0.1);
    UIController.levelChange(DomElemnets.bot2Level, '1');
  }
  //NormalBot Active
  else if (e.keyCode === 98) {
    bot2.changeDificulty(0.15);
    UIController.levelChange(DomElemnets.bot2Level, '2');
  }
  //HardBot Active
  else if (e.keyCode === 99) {
    bot2.changeDificulty(0.2);
    UIController.levelChange(DomElemnets.bot2Level, '3');
  }
}
function pauseStart(e) {
  if (e.keyCode === 32) {
    if (StageController.startStop === false) {
      StageController.startStop = true;
      //console.log(StageController.startStop);
      play();
    }
    if (StageController.startStop === true) {
      // StageController.startStop = false;
      //clearInterval(StageController.game);
    }
  }
}

//-----------------------------------------------------------
document.addEventListener('keydown', controlDown);
document.addEventListener('keyup', controlUp);
document.addEventListener('keydown', botKeyContol);
document.addEventListener('keyup', pauseStart);
document.getElementById('x').addEventListener('click', function () {
  StageController.MenuStage();
});
document.getElementById('playButton').addEventListener('click', function () {
  StageController.GameStage();
});
document.getElementById('guideButton').addEventListener('click', function () {
  StageController.GuideStage();
});
//----------------------------------------------------------
const play = function () {
  StageController.game = window.setInterval(function show() {
    //player State
    player1.move(player1.speed);
    player2.move(player2.speed);
    player1.stopBlocking();
    player2.stopBlocking();

    //bot State
    bot1.botMove(player1, ball);
    bot2.botMove(player2, ball);

    // Ball State
    ball.moveBall();
    player1.ballBounceBlock1(ball);
    ball.ballBounce();
    player2.ballBounceBlock2(ball);

    //Flame Effect
    ball.flame();
  }, 1000 / 60);
};

//play();
StageController.MenuStage();

ball.startBall();
