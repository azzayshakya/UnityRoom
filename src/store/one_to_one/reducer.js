import types from './types'

// export interface Ione2one{
//     isInitiator:boolean
// }

const initialValue={
    isInitiator:false,
    imageBase64:"",
    audioBase64:""
}

// export interface Iaction{
//     type:string,
//     payload:boolean
// }

const reducer=(state=initialValue,action)=>{
    switch(action.type){
        case types.setIsInitiator:
            return{
                ...state,
                isInitiator:action.payload
            }
        case types.setImage:
            return{
                ...state,
                imageBase64:action.payload
            }
        case types.setAudio:
            return{
                ...state,
                audioBase64:action.payload
            }
        default:
            return state
    }
}


export default reducer