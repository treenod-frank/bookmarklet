javascript:(function () {
  var e = document.documentElement.innerHTML;
  var a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(e);
  a.target = '_blank';
  a.download = 'page.html';
  a.click();
})();