import { useState, useEffect } from "react";

const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const ReziceLitener = () => {
  const [windowSize, setWindowSize] = useState(initialState);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>
        el tamaño de la venta es: {windowSize.width} x {windowSize.height}
      </p>
    </div>
  );
};

export default ReziceLitener;
