import { useEffect, useState } from "react";

function MouseTracker() {
  const [xcoord, setXCoord] = useState<number>(0);
  const [ycoord, setYCoord] = useState<number>(0);

  function handleMouseMovement(event: MouseEvent) {
    setXCoord(event.clientX);
    setYCoord(event.clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);
  return (
    <div>
      MouseTracker
      <div>
        <output>
          {xcoord},{ycoord}
        </output>
      </div>
    </div>
  );
}

export default MouseTracker;
