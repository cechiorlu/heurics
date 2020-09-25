import * as actionType from "../actions/constants";

const initialState = {
    gameMode: {
        treasureHunt: false,
        crossChickens: true
    }
}

export const setAdventure = (state = initialState, action = {}) => {
    switch(action.type){
        case actionType.PLAY_TREASURE_HUNT:
            return {
                ...state,
                gameMode: {
                    treasureHunt: true,
                    crossChickens: false
                }
            };
        case actionType.PLAY_CROSS_THE_CHICKENS:
            return {
                ...state,
                gameMode: {
                    treasureHunt: false,
                    crossChickens: true
                }
            };
        default:
            return state;
    }
}