import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { ReactNode, memo } from "react";

interface ThemeProviderProps {
 children?: ReactNode;
}

export const ThemeProvider = memo(
 (props: ThemeProviderProps) => {
  const { children } = props;
  return (
   <ThemeContext.Provider value={{}}>
    {children}
   </ThemeContext.Provider>
  );
 }
);
