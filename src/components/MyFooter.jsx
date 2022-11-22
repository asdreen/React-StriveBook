const MyFooter = (props) => (
  <div className="footer" style={{ color: props.textColor }}>
    <p>StriveBooks @{new Date().getFullYear()}</p>
  </div>
);

export default MyFooter;
