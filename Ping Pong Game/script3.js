let can = document.getElementById("table");

let draw_ = can.getContext("2d");

const ball = {
    x: can.width / 2,
    y: can.height / 2,
    radius: 10,
    velX: 10,
    velY: 10,
    speed: 10,
    color: "green",
};

const user = {
    x: 0,
    y: (can.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: "red",
};

const cpu = {
    x: can.width - 10,
    y: (can.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: "red",
};

const sep = {
    x: (can.width - 2) / 2,
    y: 0,
    height: 10,
    width: 2,
    color: "orange",
};

function drawRectangle(x, y, w, h, color) {
    draw_.fillStyle = color;
    draw_.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
    draw_.fillStyle = color;
    draw_.beginPath();
    draw_.arc(x, y, r, 0, Math.PI * 2, true);
    draw_.closePath();
    draw_.fill();
}

function drawScore(text, x, y) {
    draw_.fillStyle = "white";
    draw_.font = "60px Arial";
    draw_.fillText(text, x, y);
}

function drawSeprator() {
    for (let i = 0; i <= can.height; i += 20) {
        drawRectangle(sep.x, sep.y + i, sep.width, sep.height, sep.color);
    }
}

function restart() {
    ball.x = can.width / 2;
    ball.y = can.height / 2;
    ball.velX = -ball.velX;
    ball.velY = 10;
}

function detect_collision(ball, player) {
    player.top = player.y;
    player.bottom = player.y + player.height;
    player.left = player.x;
    player.right = player.x + player.width;

    ball.top = ball.y - ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;
    ball.right = ball.x + ball.radius;

    return (
        player.left < ball.right &&
        player.top < ball.bottom &&
        player.right > ball.left &&
        player.bottom > ball.top
    );
}

// function cpu_movement() {
//   if (cpu.y < ball.y) cpu.y += 5;
//   else cpu.y -= 5;
// }
function cpu_movement() {
    const cpuCenter = cpu.y + cpu.height / 2;

    const ballCenter = ball.y;

    const cpuSpeed = 10;

    if (cpuCenter < ballCenter) {
        cpu.y += cpuSpeed;
    } else if (cpuCenter > ballCenter) {
        cpu.y -= cpuSpeed;
    }

    if (cpu.y < 0) {
        cpu.y = 0;
    } else if (cpu.y + cpu.height > can.height) {
        cpu.y = can.height - cpu.height;
    }
}

function helper() {
    drawRectangle(0, 0, can.width, can.height, "black");
    drawScore(user.score, can.width / 4, can.height / 5);
    drawScore(cpu.score, (3 * can.width) / 4, can.height / 5);
    drawSeprator();
    drawRectangle(user.x, user.y, user.width, user.height, user.color);
    drawRectangle(cpu.x, cpu.y, cpu.width, cpu.height, cpu.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

function updates() {
    if (ball.x - ball.radius < 0) {
        cpu.score++;
        restart();
    } else if (ball.x + ball.radius > can.width) {
        user.score++;
        restart();
    }

    ball.x += ball.velX;
    ball.y += ball.velY;

    if (ball.y - ball.radius < 0 || ball.y + ball.radius > can.height) {
        ball.velY = -ball.velY;
    }

    let player = ball.x + ball.radius < can.width / 2 ? user : cpu;
    if (detect_collision(ball, player)) {
        let collidePoint = ball.y - (player.y + player.height / 2);
        collidePoint = collidePoint / (player.height / 2);
        let angleRad = (Math.PI / 4) * collidePoint;
        ball.velX = -ball.velX;
        ball.velY = ball.speed * Math.sin(angleRad);
        ball.speed += 0.5;
    }

    cpu_movement();


}

function call_back() {
    updates();
    helper();
}

function startGame() {
    user.score = 0;
    cpu.score = 0;
    restart();
}

let fPS = 50;
let looper;

document.getElementById("start-button").addEventListener("click", function () {
    startGame();
    if (looper) clearInterval(looper);
    looper = setInterval(call_back, 1000 / fPS);
});

function getMousePos(evt) {
    let rect = can.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height / 2;
}

can.addEventListener("mousemove", getMousePos);

function onTouchMove(event) {
    event.preventDefault();

    let touch = event.touches[0]; 

    let rect = can.getBoundingClientRect();
    user.y = touch.clientY - rect.top - user.height / 2;
}

can.addEventListener("touchmove", onTouchMove);