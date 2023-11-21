// math2 module

const add = (a, b) =>{
    const PI = 3.141592;
    const E = 2.718;
}

// 1)객체로 감싸서 내보내기
module.experts = {
    add: add,
    PI, //PI: PI
    E: E
}

// 2) 하나씩 내보내기
// module.experts.add = add;
// module.experts.PI = PI;
// module.experts.E = E;

// // 위에꺼 생략
// experts.add = add;
// experts.PI = PI;
// experts.E = E;