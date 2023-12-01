//폼의 등록버튼 클릭시
// - 테이블에 데이터 추가
function createVisitor() {
    const form = document.forms['visitor-form']

    if(form.name.value.length ===0 ||  form.comment.value.length ===0){
        alert('이름 또는 방명록 가입해 주세요!!')
        return;
    }

//name 10글자 이유효성 검사
if(form.name.value > 10) {
    alert('이름은 10글자 미만입니다!')
    return
}

axios({
    method:'post',
    urlL:'/visitor',
    data:{
        name: form.name.value,
        comment:form.comment.value
    }
}).then((res)=>{
    console.log(res.data)
    const data = res.data;

  
})
}

