import Hero from "../components/Hero";
import { AnalystProject } from "../components/AnalystProject";
import { WebsiteProjects } from "../components/WebsiteProjects";
import { Award } from "../components/Award";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="max-w-5xl mx-auto px8 md:px-10 mt-20 space-y-20">
        <AnalystProject />
        <WebsiteProjects />
        <Award />
        <Footer />
      </div>
    </>
  );
};

export default Home;
