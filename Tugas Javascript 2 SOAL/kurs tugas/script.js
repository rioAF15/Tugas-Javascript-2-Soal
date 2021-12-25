const factor = 9.915;

const usd = document.getElementById("usd");
const idr = document.getElementById("idr");

usd.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueIDR = value * factor;
  idr.value = valueIDR;
});

idr.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueUSD = value / factor;
  usd.value = valueUSD;
});
