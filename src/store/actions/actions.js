import * as actionTypes from "./constants";

export const treasureHunt = () => ({
    type: actionTypes.PLAY_TREASURE_HUNT,
})

export const crossChickens = () => ({
    type: actionTypes.PLAY_CROSS_THE_CHICKENS,
})

export const runSripts = () => ({
    type: actionTypes.RUN_SCRIPTS
})

export const stopSripts = () => ({
    type: actionTypes.STOP_SCRIPTS
})

export const dragSript = () => ({
    type: actionTypes.DRAG_SCRIPT
})

export const dropSript = () => ({
    type: actionTypes.DROP_SCRIPT
})