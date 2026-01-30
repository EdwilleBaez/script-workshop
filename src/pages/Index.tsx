import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Method from "@/components/Method";
import Mentor from "@/components/Mentor";
import WhyIDoThis from "@/components/WhyIDoThis";
import Mentorships from "@/components/Mentorships";
import FreeWorkshop from "@/components/FreeWorkshop";
import IntensiveWorkshop from "@/components/IntensiveWorkshop";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero1 from "@/components/Hero1";
import Problem1 from "@/components/Problem1";
import Method1 from "@/components/Method1";
import Mentor1 from "@/components/Mentor1";
import WhyIDoThis1 from "@/components/WhyIDoThis1";
import Mentorships1 from "@/components/Mentorships1";
import FreeWorkshop1 from "@/components/FreeWorkshop1";
import IntensiveWorkshop1 from "@/components/IntensiveWorkshop1";
import Testimonials1 from "@/components/Testimonials1";
import FinalCTA1 from "@/components/FinalCTA1";
import FreeWorkshopCurriculum from "@/components/FreeWorkshopCurriculum";
import Laboratory from "@/components/Laboratory";
import MentorshipDynamics from "@/components/MentorshipDynamics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* <Hero /> */}
        <Hero1 />
        <Problem />
        {/* <Problem1 /> */}
        {/* <Method /> */}
        <Method1 />
        <Mentor />
        {/* <Mentor1 /> */}
        {/* <WhyIDoThis /> */}
        <WhyIDoThis1 />
        {/* <FreeWorkshop /> */}
        <FreeWorkshop1 />
        {/* <IntensiveWorkshop /> */}
        <FreeWorkshopCurriculum/>
        <Laboratory/>
        {/* <IntensiveWorkshop1 /> */}
        <Mentorships1 />
        <MentorshipDynamics/>
        {/* <Mentorships /> */}
        {/* <Testimonials />
        <Testimonials1 /> */}
        <FinalCTA />    
        {/* <FinalCTA1 /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
