import { types } from "mobx-state-tree";

export const Interest = types.model({
    hobby : types.maybeNull(types.string),
})
.actions((self) => {
    const updateHobby = (text: string) => {
        self.hobby = text;
    }

    return { updateHobby};
});

