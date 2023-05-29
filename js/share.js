const url = encodeURI(window.location.href);

// Twitter
const shareTwitter = () => {
    const text = '나의 식단 MBTI는?'
    window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url)
}

function copyText() {
    //url라는 변수에 담긴 value(텍스트)를 클립보드에 쓰기
    navigator.clipboard.writeText(url).then(res => {
        alert("공유 링크가 복사되었습니다!");
    })
}

