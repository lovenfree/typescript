//Type alias 를 사용할때 -> Data 를 표현할때 
//Interface를 사용할때 -> 데이터 및 행위 포괄하는 객체를 묘사하는 경우 사용

//x의 Type 인 number에 의미(좌표)를 부여하고 싶을떄 사용하는 것 Type Alias
export type YesOrNo = 'Y' | 'N';
//type alias : compile type 에 Type 만 검사
export type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일';
//실제 데이터
//Type : 값의 타입은 선언과 함께 결정된다. Type 이 다르면 빌드 순간에 오류
export enum DayOfTheWeek {'월', '화', '수', '목', '금', '토','일'};

export type Name = string;
export type Email = string;
export type FooFunction = () => string;

export interface IUser {
    readonly id : number;
    readonly name : Name;
    email: string;
    receiveInfo: boolean;
    active : YesOrNo; 
}

export interface IUser{
    //? -> optinal
    address?: string;
}

export type TUser = {
    readonly id : number;
    readonly name : string;
    email: Email;
    receiveInfo : boolean;
    active : YesOrNo;
}

//interface 의 경우 이름이 같은 정의일떄 합쳐서 생각하지만
//Type alias 의 경우는 허용하지 않는다
// export type TUser = {
//     address?: string;
// }

export interface IUserProfile extends IUser{
    profileImage: string;
    github?: string;
    twitter?: string;
}

export type TUserProfile = IUser & {
    profileImage: string;
    github?: string;
    twitter?: string;
}

export interface Color {
    fontColor: string;
    strokeColor: string;
    borderColor: string;
    backgroundColor : string;
}

export type Display = {
    display: 'none' | 'block';
    visibility: boolean;
    opacity : number;
}

export type Geometry = {
    width:number;
    height:number;
    padding:number;
    margin:number;
}

export interface IStyle extends Color, Display, Geometry{
    tagName : string;
}

export type TStyle = Color & Display & Geometry & {
    tagName : string;
}

export interface IOnlyNumberValueObject  {
    //key 는 문자 데이터는 number
    [key:string]:number;
}

export type TOnlyBooleanValueObject = {
    [prop:string]: boolean;
}

export interface IGetApi {
    //함수 규격 arg 는 url, Return type 은 Promise<string>
    (url:string, search?: string): Promise<string>
}

export type TGetApi = {
    (url:string, search?: string): Promise<string>
}

//interface 는 public 만 기술한다
export interface IRect {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface IRectConstruct {
    //생성자 자체를
    new (x: number, y: number, width:number, height:number): IRect;
}


