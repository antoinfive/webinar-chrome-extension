// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.query({active: true}, function(data){
//     var tabData = data[0];
//     chrome.tabs.sendMessage(tabData.id, {data: tabData}, function(response){
//       console.log(response);
//     });
//   });
// });
//
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse){
//     $.ajax({
//       url: request.url,
//       method: request.method,
//       data: request.data
//     });
//   }
// );
