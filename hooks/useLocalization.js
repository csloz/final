import i18n from "i18next";
import * as Localization from "expo-localization";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "intl-pluralrules"; //Annoying req but needed for i18next

import en from "../constants/en";
import zh from "../constants/zh-CN";

let fallbackLanguage = "en";

const languageDetector = {
	type: "languageDetector",
	async: true, // async detection
	detect: (callback) => {
		AsyncStorage.getItem("user-language", (err, language) => {
			if (err || !language) {
				if (err) {
					console.log(
						"Error fetching Languages from asyncstorage ",
						err
					);
					callback(fallbackLanguage);
				} else {
					console.log(
						"No language is set, choosing English as fallback"
					);
					callback(fallbackLanguage);
				}
			}
			console.log("Lang: " + language);
			// We will get back a string like "en-UK".
			callback(language);
			//callback(Localization.locale);
		});
	},
	init: () => {},
	cacheUserLanguage: (language) => {
		AsyncStorage.setItem("user-language", language);
		console.log("Set user-language to " + language);
		//zh-Hans-US
		//en
	},
};

const LANGUAGES = {
	en,
	zh,
};

const LANG_CODES = Object.keys(LANGUAGES);

i18n
	// detect language
	//.use(languageDetector)
	.use(languageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// set options
	.init({
		//lng: fallbackLanguage,
		resources: LANGUAGES,
		//debug: false,
		react: {
			useSuspense: false,
		},
		//compatibilityJSON: "v3",
		interpolation: {
			escapeValue: false,
		},
	});
export default i18n;
