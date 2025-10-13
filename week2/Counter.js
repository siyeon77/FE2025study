function createCounter() {
  let count = 0; // 클로저로 보호되는 변수

  return {
    increase: function () {
      count++;
      return count;
    },
    decrease: function () {
      if (count > 0) {
        count--;
      }
      return count;
    },
    getValue: function () {
      return count;
    }
  };
}
const counter = createCounter();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.getValue()); // 1
console.log(counter.decrease()); // 0
console.log(counter.decrease()); // 0 (0 미만으로 내려가지 않음)