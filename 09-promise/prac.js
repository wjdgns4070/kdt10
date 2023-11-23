function call(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const result = name
            resolve(result)
            console.log(result)

        }, 1000)
    })
}
function back(txt) {
    return new Promise((resolve, reiect) => {
        setTimeout(function () {
            const result = "back"
            console.log(result)
            resolve(result)
        }, 1000)
    })
}
function hell(message) {
    return new Promise((resolve, reiect) => {
        setTimeout(function () {
            const result = "callback hell"
            resolve(result)
        }, 1000)
    })
}

call('kim')
    .then(function (result1) {
        console.log(result1, "반가워")
        return back(result1)
    }).then(function (result2) {
        console.log(result2, '을 실행했구나')
        return hell(result2)
    }).then(function (result3) {
        console.log('여기는',result3)
    })


    //화살표 함수 사용으로 하는법
    call('kim')
    .then((result1) => {
        console.log(result1, "반가워")
        return back(result1)
    }).then((result2) => {
        console.log(result2, '을 실행했구나')
        return hell(result2)
    }).then((result3) => {
        console.log('여기는',result3)
    })