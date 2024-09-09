import { types } from "mobx-state-tree";


export const Skills = types.model({
    skill: types.maybeNull(types.string),
    level: types.maybeNull(types.string),
})
