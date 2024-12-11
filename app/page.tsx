import Footer from "./Footer";
import Header from "./Header";
import Features from "./landing/Features";
import Hero from "./landing/Hero";
import "@/app/landing/landing.css";
import TopFreelancers from "./landing/TopFreelancers";
import Steps from "./landing/Steps";
import Testimonial from "./landing/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Steps />
      <TopFreelancers />
      <Testimonial />
      <Footer />
    </>
  );
}
