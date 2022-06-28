chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "character_counter",
    "title": "Count Character",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((data, tab) => {
  console.log(data.selectionText)
  console.log(tab)
  chrome.tabs.sendMessage(tab.id, {name: "countCharacters", selectionText: data.selectionText}, () => {
  });
})
