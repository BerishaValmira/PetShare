const Stepper = () => {
  return (
    <ol className="steps">
      <li className="step overflow-hidden">
        <div className="step-circle">1</div>
        <h3>Done</h3>
      </li>
      <li className="step overflow-hidden">
        <div className="step-circle">2</div>
        <h3>In progress</h3>
      </li>
      <li className="step overflow-hidden">
        <div className="step-circle">3</div>
        <h3>Waiting</h3>
      </li>
    </ol>
  );
};

export { Stepper };
