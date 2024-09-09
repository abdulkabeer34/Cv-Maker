import { cast, types } from "mobx-state-tree";
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
    skills: types.maybeNull(Skills),
    workExperience: types.maybeNull(WorkExperience),
})
.actions((self) => {
    const addEducationQualifications = (data: object) => {
        self.educationQualifications = cast({...data});
    }

    const addInterest = () => {
        self.interest.push({hobby:""}) //=  cast([...self.interest,data]);
    }


    const addReferences = (data: object) => {
        self.references =  cast({...data});
    }

    const addResumeObjective = (data: object) => {
        self.resumeObjective = cast({...data});
    }

    const addSkills = (data: object) => {
        self.skills = cast({...data});
    }

    const addWorkExperience = (data: object) => {
        self.workExperience =  cast({...data});
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
