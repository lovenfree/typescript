//typescript 에서의 사용법
type MyObject = {
    name?: string;
    age: number;
    getFamilyName: () => string;
    getLastName: () => string;
    getBloodType: () => string;
}

//javascript 일때 name을 옵셔널하게 두고 싶을때
//1st : 부모객체, 2nd : 구성객체
const myObj = Object.create(null, {
    name: {
        value: 'Kim mintae',
        writable: false, //false : readonly
        configurable: false //optional
    }
})

delete myObj.name;