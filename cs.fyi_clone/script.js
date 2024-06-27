const tabs = document.querySelector(".tabs");
// console.log(tabs);

const dateclr = document.querySelector(".date");
// console.log(dateclr);
tabs.addEventListener("mouseover", function (e) {
  dateclr.style.color = "#a3a3a3";
});

tabs.addEventListener("mouseout", function (e) {
  dateclr.style.color = "";
});
