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



    async function exec(){
        let user = await call('kim');
        console.log( user + "님 환영합니다.")
        let videos = await back()
        console.log(videos + "을 실행했구나")
        let title = await hell(videos[0])
        console.log(title)
    }

    exec()