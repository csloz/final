import { StyleSheet } from "react-native";

import { Text, View } from "../../components/themed";
import { useThemeColors } from "../../hooks/useThemeColors";
import { useTranslation } from "react-i18next";

import { useCustomTheme, ThemeProvider } from "../../context/Theme";
import { useColorScheme } from "react-native";

export default function LessonsLayout() {
	//const { colors } = useThemeColors();
	//const { t } = useTranslation();

	return <LessonsLayoutNav />;
}

function LessonsLayoutNav() {
	const colorScheme = useColorScheme();
	const { colors } = useThemeColors();
	const theme = useCustomTheme();
	const { t } = useTranslation();
	//const { authInitialized, user } = useAuth();

	//if (!authInitialized && !user) return null;

	return (
		<View style={styles.container}>
			<Text style={[styles.text, { color: colors.textSubtle }]}>
				{t("navigate:lessons")}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 22,
	},
});
