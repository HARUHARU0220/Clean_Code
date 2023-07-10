//변수(Var) : 의미있고 발음하기 쉬운 변수 이름을 사용

const currentDate = moment().format('YYYY/MM/DD');

// 동일한 유형의 변수에 동일한 어휘를 사용하세요.

//X

getUserInfo();
getClientDate();
getCustomerRecord();

//O

getUser();

//검색 가능한 이름 사용
// 작성할 코드 보다 읽을 코드가 더 많습니다. 그렇기 때문에 코드를 읽고 쉽고 검색 가능하게 작성해야 합니다.
// 그렇지 않으면 여러분의 코드를 이해하려고 하는 사람들에게 큰 어려움을 줍니다. 검색 가능한 이름으로 만드세요.
// buddy.js 그리고 EsLint 같은 도구들이 이름이 정해져 있지 않은 상수들을 발견하고 고칠 수 있게 도와줍니다.

// X  대체 8640000 무엇을 의미하는 걸까?

setTimeout(blastOff, 88640000);

//O
//대문자로 'const' 전역 변수를 선언하세요.

const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

// 의도를 나타내는 변수들을 사용하세요.

// X

const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /4429587493857934*^%%%$%^&*&(*();
saveCityZipCode(address.match(cityZipCodeRegex[1], address.match(cityZipCodeRegex)[2]);

// O

const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /4429587493857934*^%%%$%^&*&(*();
const [,city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);

// 자신만 알아볼 수 있는 작명을 피하세요.
// 명시적인 것이 암시적인 것보다 좋습니다.

// X

const location = ['서울', '인천', '수원'];
location.forEach(l => {
    doStuff();
    doSomeOtherStuff(); // 'l' 은 또 뭘까?
    dispatch(l);
});

// O

const location = ['서울'];
location.forEach(location => {
    doStuff();
    doSomeOtherStuff();
    dispatch(location);
});

// 문맥상 필요없는 것은 쓰지 않는다.

// X
const Car = {
    carMake: "BMW",
    carModel: "M3",
    carColor: "파란색"
};

function paintCar(car) {
    car.carColor = '빨간색';
}

//O

const Car = {
    make: 'BMW',
    model: 'M3',
    color: '파란색'
};

function paintCar(car) {
    car.color = '빨간색';
}

//함수 인자는 2개 이하가 이상적이다.
//매개 변수의 개수를 제한 하는 것은 함수 테스칭을 쉽게 만들어 주기 때문에 중요하다.
//만약 매개 변사가 3개 이상일 경우엔 테스트를 해야하는 경웅의 수가 많아지고 각기 다른 인수들로 어소
//사례들을 테스트 해야한다.
//1개나 2개의 인자를 가지고 있는 것이 가장 이상적인 케이스.
//그리고 3개의 인자는 가능한 피해야한다.
//그것보다 더 많다면 통합되어야 한다.
//만약 2개 이상의 인자를 가진 함수를 사용한다면 그 함수에게 너무 많은 역할을 하게 만든것.
//그렇지 않은 경우라면 대부분의 경우 상위 객체는 1개의 인자만으로 충분하다.
//자바 스크립트를 사용할 때 많은 보일러 플레이트 없이 바로 객체를만들 수 있다.
//그러므로 당신이 만약 많은 인자들을 사용해야한다면 객체를 이용할 수 있다.
//함수가 기대하는 속성을 좀 더 명확히 하기 위해서 es6의 비구조화 구문을
//사용할 수 있고 이 구문에는 몇가지 장점이 있습니다.
//1. 어떤 사람이 그 함수의 시그니쳐(인자의 타입, 반환되는 값의 타입 등)를 볼 때
// 어떤 속성이 사용되는지 즉시 알 수 있다.
//2. 또한 비구조화는 함수에 전달된 인수 객체의 지정된 기본 타입 값을 복제하며. 이는 사이트 이펙트가 일어나는 것을 방지.
// 참고로 인수 객체로 부터 비구조화된 객체와 배열은 복제되지 않는다.
// 3.Linter를 사용하면 사용하지 않는 인자에 대해서 경고해주거나 비구조화 없이 코드를 짤 수 없게 할 수 있다.

//X

function createMenu(title, body, buttonText, cancellable) {
    //...
}

// O

function createMenu ({ title, body, buttonText, cacellable }) {
}

createMemu({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
}); 