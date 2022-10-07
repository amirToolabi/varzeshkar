export const ListReduser = (state = false , action)=>{
    switch(action.type){
        case "COMELIST":
            return state = true
        case "GOLIST":
            return state = false;
        default:
            return state;
    }
}