import { StyleSheet } from "react-native";

import { Text, View } from "../components/themed";
import { useThemeColors } from "../hooks/useThemeColors";
import { useTranslation } from "react-i18next";

export default () => {
	const { t } = useTranslation();
	const { colors } = useThemeColors();

	return (
		<View style={styles.container}>
			<Text style={[styles.text, { color: colors.textSubtle }]}>
				{t("navigate:home")} Auth
			</Text>
		</View>
	);
};

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
