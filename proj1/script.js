const counter = document.querySelector(".counter");
const followers = document.querySelector(".followers");

let count = 0;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 1);

setTimeout(() => {
  followers.innerHTML = "Followers on Instagram!";
}, 5100);
