import {
  CarFront,
  HomeIcon,
  Linkedin,
  Mail,
  Phone,
  SquareDot,
} from "lucide-react";
import { useStore } from "../../store/useStore";
import { observer } from "mobx-react-lite";
import moment from "moment";
import { Rate } from "antd";

const convertDate = (date: any) => {
  if (!date?.length) return "";
  return moment(date).format("MMM Y");
};

const HtmlView = observer(() => {
  const store = useStore(null);

  const experience = store.FormInfo.experience.workExperience;
  const references = store.FormInfo.experience.references;
  const { firstName, lastName, ...personalInfo } = store.FormInfo.personalInfo;
  const interest = store.FormInfo.experience.interest;
  const education = store.FormInfo.experience.educationQualifications;
  const skills = store.FormInfo.experience.skills;

  return (
    <div className="w-[70vw] min-h-screen flex mx-auto">
      <div className="w-1/4 min-h-screen bg-gray-300">
        <div className="name w-full h-36 bg-purple-800 text-white flex items-center justify-center rounded-bl-[80px] rounded-br-[80px]">
          {(firstName || lastName) && (
            <p className="text-3xl">
              {firstName ?? ""} {lastName ?? ""}
            </p>
          )}
        </div>
        <div className="px-8">
          {Object.values(personalInfo).some((item) => item) && (
            <div className="personal mt-7 ">
              <h1 className="text-4xl">Personal</h1>
              <DetailCard
                Icon={<HomeIcon />}
                Text={personalInfo.address}
                Heading="Address"
              />
              <DetailCard
                Icon={<Phone />}
                Text={personalInfo.phoneNumber}
                Heading="Phone Number"
              />
              <DetailCard
                Icon={<Mail />}
                Text={personalInfo.email}
                Heading="Email"
              />
              <DetailCard
                Icon={<CarFront />}
                Text={personalInfo.drivingLicense}
                Heading="Driving license"
              />
              <DetailCard
                Icon={<Linkedin />}
                Text={personalInfo.linkedin}
                Heading="LinkedIn"
              />
            </div>
          )}
          {interest?.length ? (
            <div className="interest mt-7">
              <h1 className="text-4xl">Interests</h1>
              {interest?.map((item, index) => (
                <Interest key={index} text={item.hobby} />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-3/4 min-h-screen bg-white-300 pt-10  px-16 bg-white">
        <Section
          heading={experience?.getTitle}
          title={experience?.jobTitle}
          sideText={
            (experience?.startDate || experience?.endDate) &&
            convertDate(experience?.startDate) +
              "-" +
              convertDate(experience?.endDate)
          }
          middleText={
            (experience?.employer || experience?.city) &&
            experience?.employer + "," + experience?.city
          }
          endText={experience?.description}
        />
        <Section
          heading={references?.getTitle}
          title={references?.companyContactPerson}
          sideText={references?.companyName}
          middleText={references?.companyPhoneNumber}
          endText={references?.companyEmailAddress}
        />
        <Section
          heading={education?.getTitle}
          title={education?.degree}
          sideText={
            (education?.startDate || education?.endDate) &&
            convertDate(education?.startDate) +
              "-" +
              convertDate(education?.endDate)
          }
          middleText={
            (education?.school || education?.city) &&
            education?.school + "," + education?.city
          }
          endText={education?.description}
        />
        {skills?.length ? (
          <div className="skills p-8">
            <h1 className="text-3xl heading ">Skills</h1>
            <div className="skills-main pt-6">
              {skills.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between pt-3 min-w-3/5"
                  >
                    <p>{item.skill}</p>
                    <Rate value={parseInt(item.level ?? "0")} disabled />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default HtmlView;

const DetailCard = ({
  Icon,
  Heading,
  Text,
}: {
  Icon: React.ReactNode;
  Heading: any;
  Text: any;
}) => {
  return (
    Text && (
      <div className="personal-item flex gap-4 mt-7">
        {Icon}
        <div>
          <p>{Heading}</p>
          <p className="text-sm text-gray-600">{Text}</p>
        </div>
      </div>
    )
  );
};

const Interest = ({ text }: { text: any }) => {
  return (
    <div className="personal-item items-center flex gap-4 mt-7">
      <SquareDot />
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

interface SectionProps {
  heading?: any;
  title?: any;
  sideText?: any;
  middleText?: any;
  endText?: any;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    Object.values(props).some((item) => item) && (
      <div className="p-8">
        {props.heading && (
          <h1 className="text-3xl heading">{props.heading ?? "---"}</h1>
        )}
        <div className="title flex items-center justify-between pt-6">
          {props.title && <h1 className="title">{props.title ?? "---"}</h1>}
          {props.sideText && (
            <p className="text-slate-500 side-text">
              {props.sideText ?? "---"}
            </p>
          )}
        </div>
        {props.middleText && (
          <p className="text-slate-500 middle-text pt-2">
            {props.middleText ?? "---"}{" "}
          </p>
        )}
        {props.endText && (
          <p className="text-slate-500 end-text pt-2 break-words">
            {props.endText ?? "---"}
          </p>
        )}
      </div>
    )
  );
};
