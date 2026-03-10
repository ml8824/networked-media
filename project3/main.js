window.onload = () => {
  //console.log("page has loaded");

  //flip through names every second
  names = document.getElementsByClassName("names");
  nameBox = document.getElementById("name");
  //container = document.getElementById("content");
  dateBox = document.getElementById("date");

  let n = 0;
  function rotateNames() {
    if (names.length == 0) return;
    nameBox.textContent = "Dear " + names[n].textContent + ",";
    n++;
    if (n >= names.length) {
      n = 0;
    }
  }
  rotateNames();
  setInterval(rotateNames, 1000);

  //update date and time
  function updateDate() {
    const date = new Date();
    dateBox.textContent = date.toLocaleString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  updateDate();
  setInterval(updateDate, 1000);
};
