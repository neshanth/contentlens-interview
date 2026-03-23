import { useState } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Summary from "./components/summary/Summary";
import Video from "./components/video/Video";

const App = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSummary = () => {
    // Placeholder for summary generation logic
    setLoading(true);
    setTimeout(() => {
      setShowSummary(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="app page">
      <Navbar />
      <Hero />
      <Video handleSummary={handleSummary} loading={loading} />
      <Summary showSummary={showSummary} />
    </div>
  );
};

export default App;
