const febHolidays = [
    "Dear Baby, please feel this with your heart.",
"This is a beautiful cycle of love — I want you to truly feel it.",
"You're not just my love, you're my best friend too. 😊",
"You're the one and you're my everything. 🤩",
"In sadness, it's you... and in happiness, it's still you. 🤨",
"You're all I need on this journey of life. ❤",
"I've loved you with all my heart — I love you. ❤️",
"You're my everything. ✔",
"You're my soulmate. ✨💕",
"And of course... wait for it baby...",
"You're my future wife. 🤭",
"I'll always be there for you.",
"No matter how far apart we are. 🥰",
"I promise — I’ll never “multi-thread” on you. 😉",
"You're the prettiest, cutest, funniest,",
"Sweetest girl alive. 🤞✍",
"In one word, you're just perfect. 😍",
"I’m the happiest man alive. 🥰",
"I’m so grateful I met you. ❤️",
"I’ll always do my best to keep you happy. 🥺",
"I’m always with you, I promise. 🤞✔",
"Never feel alone, my love. 💓",
"You're the most special person in my life. 🥰",
"I don’t want to lose you. 😒",
"And I swear, I don’t want anyone else. 🥰",
"No one compares to you — you’re the best. ❤️",
"I miss you when something really good happens,",
"Because I wish you were there with me. 🤨",
"I cherish every moment spent with you —",
"Both online and in real life. 💓",
"Yes, there were hardships. 😢",
"But we overcame so many of them. 🥰",
"And it made me realize just",
"How truly important you are to me. ❤️",
"This whole love journey is for you. 😘",
"My unconditional love... my private variable. 💖",
"Please take care of the one who loves you so deeply. ❤",
"I’m binary in love — and you’re the only '1' in my life.",
"Thank you, God, for bringing us together. 🙏",
"You are the love of my life.",
"I love you so much. ❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  