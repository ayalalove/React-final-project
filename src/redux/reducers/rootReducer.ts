// import { combineReducers } from "redux";
// import userReducer from './userReducer'



// //יצירת מחלקה ראשית
// //מחלקה ראשית מקבלת את המחלקות
// const rootReducer=combineReducers({
//     // 'user':userReducer
//  userReducer,
// })



// import { combineReducers } from "redux";
// import userReducer from './userReducer'

// const rootReducer = combineReducers({
//     'user':userReducer
// })

// export default rootReducer

import { combineReducers } from "redux";
import userReducer from './userReducer'

//יצירת מחלקה ראשית
//מחלקה ראשית מקבלת את המחלקות
const rootReducer=combineReducers({
    'user':userReducer
})

export default rootReducer