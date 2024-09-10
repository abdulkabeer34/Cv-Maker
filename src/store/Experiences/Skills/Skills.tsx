import { types } from "mobx-state-tree";


export const Skills = types.model({
    skill: types.maybeNull(types.string),
    level: types.maybeNull(types.string),
})
.actions((self) => {
    const updateSkill = (text: string) => {
        self.skill = text;
    }

    const updateLevel = (text: string) => {
        self.level = text;
    }


    return { updateLevel ,updateSkill} ;
});

