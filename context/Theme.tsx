import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useColorScheme } from "../app/hooks/useColorScheme";

export const Themes: UserTheme[] = ["light", "dark"];
export type UserTheme = "light" | "dark";

type UserThemeContext = {
	theme: UserTheme;
	setTheme: (theme: UserTheme) => void;
	loading: boolean;
};

const ThemeContext = createContext<UserThemeContext>({
	theme: "light",
	setTheme: () => {},
	loading: true,
});

type ThemeProviderProps = {
	children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const systemTheme = useColorScheme();
	const [theme, setTheme] = useState<UserTheme>(systemTheme);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		AsyncStorage.getItem("@user_preferred_theme")
			.then((storedTheme) => {
				if (storedTheme) {
					setTheme(storedTheme as UserTheme);
				}
			})
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		AsyncStorage.setItem("@user_preferred_theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, loading }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useCustomTheme = () => {
	const context = useContext(ThemeContext);

	let isDark = false;

	if (context.theme && ["dark"].includes(context.theme)) {
		isDark = true;
	}

	return {
		isDark,
		theme: context.theme,
		setTheme: context.setTheme,
		loading: context.loading,
	};
};
