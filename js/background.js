var isOnline = true;

chrome.browserAction.onClicked.addListener(function(tab) {
  isOnline = !isOnline;
  chrome.browserAction.setIcon({
    path: 'images/icon19_' + (isOnline ? 'online' : 'offline') + '.png'
  });
});

chrome.experimental.webRequest.onBeforeRequest.addListener(function(request) {
  if (!/^chrome/.test(request.url) && !isOnline) {
    return { cancel: true };
  }
}, undefined, ['blocking']);
