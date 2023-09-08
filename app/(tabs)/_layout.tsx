//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Link, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

//Get theme colors
import { useThemeColors } from "../hooks/useThemeColors";

//Get theme localization
//import { getLocales } from "expo-localization";
import { useTranslation } from "react-i18next";
import { Provider, useAuth } from "../context/Auth";
//Setup props for tab bar
type TabBarIconProps = {
	color: string;
	size: number;
	name: keyof typeof Ionicons.glyphMap;
};

//Assign props to font icon prop bits
const TabBarIcon = ({ color, size, name }: TabBarIconProps) => (
	<Ionicons name={name} size={size} color={color} />
);

export default function TabLayout() {
	const { colors } = useThemeColors();
	const { t } = useTranslation();
	const { authInitialized } = useAuth();

	return (
		<Tabs
			initialRouteName="index"
			screenOptions={{
				tabBarInactiveTintColor: colors.tabBarInactive,
				tabBarActiveTintColor: colors.tabBarActive,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon: (props) => (
						<TabBarIcon name="home" {...props} />
					),
					tabBarLabel: t("navigate:home"),
					title: t("navigate:home"),
					// headerRight: () => (
					// 	<Link href="/modal" asChild>
					// 		<Pressable>
					// 			{({ pressed }) => (
					// 				<FontAwesome
					// 					name="info-circle"
					// 					size={25}
					// 					color={colors.text}
					// 					style={{
					// 						marginRight: 15,
					// 						opacity: pressed ? 0.5 : 1,
					// 					}}
					// 				/>
					// 			)}
					// 		</Pressable>
					// 	</Link>
					// ),
				}}
			/>
			<Tabs.Screen
				name="Lessons"
				options={{
					tabBarIcon: (props) => (
						<TabBarIcon name="school" {...props} />
					),
					tabBarLabel: t("navigate:lessons"),
					title: t("navigate:lessons"),
				}}
			/>
			<Tabs.Screen
				name="Topics"
				options={{
					tabBarIcon: (props) => (
						<TabBarIcon name="albums" {...props} />
					),
					tabBarLabel: t("navigate:topics"),
					title: t("navigate:topics"),
				}}
			/>
			<Tabs.Screen
				name="Settings"
				options={{
					tabBarIcon: (props) => (
						<TabBarIcon name="settings" {...props} />
					),
					tabBarLabel: t("navigate:settings"),
					title: t("navigate:settings"),
				}}
			/>
		</Tabs>
	);
}
