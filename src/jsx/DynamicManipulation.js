import React from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
      
    </div>
  );
};

export default function LiveOrders() {
  return (
    <div>
      <Row spacing={50}>
        <span>Pizza</span>
        <span>2</span>
        <span>30$</span>
        <span>18:30</span>
        <span>John</span>
      </Row>
    </div>
  );
}


