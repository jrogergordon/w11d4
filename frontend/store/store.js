import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer.js"

//Create a function configureStore which calls createStore with the rootReducer
const configureStore = (state = {}) => {
    return createStore(rootReducer, state);
}

export default configureStore;



