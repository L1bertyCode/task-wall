import { ReactNode, memo } from "react";
import cn from "classnames";
import s from "./Card.module.scss";

type CardColorType =
 | "bg"
 | "lightBg"
 | "darkBb"
 | "invertedBg"
 | "invertedLightBg"
 | "invertedDarkBg";

type CardGap = "0" | "8" | "12" | "16" | "20" | "24";
type CardBorderRadius =
 | "radius_s"
 | "radius_m"
 | "radius_l";
interface CardProps {
 className?: string;
 children: ReactNode;
 colorType?: CardColorType;
 gap?: CardGap;
 borderRaduis?: CardBorderRadius;
}
const mapPaddingToGap: Record<CardGap, string> = {
 "0": "gap_0",
 "8": "gap_8",
 "12": "gap_12",
 "16": "gap_16",
 "20": "gap_20",
 "24": "gap_24",
};

export const Card = memo((props: CardProps) => {
 const {
  className,
  children,
  colorType = "lightBg",
  gap = "16",
  borderRaduis = "radius_s",
 } = props;

 const gapClass = mapPaddingToGap[gap];
 return (
  <div
   className={cn(
    s.card,
    s[colorType],
    s[gapClass],
    s[borderRaduis],
    className
   )}
  >
   {children}
  </div>
 );
});
