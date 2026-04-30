window.onload = () => {
  //console.log("page has loaded");

  //live date and time
  function updateTime() {
    const now = new Date();
    document.getElementById("liveTime").innerText = now.toLocaleString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      },
    );
  }

  updateTime();
  setInterval(updateTime, 1000);
};
