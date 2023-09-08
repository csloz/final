/*
    This loads the subpages for settings.

    Currently Language, and Theme Selection

    All the action happens in the components selectors
*/

import { StyleSheet } from "react-native";
import { View, Text } from "../components/themed";
import { Ionicons } from "@expo/vector-icons";
//Get our Language Selector
import LanguageSelector from "../components/LanguageSelector";

//Get our Theme Selector
import ThemeSelector from "../components/ThemeSelector";
import LogoutSelector from "../components/LogoutSelector";

import { useTranslation } from "react-i18next";
import { useAuth } from "../context/Auth";

//Return our container and the selectors
export default () => {
	const { t } = useTranslation();
	const { signOut, user } = useAuth();

	return (
		<View style={styles.container}>
			<LanguageSelector />
			<ThemeSelector />
			<LogoutSelector />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		// paddingTop: 60,
	},
	text: {
		fontSize: 18,
		//color: "#000",
		paddingVertical: 4,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		color: "#444",
		fontSize: 28,
		fontWeight: "600",
		paddingBottom: 10,
	},
});
