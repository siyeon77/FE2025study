function gugudan() {
  for (let dan = 2; dan <= 9; dan++) {//- dan은 2부터 9까지 반복. 즉, 2단부터 9단까지 각각의 단을 출력하기 위한 반복문.
    console.log(`\n[ ${dan}단 ]`);
    console.log(`\n[ ${dan}단 ]`);
    for (let i = 1; i <= 9; i++) {  //i는 1부터 9까지 반복. 각 단(dan)에 대해 1부터 9까지 곱하는 반복문.
      console.log(`${dan} x ${i} = ${dan * i}`); //실제 곱셈 결과를 출력
    }
  }
}

gugudan();
