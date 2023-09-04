import appReducer from "./appReducer"
import noteReducer from "./noteReducer";
import todoReducer from "./todoReducer";
import trelloReducer from "./trelloReducer";

const rootReducer = {
    app: appReducer,
    note: noteReducer,
    todo: todoReducer,
    trello: trelloReducer
}

export default rootReducer;