import * as actionType from "./constants";

export const treasureHunt = () => ({
    type: actionType.PLAY_TREASURE_HUNT,
})

export const crossChickens = () => ({
    type: actionType.PLAY_CROSS_THE_CHICKENS,
})

export const runSripts = () => ({
    type: actionType.RUN_SCRIPTS
})

export const stopSripts = () => ({
    type: actionType.STOP_SCRIPTS
})

export const dragSript = () => ({
    type: actionType.DRAG_SCRIPT
})

export const dropSript = () => ({
    type: actionType.DROP_SCRIPT
})