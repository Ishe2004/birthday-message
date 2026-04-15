let count = 0;

function hitGift() {
  count++;
  document.getElementById("counter").innerText = count + " / 10";

  if (count >= 10) {
    unlockCard();
  }
}

function unlockCard() {
  document.getElementById("start").style.display = "none";
  document.getElementById("card").style.display = "block";

  typeMessage();
  hearts();
  fireworks();
}

/* ✍️ Typewriter message */
const message = "You unlocked this message because you have finally gotten your gift(message)💖 Happy Birthday! May your life be full of success, love, and greatness and may you get everything you deserve. PS: I'm still learning so later on in life I will create something better or you lol! From ME✨";
let i = 0;

function typeMessage() {
  const el = document.getElementById("typing");

  function type() {
    if (i < message.length) {
      el.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}

/* 💖 Hearts */
function hearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💖";
    h.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 5000);
  }, 150);
}

/* 🎆 Fireworks */
function fireworks() {
  setInterval(() => {
    for (let i = 0; i < 8; i++) {
      const s = document.createElement("div");
      s.className = "spark";
      s.innerHTML = "✨";
      s.style.left = Math.random() * window.innerWidth + "px";
      s.style.top = Math.random() * window.innerHeight / 2 + "px";
      document.body.appendChild(s);

      setTimeout(() => s.remove(), 1000);
    }
  }, 700);
}