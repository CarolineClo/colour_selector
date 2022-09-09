"use strict";

let colourSelector;
let inputHex;
let rgbCode;
let hslCode;

window.addEventListener("DOMContentLoaded", start);

function start() {
  colourSelector = document.querySelector("#colour_selector");
  colourSelector.addEventListener("input", getValues);
}

function getValues() {
  inputHex = document.querySelector("#colour_selector").value;
  rgbCode = getRGB(inputHex);
  hslCode = getHSL(inputHex);
  displayValues();
}

function displayValues() {
  console.log(rgbCode);
  document.querySelector(".hex").textContent = `HEX: ${inputHex}`;
  document.querySelector(".rgb").textContent = `RGB: ${rgbCode}`;
  document.querySelector(".hsl").textContent = hslCode;
  document.querySelector(".colourBox").style.backgroundColor = `rgb${rgbCode}`;
}

function getRGB(inputHex) {
  let r = parseInt(inputHex.substring(1, 3), 16);
  let g = parseInt(inputHex.substring(3, 5), 16);
  let b = parseInt(inputHex.substring(5, 7), 16);

  return `(${r},${g},${b})`;
}

function getHSL() {
  let r = parseInt(inputHex.substring(1, 3), 16);
  let g = parseInt(inputHex.substring(3, 5), 16);
  let b = parseInt(inputHex.substring(5, 7), 16);
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  h = Math.round(h);
  s = Math.round(s);
  l = Math.round(l);

  console.log("hsl(%f,%f%,%f%)", h, s, l);
  return `HSL: ${h}, ${s}%, ${l}%`;
}
