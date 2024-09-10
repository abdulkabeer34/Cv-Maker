import { types } from "mobx-state-tree";

export const EducationQualifications = types.model({
    degree: types.maybeNull(types.string),
    city: types.maybeNull(types.string),
    school: types.maybeNull(types.string),
    startDate: types.maybeNull(types.string),
    endDate: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
})
.views(self => ({
    get getTitle() {
        return Object.values(self).some(item => item) ? "Education and Qualifications" : false
    }
}))