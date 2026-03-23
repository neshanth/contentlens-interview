import { useState } from "react";

const Transcript = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTranscript = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="transcript-card">
        <p className="muted-text" onClick={toggleTranscript}>
          <span>{isOpen ? "▼" : "▶"} </span> Transcript
        </p>
        {isOpen && (
          <p className="transcript-body">
            <ul>
              <li>This is a video from pexels</li>
              <li>It shows a person setting up a microphone in a studio</li>
              <li>The person is adjusting the microphone stand</li>
              <li>They are preparing for a recording session</li>
            </ul>
          </p>
        )}
      </div>
    </div>
  );
};
export default Transcript;
``;
