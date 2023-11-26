// HoC for cursor point
// render props  - a component with a render prop takes a function that returns a react element and calls that function inside its render logic.
import { useEffect } from "react";
import { useState } from "react";

const withMousePosiution = (WrappedComponent) => {
  return (props) => {
    const [MousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={MousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <div>
      <h4>Panel Mouse Tracker : </h4>

      <div>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <div>
        <h4>Point Mouse Tracker</h4>
      <p>
        ({mousePosition.x},{mousePosition.y})
      </p>
    </div>
  );
};

const PanelMouseTracker = withMousePosiution(PanelMouseLogger);
const PointMouseTracker = withMousePosiution(PointMouseLogger);

function HoC() {
  return (
    <div>
      <h1>Little Lemon Restaurant</h1>
      <PanelMouseTracker />

      <PointMouseTracker />
    </div>
  );
}

export default HoC;
