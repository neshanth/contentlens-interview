import data from "../../data.json";
const Summary = ({ showSummary }) => {
  return (
    <div className={`container ${!showSummary && "hidden"}`}>
      <div className="transcript-card">
        <p className="muted-text">Summary</p>
        <p className="transcript-body transcript-summary">
          {data.scenarios[0].result.summary}
        </p>
        <div className="sentiment-grid">
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
      </div>
    </div>
  );
};
export default Summary;
