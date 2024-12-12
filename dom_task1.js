console.log("title dokumen :", document.title);

const lebarBrowser = window.outerWidth;
const tinggiBrowser = window.outerHeight;
console.log("Uliran Browser (outer): Lebar: ${lebarBrowser}, Tinggi: ${tinggiBrowser}");

const container = document.getElementById("container");
console.log(container);

const subtitle = document.getElementByClassName("subtitle");
console.log(subtitle);

const element = document.getElementQuerySelector(".divider")
console.log(element);

const elements = document.getElementQuerySelectorAll("form > input");
console.log(elements);

