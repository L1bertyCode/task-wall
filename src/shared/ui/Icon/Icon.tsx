import { FunctionComponent, SVGProps, memo } from "react";

import cn from "classnames";
import s from "./Icon.module.scss";

type IconColorType =
 | "primary"
 | "inverted"
 | "cancel"
 | "save"
 | "hint";
export interface IconBaseProps
 extends SVGProps<SVGElement> {
 className?: string;
 Svg: FunctionComponent<SVGProps<SVGElement>>;
 colorType?: IconColorType;
}
export interface NonClickableIconBaseProps
 extends IconBaseProps {
 clickable?: false;
}
export interface ClickableIconBaseProps
 extends IconBaseProps {
 clickable: true;
 onClick: () => void;
}
type IconProps =
 | NonClickableIconBaseProps
 | ClickableIconBaseProps;

export const Icon = memo((props: IconBaseProps) => {
 const {
  className,
  Svg,
  colorType = "primary",
  width = "20px",
  height = "20px",
  // clickable,
  ...otherProps
 } = props;

 const icon = (
  <Svg
   {...otherProps}
   width={width}
   height={height}
   onClick={undefined}
   className={cn(s.icon, s[colorType], className)}
  />
 );
 //  if (clickable) {
 //   <button
 //    className={s.btn}
 //    type="button"
 //    onClick={props.onClick}
 //   >
 //    {icon}
 //   </button>;
 //  }
 return icon;
});
