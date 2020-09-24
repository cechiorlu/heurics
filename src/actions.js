import { DRAG_SCRIPT, DROP_SCRIPT, PLAY_CROSS_THE_CHICKENS, PLAY_TREASURE_HUNT, RUN_SCRIPTS, STOP_SCRIPTS } from "./constants";

export const treasureHunt = () => ({
    type: PLAY_TREASURE_HUNT,
})

export const crossChickens = () => ({
    type: PLAY_CROSS_THE_CHICKENS,
})

export const runSripts = () => ({
    type: RUN_SCRIPTS
})

export const stopSripts = () => ({
    type: STOP_SCRIPTS
})

export const dragSript = () => ({
    type: DRAG_SCRIPT
})

export const dropSript = () => ({
    type: DROP_SCRIPT
})