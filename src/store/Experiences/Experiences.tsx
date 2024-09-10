import { types } from "mobx-state-tree";
import { EducationQualifications } from "./EducationQualifications/EducationQualifications";
import { Interest } from "./Interest/Interest";
import { References } from "./References/References";
import { ResumeObjective } from "./ResumeObjective/ResumeObjective";
import { Skills } from "./Skills/Skills";
import { WorkExperience } from "./WorkExperience/WorkExperience";

export const Experiences = types.model({
    educationQualifications: types.maybeNull(EducationQualifications),
    interest: types.array(Interest),
    references: types.maybeNull(References),
    resumeObjective: types.maybeNull(ResumeObjective),
    skills: types.array(Skills),
    workExperience: types.maybeNull(WorkExperience),
})
.actions((self) => {
    const addEducationQualifications = (data: any) => {
        self.educationQualifications = {...data};
    }

    const addInterest = () => {
        self.interest.push({hobby:""}) //=  cast([...self.interest,data]);
    }


    const addReferences = (data: any) => {
        self.references =  {...data};
    }

    const addResumeObjective = (data: any) => {
        self.resumeObjective = {...data};
    }

    const addSkills = () => {
        self.skills.push({skill:"",level:""}) 
    }

    const addWorkExperience = (data: any) => {
        self.workExperience =  {...data};
    }

    return { 
        addEducationQualifications, 
        addInterest, 
        addReferences, 
        addResumeObjective, 
        addSkills, 
        addWorkExperience 
    };
});
