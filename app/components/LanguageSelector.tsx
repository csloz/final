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
import { useThemeColors } from "../hooks/useThemeColors";
import { useCustomTheme, Themes } from "../context/Theme";

const LANGUAGES = [
	{ code: "en", label: "English" },
	{ code: "zh", label: "中文" },
];

type ThemeRowProps = {
	children: string;
	checked?: boolean;
	onPress: () => void;
};

const Border = () => {
	const { colors } = useThemeColors();

	return <View style={[styles.border, { backgroundColor: colors.border }]} />;
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

const LanguageSelector = () => {
	const { i18n } = useTranslation();
	const selectedLanguageCode = i18n.language;

	const setLanguage = (code: string) => {
		return i18n.changeLanguage(code);
	};

	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={styles.title}>{t("common:languageSelector")}</Text>
				<Ionicons color="#444" size={28} name="ios-language-outline" />
			</View>

			{LANGUAGES.map((language, index) => (
				<React.Fragment key={language.code}>
					<ThemeRow
						onPress={() => setLanguage(language.code)}
						checked={selectedLanguageCode === language.code}
					>
						{language.label}
					</ThemeRow>
					{index !== Themes.length - 1 && <Border />}
				</React.Fragment>
			))}

			{/* {LANGUAGES.map((language) => {
				const selectedLanguage = language.code === selectedLanguageCode;

				return (
					<Pressable
						key={language.code}
						style={styles.buttonContainer}
						disabled={selectedLanguage}
						onPress={() => setLanguage(language.code)}
					>
						<Text
							style={[
								selectedLanguage
									? styles.selectedText
									: styles.text,
							]}
						>
							{language.label}
						</Text>
					</Pressable>
				);
			})} */}
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

export default LanguageSelector;
