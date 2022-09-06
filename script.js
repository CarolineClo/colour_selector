"use strict";

// let value = document.getElementById("colour_selector").value;
let colourSelector;
window.addEventListener("DOMContentLoaded", start);

function start() {
  colourSelector = document.querySelector("#colour_selector");
  colourSelector.addEventListener("input", updateHex);
}

function updateHex(event) {
  document.querySelector(".hex").textContent = `HEX: ${event.target.value}`;
  let hex = event.target.value;
  console.log(hex);
  getRGB(hex);
}

function getRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  console.log(`${r}, ${g}, ${b}`);
  //show it
  document.querySelector(".rgb").textContent = `RGB: ${r}, ${g}, ${b}`;
}
