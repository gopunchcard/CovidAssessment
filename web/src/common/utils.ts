export class Utils {
	public static transitionDuration = 200; // milliseconds

	public static setDocTitle = (value: string | undefined) => {
		const titleSuffix = 'Core';
		if (value) {
			document.title = `${value} | ${titleSuffix}`;
		} else {
			document.title = titleSuffix;
		}
	}
}

export default Utils;