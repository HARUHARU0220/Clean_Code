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

