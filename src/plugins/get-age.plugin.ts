import { getAge } from "./get-age";

export const getAgePlugin = (birdhdate: string) => {
	if (!birdhdate) throw new Error("Birdhdate is required");

	return getAge(birdhdate);
};
