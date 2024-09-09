import { CarFront, HomeIcon, Linkedin, Mail, Phone, SquareDot } from "lucide-react"
import { useStore } from "../../store/useStore"
import {observer} from "mobx-react-lite"
import moment from "moment"




const HtmlView = observer(() => {
    const store = useStore(null)

    const experience = store.FormInfo.experience.workExperience


    console.log(moment(experience?.startDate).format("MMM Y"))

    return (
        <div className='w-full h-screen flex'>
            <div className="w-1/4 h-full bg-gray-300">
                <div className="name w-full h-36 bg-purple-800 text-white flex items-center justify-center rounded-bl-[80px] rounded-br-[80px]">
                    <p className="text-3xl"> {store.FormInfo.personalInfo.firstName + " " + store.FormInfo.personalInfo.lastName }</p>
                </div>
                <div className="px-8">
                    <div className="personal mt-7 ">
                        <h1 className="text-4xl">Personal</h1>
                        <DetailCard Icon={<HomeIcon />} Text={store.FormInfo.personalInfo.address} Heading="Address" />
                        <DetailCard Icon={<Phone />} Text={store.FormInfo.personalInfo.phoneNumber} Heading="Phone Number" />
                        <DetailCard Icon={<Mail />} Text={store.FormInfo.personalInfo.email} Heading="Email" />
                        <DetailCard Icon={<CarFront />} Text={store.FormInfo.personalInfo.drivingLicense} Heading="Driving license" />
                        <DetailCard Icon={<Linkedin />} Text={store.FormInfo.personalInfo.linkedin} Heading="LinkedIn" />
                    </div>
                    <div className="personal mt-7">
                        <h1 className="text-4xl">Interests</h1>
                        {store?.FormInfo?.experience?.interest?.map((item,index)=>(
                             <Interest key={index} text={item.hobby} />
                        ))}
                       
                    </div>
                </div>
            </div>
            <div className="w-3/4 h-full bg-white-300 px-16 pt-10">
                <Experience heading="Work Experience" title={experience?.jobTitle ?? "---"} sideText="Sep 2023 - Jul 2024"  middleText={`${experience?.employer ?? "---"}, ${experience?.city ?? "---"}`} endText={experience?.description}/>
                <Experience />
                <Experience />
                <Experience />

            </div>

        </div>
    )
}
)



export default HtmlView




const DetailCard = ({ Icon, Heading, Text }: { Icon: React.ReactNode; Heading: any; Text: any }) => {
    return (<div className="personal-item flex gap-4 mt-7">
        {Icon}
        <div>
            <p>{Heading}</p>
            <p className="text-sm text-gray-600">{Text}</p>
        </div>
    </div>)
}


const Interest = ({ text }: { text: any }) => {
    return (<div className="personal-item items-center flex gap-4 mt-7">
        <SquareDot />
        <div>
            <p>{text}</p>
        </div>
    </div>)
}

interface ExperienceProps{
    heading?: any;
    title?: any;
    sideText?: any;
    middleText?:any;
    endText?: any;

}

const Experience:React.FC<ExperienceProps> = (props) => {
    return <div className="p-8">
        <h1 className="text-3xl heading">{props.heading}</h1>
        <div className="title flex items-center justify-between pt-6">
            <h1 className="title">{props.title}</h1>
            <p className="text-slate-500 side-text">{props.sideText}</p>
        </div>
        <p className="text-slate-500 middle-text pt-2">{props.middleText}</p>
        <p className="text-slate-500 end-text pt-2">{props.endText}</p>
    </div>
}