console.log("Content script loaded!");

document.body.style.border = "5px solid red";

chrome.runtime.sendMessage({ msg: "Hello from content script" });
