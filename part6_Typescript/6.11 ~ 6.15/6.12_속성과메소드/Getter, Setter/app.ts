class Person {
    _bloodType: string;

    constructor(bloodType: string) {
        this._bloodType = bloodType;
    }
    //method 인테 class 외부에서는 attribute 를 접근 하는 것처럼 사용가능
    set bloodType(btype: string){
        if(btype === 'A' || btype === 'B' || btype === 'O' || btype === 'AB'){
            this._bloodType = btype;
        }
    }

    get bloodType(){
        return  `${this._bloodType} 형`
    }
}

const p1 = new Person('B');

//getter, setter 일반 객체에서는 사용 불가
//class 로 만들어진 곳에서 사용가능한 문법
//내부 데이터는 보호 하면서 외부 사용의 편의성은 높게!
p1.bloodType;
p1.bloodType = 'C';