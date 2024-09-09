import { types } from "mobx-state-tree";


const FormInfo = types.model({
    personalInfo :  types.frozen(),
    workExperince : types.frozen(),
    templates : types.frozen(),
})



const personalInfo = types.model({

})

const workExperince = types.model({

})

const templates = types.model({

})