function createElement (data) {
  p = document.createElement('p');
  p.innerHTML - JSON.stringify(data);
  document.body.appendChild(p);
}
function queryWikipedia(callback) {
  let req = new XMLHttpRequest;
  method = 'GET'
  url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
  req.open(method, url);
  req.send();
  req.onload = function () {
    json = JSON.parse(req.response);
    callback(json.query.pages[21721040].extract);
  }
}
queryWikipedia(createElement);
