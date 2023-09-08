import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import React from "react";

import {
	ScrollView,
	StyleSheet,
	ViewStyle,
	TouchableOpacity,
	Pressable,
} from "react-native";

import { View, Text } from "./themed";
import { useThemeColors } from "../app/hooks/useThemeColors";
import { useCustomTheme, Themes } from "../context/Theme";

type ThemeRowProps = {
	children: string;
	checked?: boolean;
	onPress: () => void;
};

const ThemeRow = ({ children, checked, onPress }: ThemeRowProps) => {
	const { colors } = useThemeColors();

	const checkedStyle: ViewStyle[] = [
		styles.checkbox,
		{ borderColor: colors.text },
	];

	if (checked) {
		checkedStyle.push({
			borderColor: colors.textGreen,
			backgroundColor: colors.textGreen,
		});
	}

	return (
		<TouchableOpacity style={styles.row} onPress={onPress}>
			<View style={checkedStyle} />
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
};

const Border = () => {
	const { colors } = useThemeColors();

	return <View style={[styles.border, { backgroundColor: colors.border }]} />;
};

const ThemeSelector = () => {
	const { t } = useTranslation();
	const { colors } = useThemeColors();
	const { theme, setTheme } = useCustomTheme();

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={styles.title}>{t("common:themeSelector")}</Text>
				<Ionicons color="#444" size={28} name="color-filter-outline" />
			</View>
			{Themes.map((key, index) => (
				<React.Fragment key={key}>
					<ThemeRow
						onPress={() => setTheme(key)}
						checked={theme === key}
					>
						{/* Translation of our theme name */}
						{t("common:" + key)}
					</ThemeRow>

					{index !== Themes.length - 1 && <Border />}
				</React.Fragment>
			))}
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

export default ThemeSelector;
