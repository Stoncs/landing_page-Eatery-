let popupCloser = document.querySelector(".popup__closer");
let popup = document.querySelector(".popup");
let backdrop = document.querySelector(".backdrop");

function myFunction() {
  popup.classList.toggle("popup__show");
  backdrop.classList.toggle('backdrop__show');
  document.body.style.overflow = 'hidden';

}
setTimeout(() => myFunction(), 2000);

popupCloser.addEventListener('click', () => {
  popup.classList.toggle("popup__show");
  backdrop.classList.toggle('backdrop__show');
  document.body.style.overflow = '';
});

//====================================================================
// timer
document.addEventListener('DOMContentLoaded', () => {
  const deadlilne = new Date(2022, 11, 31);
  let timerId = null;

  const countdownTimer = () => {
    const diff = deadlilne - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }

    // count values
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    // set values
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  };

  // get elements
  const $days = document.querySelector('.days');
  const $hours = document.querySelector('.hours');
  const $minutes = document.querySelector('.minutes');
  const $seconds = document.querySelector('.seconds');

  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});
