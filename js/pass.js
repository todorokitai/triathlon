document.body.style.display = "none";
txtUrl = "https://todorokitai.github.io/triathlon/pass.txt";
startIndex = 124576;
endIndex = startIndex + 6;
const xhr = new XMLHttpRequest();
xhr.open("GET", txtUrl, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const responseText = xhr.responseText;
        const password = responseText.substring(startIndex, endIndex);
        const userInput = window.prompt("パスワードを入力してください:");
        if (userInput === password) {
            alert("最高の時間をお過ごしください");
            document.body.style.display = "block";
        }
        else {
            alert("パスワードが正しくありません");
            alert("ホームに戻ります");
            location.href="index.html"
        }
    }
};
xhr.send();