// 생성기 함수  : generator
// 함수 : 코드의 묶음 함수는 인자를 받고 계산을 수행하고 결과로 제공
// generator 기존 함수의 확장 -> 값을 반환하면 종료되던 일반적인 함수와 달리 값 반환시 함수가 종료 되지 않기도 하고 종료되기도 하는 상태를 결정할 수 있다.
// 이것이 옵션이다아-
// 

function makeInfiniteEnergyGenerator(){
    let energy = 0;
    //closure 함수를 리턴하는 함수
    return function (booster = 0){
        if(booster){
            energy += booster;
        } else {
            energy++;
        }

        return energy;
    };
}

function * infiniteEnergyGenerator() {
    let energy = 1;
    while(true){
        //yield : generator 함수를 멈춘다. 그리고 반환값으로 energy로 리턴한다.
        const booster = yield energy;

        if(booster){
            energy += booster;
        } else {
            energy++;
        }
    }
}

// const energy = makeInfiniteEnergyGenerator();

// for(let i =0; i<5; i++){
//     console.log(energy());
// }

// console.log(energy(5));

// 자신을 실행하지 않는 generate 함수
const energyGenerator = infiniteEnergyGenerator();


for(let i =0; i<5; i++){
    //generate 함수는 next 를 가지고 있음. -> 실행을 재개한다.
    console.log(energyGenerator.next());
}

console.log(energyGenerator.next(5))