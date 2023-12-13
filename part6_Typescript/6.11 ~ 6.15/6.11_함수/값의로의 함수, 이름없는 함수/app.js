function myFn(x){
    return x + 100;
}

const result2 = myFn(10);
//javascript 함수의 호출
//argument의 개수가 일치하지 않는다고 하여도 함수 이름이 동일하면 호출가능하다
//가변인자에 대한 처리
const result = myFn(10, 20);

//유사배열 (가변인자의 사용) -> 배열은 아니지만 배열처럼 동작한다.
//이럴 경우 함수 signiture 로 함수의 동작을 파악할수 없는 문제
function sum(){
    let s=0;

    for(let i=0;i<arguments.length;i++){
        s=s+arguments[i];
    }
    return s;
}
sum(1,4,5,6)

//전개 파라미터 (가변인자를 사용하는 함수라는게 사용자에게 전달됨)
function sum2(a,b, ...args){
    let s=0;

    for(let i=0;i<arguments.length;i++){
        s=s+arguments[i];
    }
    return s;
}
sum2(1,4,5,6)

const myFnV2 = function (){
    return 100;
}

//javascript에서 함수를 호출하는 3가지 방법
myFnV2();
//call & apply 공통점 : 첫번째 인자에 context 가 들어감,
// 차이점 : call 은 그냥 함수 call 처럼 작동한다.
//apply 는 배열로 전달된다
sum2.call(null, 10,20,30); // 코드로 값 전달
sum2.apply(null, [10,20,30]); // 데이터로 값 전달, 함수의 인자값을 외부로 전달 받아 다양하게 작동되는 매커니즘

(function (){
    console.log('즉시 실행 함수 실행!');
})()