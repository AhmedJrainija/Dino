let x = 212; //the top of the dino
let y = 171; //the bottom of the dino
let up; //interval for going up
let down; //interval for going down
let move_ground; //interval to move the ground block
let move_roof; //interval to move the roof block
let gen; //interval to control the distance
let create; //interval to generate
let s; //interval for score
let press = 0; //to control the button press
let h = 0; //to stop the dino from landing when dead
let j = 0; //to stop the dino from jumping when dead
let bg = 0;
let bs = 0;
let score = 0;
let score_start = 0; //to start score with space bar
let block_start = 0; //to start blocks with space bar
let move = 0; // indicattor to stop the blocks moving after death
let speed = 60;
let u;
let v;
let hs = 0;

const hscore = document.querySelector('.hscore');

hs = JSON.parse(localStorage.getItem('highest score dino'));
highest_score();

const gm = document.querySelector('.gm1');

gen = setInterval(() => {
  if (block_start === 1) {
    let u = Math.random();
    let v = Math.round(u*10);
    if (score < 200) {
      if(v > 5) {
        clearInterval(create);
        generate(1200);
        console.log(1200);
      } else {
        clearInterval(create);
        generate(1000);
        console.log(1000);
      }
    } else if ((score >= 200) && (score < 400)) {
        if(v > 3) {
          clearInterval(create);
          generate(1000);
          console.log(1000);
        } else {
          clearInterval(create);
          generate(800);
          console.log(800);
        }
    } else if (score > 400) {
        if(v > 3) {
          clearInterval(create);
          generate(700);
          console.log(700);
        } else {
          clearInterval(create);
          generate(550);
          console.log(550);
        }
    }
  }
}, 3000);

score_number();

function highest_score () {
  if (hs <= score) {
    hs = score;
  }
  hscore.innerHTML = `HIGHEST SCORE : ${hs}`;
  localStorage.setItem('highest score dino', JSON.stringify(hs));
}

function block_speed() {
  if((score%100 === 0) && (score!==0) && (speed > 20)) {
    speed = speed - 10;
    console.log(speed);
  }
}

function generate (distance) {
  create = setInterval(() => {
    let a = Math.random();
    let b = Math.round(a*10);
    if (block_start === 1) {
      if (b > 2) {
        document.querySelector('.b287').classList.add('b');
        document.querySelector('.b328').classList.add('b');
        document.querySelector('.b369').classList.add('b');
        block_ground();
      } else {
        document.querySelector('.b82').classList.add('b');
        document.querySelector('.b123').classList.add('b');
        document.querySelector('.b164').classList.add('b');
        block_roof();
      }
    }
  }, distance)
}

function score_number () {
  s = setInterval(()=> {
  if (score_start === 1) {
    score++;
    document.querySelector('.score').innerHTML = `SCORE: ${score}`;
    block_speed();
  }
}, 100)
}

function jump () {
  up = setInterval(() => {
    if (j === 0) {
    let d_jump = document.querySelector(`.b${x-41}`).classList.contains('b');
    if (d_jump === false) {
      if (x > 48) {
      for(let i = x; i >= x-41; i = i - 41) {
        document.querySelector(`.b${i}`).classList.add(`s`);
        document.querySelector(`.b${i+123}`).classList.remove(`s`);
      }
        x = x -41;
      } else {
        clearInterval(up);
      }
    } else {
      clearInterval(move_ground);
      clearInterval(gen);
      clearInterval(create);
      press = 1;
      h = 1;
      j = 1;
      clearInterval(s);
      move = 1;
      gm.classList.remove('gm1');
      gm.classList.add('gm2');
      highest_score();
    }
  }
  }, 50);
  x = 212;
}

function land () {
  down = setInterval(()=> {
    if (h === 0){
  let d_land = document.querySelector(`.b${y+ 41}`).classList.contains('b');
  if (d_land === false) {
    if (y < 335) {
  for(let i = y; i <= y+41; i = i + 41) {
    document.querySelector(`.b${i}`).classList.add(`s`);
    document.querySelector(`.b${i-123}`).classList.remove(`s`);
  }
  y = y +41;
  } else {
    clearInterval(down);
  }
  } else {
    clearInterval(move_ground);
    clearInterval(gen);
    clearInterval(create);
    press = 1;
    h = 1;
    j = 1;
    clearInterval(s);
    move = 1;
    gm.classList.remove('gm1');
    gm.classList.add('gm2');
    highest_score();
  }
}
}, 50);
y = 171; 
}

function block_ground () {
  let z = 369;
  move_ground = setInterval (()=>{
    if (move === 0) {
    let dg1 = document.querySelector(`.b${z-2}`).classList.contains('s');
    let dg2 = document.querySelector(`.b${z-43}`).classList.contains('s');
    let dg3 = document.querySelector(`.b${z-84}`).classList.contains('s');
    if ((dg1 === false) && (dg2 === false) && (dg3 === false)) {
      if (z > 330) {
        for(let i = z; i >= z-1 ; i = i -1) {
          document.querySelector(`.b${i-1}`).classList.add(`b`);
          document.querySelector(`.b${i-42}`).classList.add(`b`);
          document.querySelector(`.b${i-83}`).classList.add(`b`);

          //to make the blocks one scare wide do minus one on each i;
          document.querySelector(`.b${i + 1}`).classList.remove(`b`);
          document.querySelector(`.b${i-40}`).classList.remove(`b`);
          document.querySelector(`.b${i-81}`).classList.remove(`b`);
        }
        z = z-1;
      } else {
        document.querySelector(`.b288`).classList.remove(`b`);
        document.querySelector(`.b247`).classList.remove(`b`);
        document.querySelector(`.b329`).classList.remove(`b`);
        
        document.querySelector(`.b289`).classList.remove(`b`);
        document.querySelector(`.b248`).classList.remove(`b`);
        document.querySelector(`.b330`).classList.remove(`b`);
      }
    } else {
      clearInterval(gen);
      clearInterval(move_ground);
      clearInterval(create);
      clearInterval(s);
      press = 1;
      j = 1;
      h = 1;
      move = 1;
      z = 369;
      gm.classList.remove('gm1');
      gm.classList.add('gm2');
      highest_score();
    }
  }
  },speed)
}

function block_roof () {
  let w = 82;
  move_roof = setInterval (()=>{
    if (move === 0) {
    let dr1 = document.querySelector(`.b${w - 2}`).classList.contains('s');
    let dr2 = document.querySelector(`.b${w + 39}`).classList.contains('s');
    let dr3 = document.querySelector(`.b${w + 80}`).classList.contains('s');
    if ((dr1 === false) && (dr2 === false) && (dr3 === false)) {
      if (w > 43) {
        for(let i = w; i >= w-1 ; i = i -1) {
          document.querySelector(`.b${i-1}`).classList.add(`b`);
          document.querySelector(`.b${i + 40}`).classList.add(`b`);
          document.querySelector(`.b${i + 81}`).classList.add(`b`);

          //to make the blocks one scare wide do minus one on each i;
          document.querySelector(`.b${i + 1}`).classList.remove(`b`);
          document.querySelector(`.b${i + 42}`).classList.remove(`b`);
          document.querySelector(`.b${i + 83}`).classList.remove(`b`);
        }
        w = w-1;
      } else {
        document.querySelector(`.b42`).classList.remove(`b`);
        document.querySelector(`.b83`).classList.remove(`b`);
        document.querySelector(`.b124`).classList.remove(`b`);
        
        document.querySelector(`.b43`).classList.remove(`b`);
        document.querySelector(`.b84`).classList.remove(`b`);
        document.querySelector(`.b125`).classList.remove(`b`);
      }
    } else {
      clearInterval(gen);
      clearInterval(move_ground);
      clearInterval(create);
      clearInterval(s);
      press = 1;
      j = 1;
      h = 1;
      move = 1;
      z = 369;
      gm.classList.remove('gm1');
      gm.classList.add('gm2');
      console.log('bak');
      highest_score();
    }
  }
  },speed)
}