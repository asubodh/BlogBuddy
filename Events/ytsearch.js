chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'Youtube Search - BlogBuddy',
    title: 'Search YouTube for \'%s\'',
    type: 'normal',
    contexts: ['selection']
  });
});
chrome.contextMenus.onClicked.addListener((info) => {
  chrome.tabs.create({
    url: 'http://youtube.com/results?search_query='+encodeURIComponent(info.selectionText)
  });
});