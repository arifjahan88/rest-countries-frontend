import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const ThemeToggle = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return darkMode;
};
