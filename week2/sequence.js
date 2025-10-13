// 사용자 데이터 배열
const users = [
  { name: "정진영", age: 17 },
  { name: "이준기", age: 21 },
  { name: "추영우", age: 19 },
  { name: "이재균", age: 25 },
  { name: "김석진", age: 16 }
];

// 1.성인(20세 이상)만 필터링
const adults = users.filter(user => user.age >= 20);

// 2.이름만 추출
const adultNames = adults.map(user => user.name);

// 3.이름을 오름차순 정렬
const sortedNames = adultNames.sort();

console.log("성인 사용자 이름:", sortedNames);