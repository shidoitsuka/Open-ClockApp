const clock = document.querySelector('.clock');
const dayEl = document.querySelector('.day');

const currentTime = () => {
    const now = new Date();

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const day = days[now.getDay()];
    const hour = `${now.getHours() < 10 ? "0" + now.getHours() : now.getHours()}`;
    const min = `${now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()}`;
    const sec = `${now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()}`;

    console.log(hour, min, sec);

    const show = `
    <span>${hour}</span>:
    <span>${min}</span>:
    <span>${sec}</span>
    `;

    dayEl.innerHTML = day;
    clock.innerHTML = show;
};

setInterval(currentTime, 1000);