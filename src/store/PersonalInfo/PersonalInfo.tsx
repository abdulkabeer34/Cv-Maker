import { types } from "mobx-state-tree";

export const PersonalInfo = types.model({
    firstName : types.maybeNull(types.string),
    lastName : types.maybeNull(types.string),
    email : types.maybeNull(types.string),
    phoneNumber : types.maybeNull(types.string),
    address : types.maybeNull(types.string),
    city : types.maybeNull(types.string),
    dateOfBirth : types.maybeNull(types.string),
    birthPlace : types.maybeNull(types.string),
    drivingLicense : types.maybeNull(types.string),
    gender : types.maybeNull(types.string),
    nationality : types.maybeNull(types.string),
    martialStatus : types.maybeNull(types.string),
    linkedin : types.maybeNull(types.string),
    website : types.maybeNull(types.string),
})