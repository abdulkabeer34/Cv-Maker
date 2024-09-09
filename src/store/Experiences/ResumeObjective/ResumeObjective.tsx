import { types } from "mobx-state-tree";

export const ResumeObjective = types.model({
    description: types.maybeNull(types.string),
})


