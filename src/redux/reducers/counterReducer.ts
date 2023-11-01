
export type Counter = {
    numberCounter: number
}

const counterInital: Counter = { numberCounter: 7 };

export type ActionType={
    type:string,
    data?:any
}

const counterReducer = (state: Counter = counterInital, action: ActionType) => {
    switch (action.type) {
        case 'UP':
            state.numberCounter++
            state={...state};
            break
        case 'DOWN':
            state.numberCounter--
            state={...state}
        break;
        case 'RESET':
            state.numberCounter=action.data
            state={...state}
        break;
        default:
            break;
    }
    return state
}

export default counterReducer