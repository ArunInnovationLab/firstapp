const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "Primary" ? "Primarybutton" : "Secondary button";

  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

function ButtonComponent() {
  return (
    <div>
      <Button
        onClick={() => {
          alert("logging in");
        }}
      >
        Sign in
      </Button>
      <Button
        onClick={() => {
          alert("signing in");
        }}
      >
        Sign up
      </Button>
    </div>
  );
}

export default ButtonComponent;
