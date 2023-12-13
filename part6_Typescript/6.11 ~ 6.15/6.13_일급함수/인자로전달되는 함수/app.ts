//일급함수 : 함수를 일반적인 값처럼 사용한다. (변수)
function ul(child: string): string {
    return `<ul>${child}</ul>`;
}

function ol(child: string): string {
    return `<ol>${child}</ol>`;
}

function makeLI(
    container: (child: string) => string, //함수타입
    contents: string[]
): string {
    const liList = [];

    for (const content of contents) {
        liList.push(`<Li>${content}</Li>`)
    }

    //liList.join('') -> 하나의 문자열로 합친다.    
    return container(liList.join(''));
}

const htmlUL = makeLI(ul, ['월', '화', '수','목','금','토','일']);
const htmlOL = makeLI(ol, ['봄', '여름', '가을', '겨울']);

console.log(htmlUL);
console.log(htmlOL);
