import { useEffect } from "react";
import { DefaultTheme } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useThemeColors } from "./hooks/useThemeColors";
import { useCustomTheme, ThemeProvider } from "./context/Theme";
import { useColorScheme } from "react-native";
import { Provider, useAuth } from "./context/Auth";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Provider>
			<RootLayoutNav />
		</Provider>
	);
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();
	const { colors } = useThemeColors();
	const theme = useCustomTheme();
	const { authInitialized, user } = useAuth();
	const navigationTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			...DefaultTheme.colors,
			primary: colors.tabBarActive,
			background: colors.background,
			card: colors.background,
			text: colors.text,
			border: "transparent",
		},
	};

	// if (!authInitialized && !user) {
	// 	console.log("not logged in, no authd user");

	// 	return null;
	// }
	if (authInitialized) {
		return (
			<ThemeProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(tabs)" />
				</Stack>
			</ThemeProvider>
		);
	} else if (!authInitialized && !user) {
		return (
			<ThemeProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(auth)" />
				</Stack>
			</ThemeProvider>
		);
	}
}
