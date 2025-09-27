//  온라인 쇼핑몰 장바구니 계산하기

// 쇼핑몰 장바구니
// 부가세율=?10%, 절대 바뀌지 않으므로 상수로 선언(const)
const TAX_RATE = 0.1;
// 장바구니 총액은 계속 변할 수 있으므로 변수로 선언(let)
// 변수를 초기화 한다. 변수를 선언할 때 최초의 값을 저장하는 것을 말한다.
let cartTotal = 0; //cartTotal 변수에 0을 초기값으로 저장 

// 장바구니 총액 출력
console.log("장바구니 총액: " + cartTotal + "원");

cartTotal = cartTotal + 5000; //장바구니에 5000원짜리 상품 추가
console.log("장바구니 총액: " + cartTotal + "원");

// 장바구니에 3000원짜리 상품 추가
cartTotal = cartTotal + 3000;
console.log("장바구니 총액: " + cartTotal + "원");

// 장바구니에 50000원짜리 상품 추가
cartTotal = cartTotal + 50000;
console.log("장바구니 총액: " + cartTotal + "원");

// 최종결제금액 계산 =>총액+부가세
console.log("장바구니 총액: " + cartTotal + "원");
console.log("부가세: " + cartTotal * "원");
// 부가세 계산


const tshirtPrice = 3000;
const jeansPrice = 50000;

// 부가세율 (10%)
const vatRate = 0.1;

// 합산 금액
const subtotal = tshirtPrice + jeansPrice;

// 부가세 계산
const vat = subtotal * vatRate;

// 최종 결제금액 (부가세 포함)
const totalPrice = subtotal + vat;

console.log(`최종 결제금액 (부가세 포함)은 ${totalPrice}원입니다.`);
