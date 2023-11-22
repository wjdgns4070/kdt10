// spread 연산자
// 반복 간으한 객체에 대해서 단일 요소로 압축을 해제하는 역할
// => 객체들의 값을 펼쳐준다!

//배열에서 spread
const a = [1,2,3];
const b = [4,5];
const spread = [...a,...b];

console.log(spread)

//문자열에서 spread
const str = 'hello';
console.log([...str]);
console.log([...'hello']);
console.log(str.split(''))


// 객체에서 spread

const chip = {
    base: 'chip',
    company: 'lotte'
}

const potatochip = {
    ...chip,
    flavor: 'onion'
}
console.log(chip);
console.log(potatochip);

const sweetpotatochip = {
    ...potatochip,
    flavor: 'sweet onion'
}

console.log('chip : ',chip);
console.log('chip :',potatochip);
console.log('chip : ',sweetpotatochip);

const world1 = 'abc'
const world2 = 'xyz'
const worldSum = [...world1,...world2];

console.log(worldSum)


