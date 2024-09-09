import { types } from "mobx-state-tree";

export const References = types.model({
    companyName : types.maybeNull(types.string),
    companyContactPerson : types.maybeNull(types.string),
    companyPhoneNumber : types.maybeNull(types.string),
    companyEmailAddress : types.maybeNull(types.string),
})