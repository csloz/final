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
			initialRouteName="Home"
			screenOptions={{
				tabBarInactiveTintColor: colors.tabBarInactive,
				tabBarActiveTintColor: colors.tabBarActive,
			}}
		>
			{/* Hidden as this actually forces a redirect on login -> actual site */}
			<Tabs.Screen
				name="index"
				options={{
					href: null,
				}}
				redirect={authInitialized}
			/>

			<Tabs.Screen
				name="Home"
				options={{
					tabBarIcon: (props) => (
						<TabBarIcon name="home" {...props} />
					),
					tabBarLabel: t("navigate:home"),
					//title: t("navigate:home"),
				}}
			/>
			<Tabs.Screen
				name="Topics"
				options={{
					tabBarIcon: (props) => (
						<TabBarIcon name="albums" {...props} />
					),
					tabBarLabel: t("navigate:topics"),
					//title: t("navigate:topics"),
				}}
			/>
			<Tabs.Screen
				name="sign-in"
				options={{
					tabBarIcon: (props) => (
						<TabBarIcon name="log-in-outline" {...props} />
					),
					tabBarLabel: t("navigate:signin"),
					//title: t("navigate:signin"),
				}}
			/>
			<Tabs.Screen
				name="sign-up"
				options={{
					href: null,
				}}
			/>
		</Tabs>
	);
}
