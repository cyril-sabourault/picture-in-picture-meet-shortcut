chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, _ }) => {
  chrome.scripting.executeScript({
    target: { tabId },
    files: ['content-script.js'],
  });
});