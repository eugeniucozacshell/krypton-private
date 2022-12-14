import { memo } from "react";
import { RangeProps } from "./types";
import { Input, Label } from "./Range.styles";

const Range = memo(
  ({ label, color = "success", onChange, ...props }: RangeProps) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <div className="ko-slider-range" style={{ width: "30%" }}></div>
        <span className="ko-slider-handle" style={{ left: "30%" }}></span>
      </div>
    );
  }
);

export default Range;
