import { Navbar } from "@/components/global/navbar"
import { Footer } from "@/components/global/footer"
import {HeroSection} from "@/components/landingPage/HeroSection";
import {IDP} from "@/components/landingPage/IDP";
import Dash from "@/components/landingPage/Dash";
import CTA from "@/components/landingPage/CTA";
import Features from "@/components/landingPage/Features";

export default function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
                <HeroSection/>
                <Features/>
                <IDP/>
                <Dash/>
                <CTA/>
            </div>
            <Footer />
        </main>
    )
}