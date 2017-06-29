let defaults = {
    //data: Array<string>()
}

export default function books (state: object = defaults, action: any){
    switch(action.type){
        case "RECIEVE_BOOKS":{
            return {
                ...state,
                data: action.payload
            }
        }
        case "ERROR": {
            return {
                ...state,
                msg: action.msg
            }
        }
    }
}