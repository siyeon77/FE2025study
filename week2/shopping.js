function createCart() {
  let items = []; // 클로저로 보호되는 장바구니 배열
  let discountRate = 0; // 할인율 (0.1, 0.2, 0.3 등)

  return {
    // 상품 추가
    addItem: function(name, price) {
      items.push({ name, price }); // 객체 리터럴로 상품 정보 저장
    },

    // 상품 삭제
    removeItem: function(name) {
      items = items.filter(item => item.name !== name);
    },

    // 전체 가격 계산 (할인 적용 포함)
    getTotal: function() {
      let total = 0;
      for (let i = 0; i < items.length; i++) {
        total += items[i].price; // for 반복문으로 합계 계산
      }
      return Math.round(total * (1 - discountRate)); // 할인 적용
    },

    // 상품 목록 보기
    getItems: function() {
      return items;
    },

    // 할인 적용
    applyDiscount: function(rate) {
      switch (rate) {
        case "10%":
          discountRate = 0.1;
          break;
        case "20%":
          discountRate = 0.2;
          break;
        case "30%":
          discountRate = 0.3;
          break;
        default:
          discountRate = 0;
      }
      return this.getTotal(); // 할인 적용된 가격 반환
    }
  };
}
const cart = createCart();

cart.addItem("사과", 1000);
cart.addItem("바나나", 1500);
cart.addItem("우유", 2000);

console.log(cart.getTotal());           // 4500
console.log(cart.getItems());           // [{name: "사과", price: 1000}, ...]
console.log(cart.applyDiscount("10%")); // 4050
cart.removeItem("사과");
console.log(cart.getTotal());           // 3150