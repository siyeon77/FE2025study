//생일 정보
let birthYear = 2006;
let birthMonth = 7;
let birthDay = 4;

let today = new Date();//today.getFullYear(), today.getMonth
let age =today.getFullYear() - birthYear;

if(today.getMonth()+ 1 < birthMonth ||
   (today.getMonth()+ 1 === birthMonth && today.getData()<birthDay)
){
    age --;
}//위 두 조건중 하나라도 참이면 age--- 나이 한살 줄이기


console.log("생일:" , birthYear + "년"+ birthMonth + "월" + birthDay+"일");
console.log("현재 나이는",age+"세")