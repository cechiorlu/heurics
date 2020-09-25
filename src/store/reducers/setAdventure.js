import { PLAY_CROSS_THE_CHICKENS, PLAY_TREASURE_HUNT } from "../constants";

const initialState = {
    gameMode: {
        treasureHunt: false,
        crossChickens: true
    }
}

export const setAdventure = (state = initialState, action = {}) => {
    switch(action.type){
        case PLAY_TREASURE_HUNT:
            return {...state, gameMode: {
                treasureHunt: true,
                crossChickens: false
            }}
        case PLAY_CROSS_THE_CHICKENS:
            return {...initialState, gameMode: {
                treasureHunt: false,
                crossChickens: true
            }}
        default:
            return state
    }
}