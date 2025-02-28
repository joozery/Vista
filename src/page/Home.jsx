import React from "react";
import Navbar from "../components/Navbar/Navbar"; // ดึง Navbar
import SectionVideo from "../components/Sectionvideo/SectionVideo"; // ดึง SectionVideo
import WhyFundingPips from "../components/SectionVideo/WhyFundingPips"; // ดึง WhyFundingPips

const Home = () => {
  return (
    <div>
      <Navbar /> {/* แสดง Navbar */}
      <div className="home-content">
        <SectionVideo /> {/* แสดง SectionVideo */}
        <WhyFundingPips /> {/* แสดง WhyFundingPips */}
      </div>
    </div>
  );
};

export default Home;
