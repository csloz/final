import {
	Account,
	Client,
	Databases,
	Functions,
	ID,
	Storage,
	Teams,
} from "appwrite";

const client = new Client();

client
	//.setEndpoint("https://cloud.appwrite.io/v1")
	.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT_URL as string)
	.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID as string);

export const appwrite = {
	client,
	account: new Account(client),
	ID,
};
