// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     chrome.runtime.sendMessage({
//       method: "POST",
//       action: "xhttp",
//       url: "http://localhost:3000/api/v1/bookmarks/chrome",
//       data: formatData(request.data)
//     });
//   }
// );
//
// function formatData(data){
//   var bookmark_link = data.url;
//   var formatted = {
//     bookmark: {
//         link: bookmark_link,
//         title: data.title
//     }
//   };
//   return formatted;
// }
