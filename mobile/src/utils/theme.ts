import { StyleSheet } from 'react-native';
import { constants, components, base } from './';

export const theme = StyleSheet.create({
	link: {
		color: constants.colours.brand.primary,
		...base.underline
	},
});

export const mdQuestionStyles = StyleSheet.create({
	body: {
		...base.h1,
		...base.mt0,
	},
})

export const mdSubQuestionStyles = StyleSheet.create({
	body: {
		...base.text,
		...base.fontWeightBold,
	},
})

export const mdDetailStyles = StyleSheet.create({
	body: {
		...base.text,
	},
	link: {
		color: constants.colours.brand.primary,
		...base.underline
	},
	bullet_list_icon: {
		...base.h2,
		marginTop: components.text.h2.fontSize * 0.5,
	}
});