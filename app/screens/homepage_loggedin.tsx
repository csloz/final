import { StyleSheet } from "react-native";

import { Text, View } from "../../components/themed";
import { useThemeColors } from "../hooks/useThemeColors";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/Auth";

export default function HomePageLoggedIn() {
	const { t } = useTranslation();
	const { colors } = useThemeColors();
	const { user } = useAuth();
	return (
		<View style={styles.container}>
			<Text style={[styles.text, { color: colors.textSubtle }]}>
				{t("navigate:home")}
			</Text>
			<Text style={[styles.text, { color: colors.textSubtle }]}>
				{t("common:welcome")} {user?.name}
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
