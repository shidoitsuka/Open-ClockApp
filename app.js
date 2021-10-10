const clock = document.querySelector('.clock');

const currentTime = () => {
    const now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    console.log(hour, min, sec);

    const show = `
    <span>${hour}</span>:
    <span>${min}</span>:
    <span>${sec}</span>
    `
    clock.innerHTML = show;
};

setInterval(currentTime, 1000);