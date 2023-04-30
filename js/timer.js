class CountdownTimer {
    constructor(deadline, cbChange, cbComplete) {
        this._deadline = deadline;
        this._cbChange = cbChange;
        this._cbComplete = cbComplete;
        this._timerId = null;
        this._out = {
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
        };
        this._start();
    }

    _start() {
        this._calc();
        this._timerId = setInterval(this._calc.bind(this), 1000);
    }
    _calc() {
        const diff = this._deadline - new Date();
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        this._out.days = days < 10 ? '0' + days : days;
        this._out.hours = hours < 10 ? '0' + hours : hours;
        this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
        this._out.seconds = seconds < 10 ? '0' + seconds : seconds;

        this._cbChange ? this._cbChange(this._out) : null;
        if (diff <= 0) {
            clearInterval(this._timerId);
            this._cbComplete ? this._cbComplete() : null;
        }
    }
}

const devilSquareDays = document.querySelectorAll('.timer-1 .timer-days');
const devilSquareHours = document.querySelectorAll('.timer-1 .timer-hours');
const devilSquareMinuts = document.querySelectorAll('.timer-1 .timer-minuts');
const devilSquareSeconds = document.querySelectorAll('.timer-1 .timer-seconds');

// Установка времени (в милисекундах)
const devilSquareDefaultTime = (60 * 1000 + 999) * 2;
let devilSquare;

if (localStorage.getItem('timer-1')) {
    let diffInTime = Date.now() - localStorage.getItem('timer-1');
    devilSquare = new Date(Date.now() + devilSquareDefaultTime - diffInTime);
} else {
    //Значение по дефолту
    devilSquare = new Date(Date.now() + devilSquareDefaultTime);
    localStorage.setItem('timer-1', Date.now());
}

new CountdownTimer(
    devilSquare,
    (timer) => {
        for (let i = 0; i < devilSquareDays.length; i++) {
            devilSquareDays[i].textContent = timer.days;
            devilSquareHours[i].textContent = timer.hours;
            devilSquareMinuts[i].textContent = timer.minutes;
            devilSquareSeconds[i].textContent = timer.seconds;
        }
    },
    () => {
        localStorage.removeItem('timer-1');
    },
);

const bloodCastleDays = document.querySelectorAll('.timer-2 .timer-days');
const bloodCastleHours = document.querySelectorAll('.timer-2 .timer-hours');
const bloodCastleMinuts = document.querySelectorAll('.timer-2 .timer-minuts');
const bloodCastleSeconds = document.querySelectorAll('.timer-2 .timer-seconds');
let bloodCastleEvent;
// Установка времени (месяца начинаются с нуля)
const bloodCastleDefaultTime = 60 * 1000 * 60 * 3;
if (localStorage.getItem('timer-2')) {
    let diffInTime = Date.now() - localStorage.getItem('timer-2');
    bloodCastleEvent = new Date(Date.now() + bloodCastleDefaultTime - diffInTime);
} else {
    //Значение по дефолту
    bloodCastleEvent = new Date(bloodCastleDefaultTime);
    localStorage.setItem('timer-2', Date.now());
}
new CountdownTimer(
    bloodCastleEvent,
    (timer) => {
        for (let i = 0; i < bloodCastleDays.length; i++) {
            bloodCastleDays[i].textContent = timer.days;
            bloodCastleHours[i].textContent = timer.hours;
            bloodCastleMinuts[i].textContent = timer.minutes;
            bloodCastleSeconds[i].textContent = timer.seconds;
        }
    },
    () => {
        localStorage.removeItem('timer-2');
    },
);

const chaosCastleDays = document.querySelectorAll('.timer-3 .timer-days');
const chaosCastleHours = document.querySelectorAll('.timer-3 .timer-hours');
const chaosCastleMinuts = document.querySelectorAll('.timer-3 .timer-minuts');
const chaosCastleSeconds = document.querySelectorAll('.timer-3 .timer-seconds');
let chaosCastleEvent;
// Установка времени (месяца начинаются с нуля)
const chaosCastleDefaultTime = new Date(2023, 04, 04);
if (localStorage.getItem('timer-3')) {
    let diffInTime = Date.now() - localStorage.getItem('timer-3');
    chaosCastleEvent = new Date(chaosCastleDefaultTime - diffInTime);
} else {
    //Значение по дефолту
    chaosCastleEvent = new Date(chaosCastleDefaultTime);
    localStorage.setItem('timer-3', Date.now());
}
new CountdownTimer(
    chaosCastleEvent,
    (timer) => {
        for (let i = 0; i < chaosCastleDays.length; i++) {
            chaosCastleDays[i].textContent = timer.days;
            chaosCastleHours[i].textContent = timer.hours;
            chaosCastleMinuts[i].textContent = timer.minutes;
            chaosCastleSeconds[i].textContent = timer.seconds;
        }
    },
    () => {
        localStorage.removeItem('timer-3');
    },
);

const balarogDays = document.querySelectorAll('.timer-4 .timer-days');
const balarogHours = document.querySelectorAll('.timer-4 .timer-hours');
const balarogMinuts = document.querySelectorAll('.timer-4 .timer-minuts');
const balarogSeconds = document.querySelectorAll('.timer-4 .timer-seconds');
let balarogEvent;
// Установка времени (месяца начинаются с нуля)
const balarogDefaultTime = new Date(2023, 04, 16);
if (localStorage.getItem('timer-4')) {
    let diffInTime = Date.now() - localStorage.getItem('timer-4');
    balarogEvent = new Date(balarogDefaultTime - diffInTime);
} else {
    //Значение по дефолту
    balarogEvent = new Date(balarogDefaultTime);
    localStorage.setItem('timer-4', Date.now());
}
new CountdownTimer(
    balarogEvent,
    (timer) => {
        for (let i = 0; i < balarogDays.length; i++) {
            balarogDays[i].textContent = timer.days;
            balarogHours[i].textContent = timer.hours;
            balarogMinuts[i].textContent = timer.minutes;
            balarogSeconds[i].textContent = timer.seconds;
        }
    },
    () => {
        localStorage.removeItem('timer-4');
    },
);
