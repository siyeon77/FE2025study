let weight = 60;//kg
let height = 170;//cm

let heightM =height / 100; //m단위로 변환

let bmi = weight / (heightM*heightM);

console.log("체중:",weight+"kg, 키:",height+"cm");
console.log("당신의 BMI는",bmi,"입니다.");