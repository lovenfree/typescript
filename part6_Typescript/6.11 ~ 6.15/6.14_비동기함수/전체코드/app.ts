//promise 학습
//특정 시간만큼 코드 실행을 delay
//Java script 로 하려면 특정 시간을 주고 타이머 하고 그 이후 실행
function delay(ms:number) : Promise<string> {
    //함수, 시간을 인자로 받음
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random() *10) % 2 ===0){
                resolve('success');
            } else {
                reject('failure');;
            }
        }, ms);
    });
}

delay(3000)
//성공하면
    .then((result: string) =>{
        console.log('done promise' + result);
    })
    //실패하면
    .catch((error: string) =>{
        console.error('fail promise!' + error);
    });

    //Promise 함수 매커니즘에 대한 이해를 우선하고!!!! 아래 방법을 사용해야함
// async / await!!! promise 를 반환하는 함수의 사용법
    //위에서 사용하는 일반적인 비동기 함수 말고 동기 함수처럼 작동하는 비동기 함수 작성
async function main(){
    try{
        console.log('start job')
        //await => 기존의 promise 처럼 비동기로 작성되는 코드가 있을때 앞에 await 를 붙인다.
        //비동기를 동기 함수처럼 사용
        const result = await delay(3000);
        console.error('done async!' + result);
    } catch(e) {
        console.error('fail async' + e);
    }
}

main();