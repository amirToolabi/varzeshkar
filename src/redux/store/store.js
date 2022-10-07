import {createStore} from "redux"
import { ListReduser } from "../reduser/ListReduser"

export const store = createStore(
    ListReduser,
    console.log(ListReduser)
)

export default store;