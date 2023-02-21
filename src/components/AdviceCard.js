function AdviceCard({ id, advice, getAdvice }) {

  return (
    <div className="advice-card">
      <p className="advice-id">{`ADVICE #${id}`}</p>
      <h1 className="advice">{advice}</h1>
      <hr />
      <button className="btn" onClick={getAdvice}>
      </button>
    </div>
  );

}

export default AdviceCard;