window.onload = () => {
  let timer;

  infoBox = document.getElementById("box");
  infoPhoto = document.getElementById("photo");
  infoText = document.getElementById("text");
  infoTime = document.getElementById("time");
  vancouver = document.getElementById("vancouver");

  vancouver.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#e37d00";
    infoPhoto.src = "tamara.jpg";
    infoText.textContent =
      "I wonder what you're up to right now across the continent. I can't believe I went from seeing you everyday to barely talking to you ... I really miss you bestie, my twin, my sister 💌";
    infoBox.style.display = "block";

    timer = setInterval(() => {
      const date = new Date();
      infoTime.textContent = date.toLocaleString([], {
        timeZone: "America/Vancouver",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
    }, 1000);
  });

  vancouver.addEventListener("mouseleave", () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "white";
    infoBox.style.display = "none";
  });

  georgia = document.getElementById("georgia");

  georgia.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#ffde36";
    infoPhoto.src = "ingrid.jpg";
    infoText.textContent =
      "Strongest person I know 🥹 I miss watching movies with you and hearing all your stories and rants. I love you so much and here for you always 💛";
    infoBox.style.display = "block";

    timer = setInterval(() => {
      const date = new Date();
      infoTime.textContent = date.toLocaleString([], {
        timeZone: "America/New_York",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
    }, 1000);
  });

  georgia.addEventListener("mouseleave", () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "white";
    infoBox.style.display = "none";
  });

  virginia = document.getElementById("virginia");

  virginia.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#008e53";
    infoPhoto.src = "emma.jpg";
    infoText.textContent =
      "I wonder how your college experience is going. It's crazy how we haven't talked often since coming to college, but whenever I see you again it's like no time has passed 🍃";
    infoBox.style.display = "block";

    timer = setInterval(() => {
      const date = new Date();
      infoTime.textContent = date.toLocaleString([], {
        timeZone: "America/New_York",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
    }, 1000);
  });

  virginia.addEventListener("mouseleave", () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "white";
    infoBox.style.display = "none";
  });

  nyc = document.getElementById("nyc");

  nyc.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#0039a2";
    infoPhoto.src = "nyc.jpg";
    infoText.textContent =
      "My home, my new life since 2023. So grateful to live in this city, to have made the memories I've made, and to have met the friends I have today. NYC is my new life 🌀";
    infoBox.style.display = "block";

    timer = setInterval(() => {
      const date = new Date();
      infoTime.textContent = date.toLocaleString([], {
        timeZone: "America/New_York",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
    }, 1000);
  });

  nyc.addEventListener("mouseleave", () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "white";
    infoBox.style.display = "none";
  });

  abuDhabi = document.getElementById("abuDhabi");

  abuDhabi.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#6b3500";
    infoPhoto.src = "abuDhabi.jpg";
    infoText.textContent =
      "My home for 10 years. Where my parents are, where I grew up. The place that molded me. Grateful for the dates, beaches, palm trees, and people 🌴";
    infoBox.style.display = "block";

    timer = setInterval(() => {
      const date = new Date();
      infoTime.textContent = date.toLocaleString([], {
        timeZone: "Asia/Dubai",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
    }, 1000);
  });

  abuDhabi.addEventListener("mouseleave", () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "white";
    infoBox.style.display = "none";
  });

  shanghai = document.getElementById("shanghai");

  shanghai.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#870000";
    infoPhoto.src = "shanghai.jpg";
    infoText.textContent =
      "My home for 5 months. A city full of fun, adventure, and memories. An unforgettable time with unforgettable people ❤️‍🔥";
    infoBox.style.display = "block";

    timer = setInterval(() => {
      const date = new Date();
      infoTime.textContent = date.toLocaleString([], {
        timeZone: "Asia/Shanghai",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
    }, 1000);
  });

  shanghai.addEventListener("mouseleave", () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "white";
    infoBox.style.display = "none";
  });

  wuhan = document.getElementById("wuhan");

  wuhan.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#ff9cd2";
    infoPhoto.src = "wuhan.jpg";
    infoText.textContent =
      "姥姥,姥爷,舅舅的家。Where my mom was born and raised. Grateful for my family's hospitality ~ I wonder what they're up to right now 🌸";
    infoBox.style.display = "block";

    timer = setInterval(() => {
      const date = new Date();
      infoTime.textContent = date.toLocaleString([], {
        timeZone: "Asia/Shanghai",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
    }, 1000);
  });

  wuhan.addEventListener("mouseleave", () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "white";
    infoBox.style.display = "none";
  });
};
