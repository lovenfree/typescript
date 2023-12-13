// 객체 문법
type Box = {
    width:number;
    height:number;
    borderRadius:number;
    backgroundColor:string;
    borderWidth?: number;
    //computed property : 속성명을 값으로 취급해서 기술할 수 있게 하는 표기
    ['className']?: string;
}

//객체리터럴 : 코드로 객체를 생성
//단점도 많음
let box: Box = {
    width:200,
    height:200,
    borderRadius:5,
    backgroundColor:'red',
}

// 함수 이용
// 변경에 용이한 구조
// 데이터와 구조의 분리
function makeBox(
    width:number,
    height:number,
    borderRadius:number,
    backgroundColor:string,
) : Box {
    //key-value 축약형
    return {
        width,height,borderRadius,backgroundColor
    };
}

makeBox(100,100, 0, 'blue');

// 클래스 이용
class Shape implements Box{
    width:number;
    height:number;
    borderRadius:number;
    backgroundColor:string;

    constructor(
        width:number,
        height:number,
        borderRadius:number,
        backgroundColor:string,
    ) {
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
    }
}

const boxShape = new Shape(10, 10, 0, 'blue');


// 객체 변형
box.borderRadius = 10;
box['className'] = 'box rounded';

const box1 = box;
const box2 = Object.assign({}, box);
const box4 = {...box, borderRadius: 10};
const box3 = JSON.parse(JSON.stringify(box));