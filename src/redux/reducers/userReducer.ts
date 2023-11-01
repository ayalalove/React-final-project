// export type User = {
//     firstName: string
//     password: string
//     // userId: number | null
// }

// //שלב ראשון ליצירת מחלקה , היא ליצר אובייקט מאותחל בהתחלה
// // const userInitial: User = { firstName: '', password: '', userId: null }
// const userInitial: User = { firstName: '', password: '',}


// //שלב שני, יצירת פונקציה שמנהלת את המחלקה
// //אחראית לקבל את האובייקט
// const userReducer = (state: User = userInitial,action:any) => {
//     switch (action.type) {
//         case 'SET_USER':
//             state=action.data;
//             state={...state}
//             break;
    
//         default:
//             break;
//     }
//     return state;
// }

// export default userReducer






//משירה לייזרוביץ

// import { User } from '../../types/User';

// const userInitial: User = { firstName: '', password: '' }

// const userReducer = (state: User = userInitial, action: any) => {
//     switch (action.type) {
//         case 'SET_USER':
//             state = action.data;
//             state = { ...state }
//             break;
//         default:
//             break;
//     }
//     return state;
// }

// export default userReducer




//מהמורה:
export type User = {
    firstName: string
    password: string
    
}

//שלב ראשון ליצירת מחלקה , היא ליצר אובייקט מאותחל בהתחלה
const userInitial: User = { firstName: '', password: '' }

//שלב שני, יצירת פונקציה שמנהלת את המחלקה
//אחראית לקבל את האובייקט
const userReducer = (state: User = userInitial,action:any) => {
    switch (action.type) {
        case 'SET_USER':
            state=action.data;
            state={...state}
            break;
    
        default:
            break;
    }
    return state;
}

export default userReducer