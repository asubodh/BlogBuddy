document.getElementById('id_Black').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: setBackGroundColorBlack
    });
  });
}
document.getElementById('id_White').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: setBackGroundColorWhite
    });
  });
}
function setBackGroundColorBlack(){
  document.body.style.backgroundColor = 'black';
}
function setBackGroundColorWhite(){
  document.body.style.backgroundColor = 'white';
}