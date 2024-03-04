import { memo } from "react";
import cn from "classnames";
import s from "./Header.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Theme } from "@/app/App";
import { Text } from "@/shared/ui/Text/Text";

interface HeaderProps {
 className?: string;
 theme: Theme;
 chnageTheme: () => void;
}

export const Header = memo((props: HeaderProps) => {
 const { className, theme, chnageTheme } = props;
 return (
  <div className={cn(s.header, {}, className)}>
   <Text colorType="inverted" text="Header" />
   <Button colorType="inverted" onClick={chnageTheme}>
    change theme
   </Button>
  </div>
 );
});
