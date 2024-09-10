import { types } from "mobx-state-tree";

export const References = types.model({
    companyName : types.maybeNull(types.string),
    companyContactPerson : types.maybeNull(types.string),
    companyPhoneNumber : types.maybeNull(types.string),
    companyEmailAddress : types.maybeNull(types.string),
})
.views(self => ({
    get getTitle() {
        return Object.values(self).some(item=>item) ? "References" : false
    }
}))