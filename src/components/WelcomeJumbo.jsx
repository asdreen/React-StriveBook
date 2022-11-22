const WelcomeJumbo = ({ jumbo, p }) => (
  <div className="container" style={{ backgroundColor: "gray" }}>
    <h1 className="display-4">{jumbo}</h1>
    <p className="lead">{p}</p>
  </div>
);

export default WelcomeJumbo;
