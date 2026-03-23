import { useState } from "react";

const Transcript = () => {
  // create a transcript component that displays the transcript of the video
  // add a small arrow icon near to transccript title to indicate that it is a dropdown
  const [isOpen, setIsOpen] = useState(false);

  const toggleTranscript = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="transcript-card">
        <p className="muted-text" onClick={toggleTranscript}>
          <span>&#9654;</span> Transcript
        </p>
        {isOpen && (
          <p className="transcript-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        )}
      </div>
    </div>
  );
};
export default Transcript;
``;
