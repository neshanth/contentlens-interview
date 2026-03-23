import { useState } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Summary from "./components/summary/Summary";
import Video from "./components/video/Video";
import Transcript from "./components/transcript/Transcript";

const App = () => {
  const [showSummary, setShowSummary] = useState(false);

  const handleSummary = () => {
    // Placeholder for summary generation logic
    setTimeout(() => {
      setShowSummary(true);
    }, 2000);
  };

  return (
    <div className="app page">
      <Navbar />
      <Hero />
      <Video handleSummary={handleSummary} />
      <Summary showSummary={showSummary} />
      <Transcript />
    </div>
  );
};

export default App;
