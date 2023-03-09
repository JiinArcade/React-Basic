// Spread
let person = {
  name: "jiin",
  age: 20,
};

// person 이라는 객체를 그대로 복사
// ... 사용시(객체의 깊은 복사 = deep copy)
// 깊은 복사시 기존 객체가 그대로 복사되어서 새로운 객체가 생성된다.
let person2 = { ...person };
console.log(person2);
console.log(person);

// ...이(deep copy) 아닌 얕은 복사(Shallow copy)
let person3 = person;
console.log(person3);

// ...값을 바로 할당할 경우에는 새로운 객체를 생성하는 것이 아닌 기존 객체의 주소값만 복사한다.
// deep copy를 하지 않을 경우 객체는 하나고 그 객체를 참조하는 변수가 두개이다
// person3 기존 객체를 참조할 뿐 새로운 객체가 생성된 게 아니다.
console.log(person == person2);
// 객체를 가르키고 있는 화살표가 동일하기 때문에 true가 나온다.
console.log(person == person3);

// Array(배열)
let a = [1, 2, 3];
let b = [...a, 4];
console.log(b);

// a와 b의 값을 복사한 새로운 객체 생성
let c = [...a, ...b];
console.log(c);
