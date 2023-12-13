//Type : 런타임시 결정되는 부분

function addAge(age){
    return age+1
}

let age = addAge(10)
console.log(age)

//변수와 상수
// 변수 그 값을 나중에 변경 할 수 있다. 
// 상수 최초 에만 값을 넣을수 있고 이 후 수정 불가
let x = 10;
const y = 200;

const obj={
    height: 200,
    width: 300,
};

//가능
obj.height=100

//불가능
//obj=100

// 과거에 변수를 지정하던 방식
// 문제 발생 
var test=10


//MDN 연산자
// 식과 문
// 식은 계산하여 하나의 값으로 수렵하는 것을 의미 한다. 식의 끝에 ; 을  넣어 계산하게 한다. 식은 곧 값이다.
// 문은 하나의 값으로 수렴하지 않는 것 예를 들어 반복문 조건문


// 구조분해 할당 - ES6
const colors = ['red','yellow','black']
const yellow_v = colors[1];

//위 의 것을 오른 쪽에 있는 것을 분해해서 왼쪽에 할당 (변수에) 한다. 
const [red,yellow, black] = colors;
const [,yellow1] = colors;

//객체도 가능
const Colors={
    red : 'red',
    yellow : 'yellow',
    black : 'black'
};

const {red1,yellow2} = Colors;

//== 동등 비교 '10'==10 -> true
// === 일치 연산자 -> 를 주로 사용한다


// 조건 삼항연산자
if (a===b){
    a=0;
}else{
    a=1;
}

a=(a===b)?0:1;

//typeof 
//런타임시 해당 타입이 무엇인지 판단

//() 값으로 만들고 싶을 때 사용 
(function foo(){

});


//참조와 복사
let a=10;
let b=a;

//기본형 데이터 타입들은 값이 복사 된다.
// 참조되는 값은 -> 객체는 복사가 아닌 참조된다.