export default function userReducer(state='',{type,payload}){
    switch(type){
        case 'SERVER':
            return payload.duty;
        case 'CLIENT':
            return payload.duty;
        default:
            return state;
    }
}