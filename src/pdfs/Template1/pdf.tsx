import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { Mail } from "lucide-react";
import InterestImage from "./../../assets/grip-horizontal.png";
import Star from "./../../assets/star.png";

import { SectionStyled } from "./sectionPdf";
import { observer } from "mobx-react-lite";
import moment from "moment";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#e0e0e0",
    paddingBottom: 0,
    paddingTop: 0,
  },
  mainContent: {
    width: "70%",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  nameBox: {
    backgroundColor: "#6b46c1",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    height: 90,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 10,
    // marginBottom: 5,
  },

  interestSection: {
    fontSize: 27,
    fontWeight: "bold",
    paddingTop: 40,
    marginBottom: 5,
  },
  detailCard: {
    paddingTop: 25,
  },
  detailIcon: {
    marginRight: 10,
  },
  textSmall: {
    fontSize: 12,
    paddingTop: 5,
    color: "#666",
  },
  interestItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    gap: 13,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 12,
    marginBottom: 2,
  },
  skillsContainer: {
    marginTop: 20,
    padding: "16pt",
  },
  skillItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  wrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  detailHeading: {
    fontSize: 15,
  },
  iconStyle: {
    width: 17,
  },
  interestHeading: {
    marginBottom: 8,
  },
  starIcons: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

const convertDate = (date: any) => {
  if (!date?.length) return "";
  return moment(date).format("MMM YYYY");
};

const MyDocument = observer(({ store }: any) => {
  const experience = store?.FormInfo?.experience.workExperience;
  const references = store?.FormInfo.experience.references;
  const education = store?.FormInfo?.experience.educationQualifications;
  const skills = store?.FormInfo?.experience.skills;
  const interest = store?.FormInfo?.experience.interest;

  const Component = (
    <Document>
      <Page size="A2" style={styles.page}>
        <View style={styles.sidebar}>
          <View style={styles.nameBox}>
            {(store?.FormInfo?.personalInfo?.firstName ||
              store?.FormInfo?.personalInfo?.lastName) && (
              <Text style={styles.nameText}>
                {store?.FormInfo?.personalInfo?.firstName ?? ""}{" "}
                {store?.FormInfo?.personalInfo?.lastName ?? ""}
              </Text>
            )}
          </View>
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.sectionTitle}>Personal</Text>
              {store?.FormInfo?.personalInfo?.address && (
                <DetailCard
                  heading="Address"
                  text={store?.FormInfo?.personalInfo?.address}
                />
              )}
              {store?.FormInfo?.personalInfo?.phoneNumber && (
                <DetailCard
                  heading="Phone Number"
                  text={store?.FormInfo?.personalInfo?.phoneNumber}
                />
              )}
              {store?.FormInfo?.personalInfo?.email && (
                <DetailCard
                  heading="Email"
                  text={store?.FormInfo?.personalInfo?.email}
                />
              )}
              {store?.FormInfo?.personalInfo?.drivingLicense && (
                <DetailCard
                  heading="Driving License"
                  text={store?.FormInfo?.personalInfo?.drivingLicense}
                />
              )}
              {store?.FormInfo?.personalInfo?.linkedin && (
                <DetailCard
                  heading="LinkedIn"
                  text={store?.FormInfo?.personalInfo?.linkedin}
                />
              )}
            </View>
            {interest?.length && (
              <View style={styles.interestSection}>
                <Text style={styles?.interestHeading}>Interests</Text>
                {interest.map((item: any, index: any) => (
                  <Interest key={index} text={item.hobby} />
                ))}
              </View>
            )}
          </View>
        </View>
        <View style={styles.mainContent}>
          <SectionStyled
            heading={experience?.getTitle}
            title={experience?.jobTitle}
            sideText={
              (experience?.startDate || experience?.endDate) &&
              convertDate(experience?.startDate) +
                " - " +
                convertDate(experience?.endDate)
            }
            middleText={
              (experience?.employer || experience?.city) &&
              experience?.employer + ", " + experience?.city
            }
            endText={experience?.description}
          />
          <SectionStyled
            heading={references?.getTitle}
            title={references?.companyContactPerson}
            sideText={references?.companyName}
            middleText={references?.companyPhoneNumber}
            endText={references?.companyEmailAddress}
          />
          <SectionStyled
            heading={education?.getTitle}
            title={education?.degree}
            sideText={
              (education?.startDate || education?.endDate) &&
              convertDate(education?.startDate) +
                " - " +
                convertDate(education?.endDate)
            }
            middleText={
              (education?.school || education?.city) &&
              education?.school + ", " + education?.city
            }
            endText={education?.description}
          />
          {skills?.length && (
            <View style={styles.skillsContainer}>
              <Text style={styles.sectionTitle}>Skills</Text>
              {skills.map((item: any, index: any) => (
                <View key={index} style={styles.skillItem}>
                  <Text>{item.skill}</Text>
                  <View style={styles.starIcons}>
                    {Array.from({ length: 5 }).map(() => {
                      return <Image style={styles.iconStyle} src={Star} />;
                    })}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink document={Component} fileName="resume.pdf">
      {({ loading }) => (loading ? "Loading PDF..." : "Download PDF")}
    </PDFDownloadLink>
  );
});

export default MyDocument;

// DetailCard Component for Personal Info
const DetailCard = ({ heading, text }: { heading: string; text: string }) => (
  <View style={styles.detailCard}>
    <Mail />
    <Text style={styles.detailHeading}>{heading}</Text>
    <Text style={styles.textSmall}>{text}</Text>
  </View>
);

// Interest Component
const Interest = ({ text }: { text: string }) => (
  <View style={styles.interestItem}>
    <Image style={styles.iconStyle} src={InterestImage} />
    <Text style={styles.detailHeading}>{text}</Text>
  </View>
);
