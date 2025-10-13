// 학생 정보 객체
const student = {
  name: "박시연",
  scores: [85, 90, 78] // 배열로 점수 저장
};

// 평균 계산 함수
function getAverage(student) {
  let sum = 0;
  for (let i = 0; i < student.scores.length; i++) {
    sum += student.scores[i]; // for 반복문으로 합계 계산
  }
  return sum / student.scores.length; // length 프로퍼티로 평균 계산
}

// 등급 계산 함수
function getGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else {
    return "F";
  }
}

// 결과 출력
const average = getAverage(student);
console.log(average);           // 84.333...
console.log(getGrade(average)); // "B"