import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import React from "react";

import { StyleSheet } from "react-native";

import { View, Text } from "./themed";
import { useThemeColors } from "../hooks/useThemeColors";
import { useCustomTheme, Themes } from "../context/Theme";

import { useAuth } from "../context/Auth";

const LogoutSelector = () => {
	const { t } = useTranslation();
	const { signOut, user } = useAuth();

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={styles.title}>{t("common:logoutTitle")}</Text>
				<Ionicons color="#444" size={28} name="log-out-outline" />
			</View>
			<Text onPress={signOut}>
				{t("common:logout")} - {user?.email}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingHorizontal: 16,
		paddingBottom: 10,
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
	buttonContainer: {
		marginTop: 10,
	},
	text: {
		fontSize: 18,
		//color: "#000",
		paddingVertical: 4,
	},
	selectedText: {
		fontSize: 18,
		fontWeight: "600",
		//color: "tomato",
		paddingVertical: 4,
	},
	checkbox: {
		width: 20,
		height: 20,
		borderRadius: 20,
		borderWidth: 1,
		marginRight: 10,
	},
	border: {
		flex: 1,
		height: 1,
		backgroundColor: "red",
		borderWidth: 1,
	},
});

export default LogoutSelector;
