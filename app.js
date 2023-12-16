// 목표 날짜 설정 (예시: 2023년 1월 1일)
const dDay = new Date("2024-08-13T00:00:00Z");
const millife = 547;

function updateTime() {
    // 현재 한국 시간을 얻어오기
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));


    // 남은 시간 계산
    const timeRemaining = dDay - now;

    // 시간, 분, 초 계산
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const remainPercentage = (millife - days)/millife*100
    percentageResult = remainPercentage.toFixed(2)

    // 결과를 HTML에 업데이트
    const remainday = document.querySelector('.remain-day');
    const remainTime = document.querySelector('.remainTime')
    remainday.innerHTML = `${days}일`;
    remainTime.innerHTML= `${hours}시간 ${minutes}분 ${seconds}초`

    
    //function updatePercentage () {
       // const indicator = document.querySelector('.progress-indicator');
        //const progressBar = document.querySelector('.progress-bar');
//indicator.innerHTML= `지금까지 ${percentageResult}% 했습니다!`
//progressBar.setAttribute('value', percentageResult)
   // }
   // updatePercentage()
}
// 페이지 로드 시에도 업데이트 수행
updateTime();

// 1초마다 업데이트
setInterval(updateTime, 1000);