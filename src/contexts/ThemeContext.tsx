import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";

interface ThemeContextType {
    themeValue: true | false;
    setThemeValue: Dispatch<SetStateAction<true | false>>;
}

export const ThemeContext = createContext<ThemeContextType>({
    themeValue: true,
    setThemeValue: () => {},
});

interface Props {
    children: ReactNode;
    initial?: true | false;
}

export const ThemeContextProvider: FC<Props> = ({
    children,
    initial = true,
}) => {
    const [themeValue, setThemeValue] = useState(initial);
    return (
        <ThemeContext.Provider value={{ themeValue, setThemeValue }}>
            {children}
        </ThemeContext.Provider>
    );
};
