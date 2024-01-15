import { memo } from "react";

import cn from "classnames";
import s from "./Icon.module.scss";
type SvgProps = Omit<React.SVGProps<SVGElement>, "onClick">;

export interface IconBaseProps extends SvgProps {
 className?: string;
 Svg: React.FunctionComponent<React.SVGProps<SVGElement>>;
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

export const Icon = memo((props: IconProps) => {
 const {
  className,
  Svg,
  width = "20px",
  height = "20px",
  clickable,
  ...otherProps
 } = props;

 const icon = (
  <Svg
   {...otherProps}
   width={width}
   height={height}
   onClick={undefined}
   className={cn(s.icon, className)}
  />
 );
 if (clickable) {
  <button
   className={s.btn}
   type="button"
   onClick={props.onClick}
  >
   {icon}
  </button>;
 }
 return icon;
});
