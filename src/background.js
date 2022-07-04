chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "character_counter",
    "title": "Count Character",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((data, tab) => {
  chrome.tabs.sendMessage(tab.id, {name: "countCharacters"}, () => {
  });
})
