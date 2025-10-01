//상품 정보 변수 선언
const productName = "와이드 조거 팬츠";
const originalPrice = 24900;
const discountRate = 10; // 기본 할인율(%)
const isMember = true; // 회원 여부(true면 추가 할인 적용)
const memberDiscountRate = 10; // 회원 추가 할인율 (%)
const freeShippingThreshold = 30000;
const shippingFee = 2500;

//할인 계산
const baseDiscount = originalPrice * (discountRate / 100);
const memberDiscount = isMember ? originalPrice * (memberDiscountRate / 100) : 0;
const totalDiscount = baseDiscount + memberDiscount;
const discountedPrice = originalPrice - totalDiscount;


const finalShippingFee = discountedPrice >= freeShippingThreshold ? 0 : shippingFee;//배송비 조건


const finalPayment = discountedPrice + finalShippingFee;//최종 결제금액 계산

//영수증 출력
console.log("🛒 온라인 쇼핑몰 영수증");
console.log(`상품명: ${productName}`);
console.log(`정가: ${originalPrice.toLocaleString()}원`);
console.log(`할인: -${totalDiscount.toLocaleString()}원 (${discountRate + (isMember ? memberDiscountRate : 0)}%)`);
console.log(`배송비: ${finalShippingFee === 0 ? "무료 (3만원 이상)" : `${finalShippingFee.toLocaleString()}원`}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━");
console.log(`최종 결제: ${finalPayment.toLocaleString()}원`);
console.log(`총 절약: ${totalDiscount.toLocaleString()}원`);