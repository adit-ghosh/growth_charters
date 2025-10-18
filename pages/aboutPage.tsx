import {Navbar} from "@/components/global/navbar";
import {Footer} from "@/components/global/footer";
import HeroSectionAbout from "@/components/aboutPage/heroSectionAbout";
import JourneySection from "@/components/aboutPage/journeySection";
import MissionVisionSection from "@/components/aboutPage/missionVisionSection";
import TeamSection from "@/components/aboutPage/teamSection";
import CoreValuesSection from "@/components/aboutPage/coreValuesSection";
import ResourceHubSection from "@/components/aboutPage/resourceHubSection";
import ContactSection from "@/components/aboutPage/contactSection";

export default function AboutPage (){
    return (
        <>
        <Navbar/>
        <HeroSectionAbout/>
        <MissionVisionSection/>
        <JourneySection/>
        <TeamSection/>
        <CoreValuesSection/>
        <ResourceHubSection/>
        <ContactSection/>
        <Footer/>
        </>
    );
}