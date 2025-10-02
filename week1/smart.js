function smartTimeHelper(name = "박시연") {
// 현재 시간과 요일을 가져옴
  const now = new Date(); //현재날짜
  const hour = now.getHours(); //현재 시각
  const minute = now.getMinutes();//현재 시각
  const day = now.getDay(); // 0: 일요일 ~ 6: 토요일 요일을 숫자로 받아옴

  const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const today = weekdays[day]; //숫자요일을 한글 요일로 변환

  let greeting = "";
  if (hour >= 5 && hour < 12) {
    greeting = "좋은 아침";
  } else if (hour >= 12 && hour < 18) {
    greeting = "좋은 오후";
  } else {
    greeting = "좋은 저녁"; //시간에 띠라 인사말을설정 
  }

  const isWeekend = day === 0 || day === 6;
  const isFriday = day === 5; //주말과 금요일(공강)을 구분
  let scheduleMessage = "";
  let nextEvent = "";
  let timeLeft = "";

  if (isWeekend) {
    scheduleMessage = "오늘은 주말";
    nextEvent = "다음 수업까지"; //다음 수업까지 남은 시간 계산
    const monday = new Date(now);
    monday.setDate(now.getDate() + ((8 - day) % 7));
    monday.setHours(9, 0, 0, 0);
    const diffMs = monday - now;
    const diffH = Math.floor(diffMs / (1000 * 60 * 60));
    const diffM = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    timeLeft = `${diffH}시간 ${diffM}분 남음.`;
  } else if (isFriday) {
    scheduleMessage = "금요일은 공강";
    nextEvent = "다음 수업까지"; //다음 월요일까지 남은 시간 계산 (평일 수업일 경우 9시 이전수업 준비, 9시~3시 수업중 3시 이후 수업끝,다음날 수업까지 남은 시간 계산)
    const monday = new Date(now);
    monday.setDate(now.getDate() + 3); // 다음 월요일
    monday.setHours(9, 0, 0, 0);
    const diffMs = monday - now;
    const diffH = Math.floor(diffMs / (1000 * 60 * 60));
    const diffM = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    timeLeft = `${diffH}시간 ${diffM}분 남음.`;
  } else {
    // 평일 수업 스케줄
    if (hour < 9) {
      scheduleMessage = "수업 준비 시간입니다.";
      nextEvent = "수업 시작까지";
      const start = new Date(now);
      start.setHours(9, 0, 0, 0);
      const diffMs = start - now;
      const diffH = Math.floor(diffMs / (1000 * 60 * 60));
      const diffM = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      timeLeft = `${diffH}시간 ${diffM}분 남음.`;
    } else if (hour < 15) {
      scheduleMessage = "지금은 수업 시간입니다.";
      nextEvent = "수업 종료까지";
      const end = new Date(now);
      end.setHours(15, 0, 0, 0);
      const diffMs = end - now;
      const diffH = Math.floor(diffMs / (1000 * 60 * 60));
      const diffM = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      timeLeft = `${diffH}시간 ${diffM}분 남았음.`;
    } else {
      scheduleMessage = "수업 끝 ";
      nextEvent = "내일 수업까지";
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);
      tomorrow.setHours(9, 0, 0, 0);
      const diffMs = tomorrow - now;
      const diffH = Math.floor(diffMs / (1000 * 60 * 60));
      const diffM = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      timeLeft = `${diffH}시간 ${diffM}분 남음.`;
    }
  }

  console.log(`⏰ 스마트 시간 도우미`); //최종 출력
  console.log(`현재: ${hour}시 ${minute}분 (${today})\n`);
  console.log(`${greeting} ${name}님`);
  console.log(`${scheduleMessage}`);
  console.log(`${nextEvent} ${timeLeft}`);
  console.log(`오늘도 화이팅! 🚀`);
}

smartTimeHelper();