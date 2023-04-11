javascript:(
  function () {
    //드래그한 데이터를 가져옵니다.
    const e = window.getSelection().toString().trim();

    //드래그한 데이터를 라인 패치노트 양식에 맞도록 수정합니다.
    const dataList = e.split('\n');
    let textToCopy = '';
    let tempText = '';
    const length = dataList.length;
    const wordLimit = 3;
    let wordCount = 0;
    for (let i = 0; i < length; i++) {
      const current = dataList[i];

      const nextIndex = i + 1;

      //다음 문자가 없는 경우
      if(nextIndex >= length) {
        tempText += current + "\"";
        textToCopy += tempText;
        break;
      }

      const next = dataList[i + 1];

      //다음 이벤트로 넘어가지 않은 경우
      if(next === ""){
        wordCount++;
        tempText += current + ' ';

        if (wordCount === wordLimit) {
          tempText += '\n';
          wordCount = 0;
        }

        i += 1;
        continue;
      }

      //다음 이벤트로 넘어가는 경우
      if(next !== ""){
        //첫 이벤트인지 확인합니다.
        if(textToCopy.length > 0) {
          textToCopy += tempText.slice(0, -1) + '\"\n';
        }
        textToCopy += '\"';
        tempText = current +'\n';
        wordCount = 0;
      }
    }

    //수정한 데이터를 클립보드에 저장합니다.
    navigator.clipboard.writeText(textToCopy)
      .then(function () {
        console.log('Text copied to clipboard: ' + textToCopy);
      })
      .catch(function (error) {
        alert('Failed to copy text to clipboard: ' + error);
      });
  }
)();
