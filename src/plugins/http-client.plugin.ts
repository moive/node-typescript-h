import axios from "axios";

export const httpclientPlugin = {
	get: async (url: string) => {
		const { data } = await axios.get(url);
		// const response = await fetch(url);
		// const data = response.json();
		return data;
	},
	post: async (url: string, body: any) => {
		throw new Error("Not implemented");
	},
	put: async (url: string, body: any) => {
		throw new Error("Not implemented");
	},
	delete: async (url: string, body: any) => {
		throw new Error("Not implemented");
	},
};
