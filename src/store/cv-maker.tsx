import { cast, types } from "mobx-state-tree";
import { PersonalInfo } from "./PersonalInfo/PersonalInfo";
import { Experiences } from "./Experiences/Experiences";
import { Templates } from "./Templates/Templates";

export const FormInfo = types.model({
    personalInfo :  types.optional(PersonalInfo,{}),
    experience : types.optional(Experiences,{}),
    templates :  types.optional(Templates,{}),
})
.actions((self)=>{
   const addPersonalInfo = (data:any) => {
       console.log(data)
       self.personalInfo = cast({...data});
   }

   return {addPersonalInfo}
})


export const initFormInfo = ()=>{
    return FormInfo.create({
        personalInfo: {},        // Provide initial values or empty objects
        experience: {},
        templates: {}
    });
}
