// 🎁 Open card function
function openCard() {
  document.querySelector("button").style.display = "none";
  document.getElementById("card").style.display = "block";

  startTyping();
  startHearts();
}

// ⌨️ Typing effect
const message = "Wishing you happiness, success, and love always 💖✨";
let i = 0;

function startTyping() {
  const typingEl = document.getElementById("typing");

  function type() {
    if (i < message.length) {
      typingEl.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  type();
}

// 💖 Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.opacity = "0.8";
    heart.style.animation = "floatUp 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }, 250);
}
