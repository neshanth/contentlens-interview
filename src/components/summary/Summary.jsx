import data from "../../data.json";
import Transcript from "../transcript/Transcript";
const Summary = ({ showSummary }) => {
  return (
    <div className={`container ${!showSummary && "hidden"}`}>
      <div className="card">
        <p className="muted-text">Summary</p>
        <p className="">{data.scenarios[0].result.transcript_text}</p>
      </div>
      <div className="sentiment-grid result-stack">
        <div className="sentiment-card positive-card">
          <p className="muted-text">Positive</p>
          <p className="sentiment-body">
            {data.scenarios[1].result.positive_review}
          </p>
          <ul>
            {data.scenarios[1].result.positive_points.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sentiment-card negative-card">
          <p className="muted-text">Negative</p>
          <p className="sentiment-body">
            {data.scenarios[2].result.negative_review}
          </p>
        </div>
      </div>

      <Transcript />
    </div>
  );
};
export default Summary;
