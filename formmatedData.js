javascript:(function () {
  var e = window.getSelection().toString().trim();
  if (e !== '') alert(e);
  var a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + JSON.stringify(e);
  a.target = '_blank';
  a.download = 'rawdata.json';
  a.click();
})();
