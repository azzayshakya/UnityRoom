import types from './types'

export const setIsInitiator=(value)=>{
    return{
        type:types.setIsInitiator,
        payload:value
    }
}

export const setImage=(value)=>{
    return{
        type:types.setImage,
        payload:value
    }
}

export const setAudio=(value)=>{
    return{
        type:types.setAudio,
        payload:value
    }
}