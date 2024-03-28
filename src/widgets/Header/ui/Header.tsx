import { memo } from "react";
import cn from "classnames";
import s from "./Header.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Theme } from "@/app/App";

import Typewriter from "@/shared/assets/icons/tw.svg";
import { Icon } from "@/shared/ui/Icon/Icon";

interface HeaderProps {
 className?: string;
 theme?: Theme;
 chnageTheme?: () => void;
}

export const Header = memo((props: HeaderProps) => {
 const { className, chnageTheme } = props;
 return (
  <header className={cn(s.header, {}, className)}>
   <nav>
    <Icon
     width="56px"
     height="56px "
     colorType="inverted"
     Svg={Typewriter}
    />
    <Button colorType="inverted" onClick={chnageTheme}>
     change theme
    </Button>
   </nav>
  </header>
 );
});
