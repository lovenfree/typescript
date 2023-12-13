
//화살표 함수 
// 이름이 없고 이름 자체를 줄 수 없는 익명 함수가 기본 값
// 함수를 호출하려면 이름이 있어야 함
(a, b, ...args) => {
    let s = 0;

    for(let i =0; i< args.length; i++){
        s = s + args[i];
    }

    return s;
}


const sumV2 = (a, b, ...args) => {
    let s = 0;

    for(let i =0; i< args.length; i++){
        s = s + args[i];
    }

    return s;
}

//화살표 함수  -> 한줄 함수
const a = ()=>100;
//인자가 하나일때 () 생략
//코드 한줄이면 {} 생략 -> 20 개 정도 바꿔보는 연습 해보기
const ten = x => 100 + x;
const ten2 = (x,y) => 100 + x + y;

//생성기 함수 (generate 함수)
// 일반적 함수 : 호출 시 함수 진입하고 계산이 끝나면 계산결과 반환
// 생성기 함수 : 호출 시 함수가 실행되지 않고 실행 준비 상태로 만든 후 해당 객체를 반환 ( 실행 준비된 함수 객체)
// 함수를 실행했다 멈췄다 할수 있음....? 
function* gen(){
    //yield -> return
    yield 10;
    yield 20;
    return 30;
}

const g = gen();

console.log(g)

//generate 실행을 일시 중지 나갔다가 들어와서 멈췄던 시점부터 실행됨
g.next();
g.next();
g.next();

//비동기 함수 promise
// promise, callback 함수 이해 후 async 
// 기존 순차함수 같은 것처럼 비동기 함수 쓸수 있게 해줌
async function myTask() {
    
}