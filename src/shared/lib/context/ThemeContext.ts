import { Theme } from "@/app/App";
import { createContext } from "react";
interface ThemeContextProps {
 Theme?: Theme;
 setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext({});
