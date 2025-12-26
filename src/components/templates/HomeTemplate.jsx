import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import InfoSection from "@/components/organisms/InfoSection/InfoSection";
import AboutSection from "@/components/organisms/AboutSection/AboutSection";
import GreetingSection from "@/components/organisms/GreetingSection/GreetingSection";
import ServicesSection from "@/components/organisms/ServicesSection/ServicesSection";
import MastersSection from "@/components/organisms/MastersSection/MastersSection";
import CertificatesSection from "@/components/organisms/CertificatesSection/CertificatesSection";
import MoreAboutSection from "@/components/organisms/MoreAboutSection/MoreAboutSection";
import LocationAndBookingSection from "@/components/organisms/LocationAndBookingSection/LocationAndBookingSection";
import Footer from "@/components/organisms/Footer/Footer";
import PartnersSection from "../organisms/PartnersSection copy/PartnersSection";
//props

export default function HomeTemplate() {
  return (
    <main className="w-full min-h-screen overflow-hidden bg-white">
      <HeroSection></HeroSection>

      <AboutSection />

      <InfoSection />

      <GreetingSection />

      <ServicesSection />

      <MastersSection />

      <CertificatesSection />

      <MoreAboutSection />

      <PartnersSection />

      <LocationAndBookingSection />

      <Footer />
    </main>
  );
}
