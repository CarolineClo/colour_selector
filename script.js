"use strict";

// let value = document.getElementById("colour_selector").value;
let colourSelector;

window.addEventListener("DOMContentLoaded", start, false);

function start() {
  colourSelector = document.querySelector("#colour_selector");
  colourSelector.addEventListener("input", updateHex);
}

function updateHex(event) {
  document.querySelector(".hex").textContent = `HEX: ${event.target.value}`;
}
