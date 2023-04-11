javascript:(
  function () {
    //드래그한 데이터를 가져옵니다.
    var e = window.getSelection().toString().trim();

    //드래그한 데이터를 라인 패치노트 양식에 맞도록 수정합니다.

    //수정한 데이터를 클립보드에 저장합니다.
    var textToCopy = e;

    navigator.clipboard.writeText(textToCopy)
      .then(function () {
        console.log('Text copied to clipboard: ' + textToCopy);
      })
      .catch(function (error) {
        alert('Failed to copy text to clipboard: ' + error);
      });
  }
)();
