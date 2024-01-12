// 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 만든 함수
export const plus = () => ({type: 'PLUS'})
export const minus = () => ({type: 'NINUS'})

// 초기값 정의
const InitialState = {
    number: 0,

}

// reducer 정의: action을 발생시키는 함수 
const CounterReducer = (state = InitialState, action ) => {
switch (action.type) {
    case 'plus':
        return{number: state.number +1};
        case 'minus' :
        return{number: state.number -1};
        default: 
        return state    

}
}

export default CounterReducer