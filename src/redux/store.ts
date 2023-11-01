// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import rootReducer from "./reducers/rootReducer";
// const store = createStore(rootReducer, devToolsEnhancer({}));

// export type StoreType = ReturnType<typeof rootReducer>
// export default store

//מהמורה
import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
//יצירת חנות
//החנות מקבלת מחלקה ראשית
const store=createStore(rootReducer,devToolsEnhancer({}));

//יצירת סוג עבור הסוג של החנות שלי
export type StoreType=ReturnType<typeof rootReducer>
//מייצא את החנות לבחוץ על מנת שנוכל ליבא אותו לקובץ index js
export default store

