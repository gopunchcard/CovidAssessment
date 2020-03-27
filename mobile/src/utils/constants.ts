import { Dimensions } from 'react-native';

// Brand colours
const primary = '#0074dd';
const primaryLight = '#e7edf2'; // TODO: Update
const primaryDark = '#082641'; // TODO: Update
const secondary = '#12CEFB';
const secondaryLight = '#fce3d4'; // TODO: Update
const secondaryDark = '#c25a1f'; // TODO: Update
const tertiary = '#1ab374'; // TODO: Update
const tertiaryLight = '#a4d7e9'; // TODO: Update
const tertiaryDark = '#5296af'; // TODO: Update
const quaternary = '#ffd67a'; // TODO: Update
const quaternaryLight = '#ffe6af'; // TODO: Update
const quaternaryDark = '#ccab62'; // TODO: Update
const quinary = '#eff5f9'; // TODO: Update
const quinaryLight = '#f5f9fb'; // TODO: Update
const quinaryDark = '#bfc4c7'; // TODO: Update

// Grays
const gray100 = '#f8f9fa';
const gray200 = '#e9ecef';
const gray300 = '#dee2e6';
const gray400 = '#ced4da';
const gray500 = '#adb5bd';
const gray600 = '#6c757d';
const gray700 = '#495057';
const gray800 = '#343a40';
const gray900 = '#212529';
const info = '#16a2b8';
const light = '#f5f7f8';
const dark = '#222222';
const warning = '#fddb00';
const warningLight = '#ffe82f';
const success = '#00ac00';
const successLight = '#e6ebe7';
const danger = '#e91b00';
const dangerLight = '#f0e6e6';
const black = '#000000';
const white = '#ffffff';
const bodyBg = white;
const textColor = dark;
const underlayColor = primaryLight;
const disabledOpacity = 0.4;

// Fonts
const bodyFont = 'OpenSans';
const bodyFontRegular = `${bodyFont}-Regular`;
const bodyFontBold = `${bodyFont}-Bold`;
const headingFont = 'Montserrat-Bold';
const bodyFontItalic = `${bodyFont}-Italic`;
const bodyFontBoldItalic = `${bodyFont}-BoldItalic`;

// Dimensions
const viewportWidth = Dimensions.get('window').width;
const viewportHeight = Dimensions.get('window').height;
const spacer = 8;

const borderWidth = 2;
const borderRadius = spacer * 0.5;

// Fonts
const fontSizeBase = spacer * 2.5;
const h1FontSize = fontSizeBase * 1.375;
const h1Color = textColor;
const headingFontFamily = headingFont;
const headingFontWeight = '700';
const h2FontSize = fontSizeBase * 1.125;
const h2Color = textColor;
const h3FontSize = fontSizeBase * 1.125;
const h3Color = textColor;
const h4FontSize = fontSizeBase * 0.875;
const h4Color = textColor;
const smallFontSize = fontSizeBase * 0.875;
const smallColor = textColor;
const smallFontFamily = bodyFontRegular;
const lineheightBase = 1.5;
const lineheightHeading = 1.25;
const lineheightSmall = 1.5;

// Buttons
const buttonHeight = spacer * 5.5;
const buttonBorderWidth = 1;
const buttonBorderRadius = spacer * 5.5;
const buttonPaddingHorizontal = spacer * 2;
const buttonPaddingVertical = spacer;
const buttonFontSize = fontSizeBase;
const buttonLineHeight = lineheightBase * buttonFontSize;
const buttonFontFamily = bodyFontBold;
const buttonFontWeight = '700';
const buttonPrimaryColor = white;
const buttonPrimaryBackgroundColor = primary;
const buttonPrimaryBorderColor = primary;
const buttonPrimaryUnderlayColor = primaryDark;
const buttonPrimaryOutlineBackgroundColor = white;
const buttonPrimaryOutlineColor = primary;
const buttonPrimaryOutlineBorderColor = primary;
const buttonPrimaryOutlineUnderlayColor = primaryLight;
const buttonPrimaryGhostBackgroundColor = white;
const buttonPrimaryGhostColor = primary;
const buttonPrimaryGhostBorderColor = white;
const buttonPrimaryGhostUnderlayColor = primaryLight;
const buttonSecondaryBackgroundColor = secondary;
const buttonSecondaryBorderColor = secondary;
const buttonSecondaryColor = white;
const buttonSecondaryUnderlayColor = secondaryDark;
const buttonSecondaryOutlineBackgroundColor = white;
const buttonSecondaryOutlineColor = secondary;
const buttonSecondaryOutlineBorderColor = secondary;
const buttonSecondaryOutlineUnderlayColor = secondaryLight;
const buttonSecondaryGhostBackgroundColor = white;
const buttonSecondaryGhostColor = secondary;
const buttonSecondaryGhostBorderColor = white;
const buttonSecondaryGhostUnderlayColor = secondaryLight;

const buttonSuccessBackgroundColor = success;
const buttonSuccessBorderColor = success;
const buttonSuccessColor = white;
const buttonSuccessUnderlayColor = successLight;

const buttonDangerBackgroundColor = danger;
const buttonDangerBorderColor = danger;
const buttonDangerColor = white;
const buttonDangerUnderlayColor = dangerLight;

const buttonWarningBackgroundColor = warning;
const buttonWarningBorderColor = warning;
const buttonWarningColor = dark;
const buttonWarningUnderlayColor = warningLight;

// Card
const cardBackgroundColor = white;
const cardPaddingHorizontal = spacer * 3;
const cardPaddingVertical = spacer * 4;
const cardBorderTopWidth = 2;
const cardBorderBottomWidth = 2;
const cardBorderLeftWidth = 0;
const cardBorderRightWidth = 0;
const cardBorderColor = primary;

// checkbox
const checkboxBorderColor = gray400;
const checkboxHeight = spacer * 2.5;
const checkboxWidth = checkboxHeight;
const checkboxBorderRadius = 4;
const checkboxBorderWidth = 2;
const checkboxCheckedBorderColor = primary;
const checkboxBackgroundColor = white;
const checkboxCheckedBackgroundColor = primary;
const checkColor = white;
const checkSize = spacer * 2;

// radio
const radioBorderColor = gray500;
const radioHeight = spacer * 2.5;
const radioWidth = radioHeight;
const radioBackgroundColor = white;
const radioBorderRadius = 30;
const radioBorderWidth = 1;

const radioCheckedBorderColor = primary;
const radioCheckedInnerBackgroundColor = primary;
const radioCheckedInnerBorderColor = white;
const radioCheckedInnerBorderWidth = 2;
const radioCheckedInnerHeight = spacer * 2;
const radioCheckedInnerWidth = radioCheckedInnerHeight;
const radioCheckedBackgroundColor = primary;

// input
const inputBorderColor =  gray400;
const inputBorderRadius = 4;
const inputBorderWidth = 1;
const inputTextColor = textColor;
const inputFontFamily = bodyFontRegular;
const inputFontSize = fontSizeBase;
const inputPaddingHorizontal = spacer * 2;
const inputMinHeight = 44;
const inputBackgroundColor = white;
const inputIconSize = spacer * 3;
const inputAppendPrependBackgroundColor = gray200;

const activeOpacity = 0.7;

export const constants = {
	colours: {
		backgroundColor: bodyBg,
		brand: {
			primary,
			primaryLight,
			primaryDark,
			secondary,
			secondaryLight,
			secondaryDark,
			tertiary,
			tertiaryLight,
			tertiaryDark,
			quaternary,
			quaternaryLight,
			quaternaryDark,
			quinary,
			quinaryLight,
			quinaryDark,
			dark,
			light,
			gray100,
			gray200,
			gray300,
			gray400,
			gray500,
			gray600,
			gray700,
			gray800,
			gray900,
			warning,
			danger,
			dangerLight,
			success,
			successLight,
			info,
		},
		body: {
			border: gray200,
			text: dark,
			shadow: black,
		},
		common: {
			black,
			white,
		},
	},
	touchableHighlight: {
		underlayColor,
	},
	dimensions: {
		borderWidth,
		borderRadius,
		spacer,
		gutter: spacer,
		viewportHeight,
		viewportWidth,
	},
	touchableOpacity: {
		activeOpacity,
		disabledOpacity,
	},
	durations: {
		toast: 7000,
	},
};

export const components = {
	button: {
		height: buttonHeight,
		borderRadius: buttonBorderRadius,
		borderWidth: buttonBorderWidth,
		paddingHorizontal: buttonPaddingHorizontal,
		paddingVertical: buttonPaddingVertical,
		fontFamily: buttonFontFamily,
		fontWeight: buttonFontWeight,
		fontSize: buttonFontSize,
		lineHeight: buttonLineHeight,
		disabledOpacity,
		primary: {
			backgroundColor: buttonPrimaryBackgroundColor,
			borderColor: buttonPrimaryBorderColor,
			color: buttonPrimaryColor,
			underlayColor: buttonPrimaryUnderlayColor,
		},
		primaryOutline: {
			backgroundColor: buttonPrimaryOutlineBackgroundColor,
			borderColor: buttonPrimaryOutlineBorderColor,
			color: buttonPrimaryOutlineColor,
			underlayColor: buttonPrimaryOutlineUnderlayColor,
		},
		primaryGhost: {
			backgroundColor: buttonPrimaryGhostBackgroundColor,
			borderColor: buttonPrimaryGhostBorderColor,
			color: buttonPrimaryGhostColor,
			underlayColor: buttonPrimaryGhostUnderlayColor,
		},
		secondary: {
			backgroundColor: buttonSecondaryBackgroundColor,
			borderColor: buttonSecondaryBorderColor,
			color: buttonSecondaryColor,
			underlayColor: buttonSecondaryUnderlayColor,
		},
		secondaryOutline: {
			backgroundColor: buttonSecondaryOutlineBackgroundColor,
			borderColor: buttonSecondaryOutlineBorderColor,
			color: buttonSecondaryOutlineColor,
			underlayColor: buttonSecondaryOutlineUnderlayColor,
		},
		secondaryGhost: {
			backgroundColor: buttonSecondaryGhostBackgroundColor,
			borderColor: buttonSecondaryGhostBorderColor,
			color: buttonSecondaryGhostColor,
			underlayColor: buttonSecondaryGhostUnderlayColor,
		},
		success: {
			backgroundColor: buttonSuccessBackgroundColor,
			borderColor: buttonSuccessBorderColor,
			color: buttonSuccessColor,
			underlayColor: buttonSuccessUnderlayColor,
		},
		danger: {
			backgroundColor: buttonDangerBackgroundColor,
			borderColor: buttonDangerBorderColor,
			color: buttonDangerColor,
			underlayColor: buttonDangerUnderlayColor,
		},
		warning: {
			backgroundColor: buttonWarningBackgroundColor,
			borderColor: buttonWarningBorderColor,
			color: buttonWarningColor,
			underlayColor: buttonWarningUnderlayColor,
		},
	},
	text: {
		regular: {
			color: textColor,
			fontSize: fontSizeBase,
			fontFamily: bodyFontRegular,
			fontWeight: 'normal',
			lineHeight: lineheightBase * fontSizeBase,
			uppercase: false,
		},
		h1: {
			color: h1Color,
			fontSize: h1FontSize,
			fontFamily: headingFontFamily,
			fontWeight: headingFontWeight,
			lineHeight: lineheightHeading * h1FontSize,
			uppercase: false,
		},
		h2: {
			color: h2Color,
			fontSize: h2FontSize,
			fontFamily: headingFontFamily,
			fontWeight: headingFontWeight,
			lineHeight: lineheightHeading * h2FontSize,
			uppercase: false,
		},
		h3: {
			color: h3Color,
			fontSize: h3FontSize,
			fontFamily: headingFontFamily,
			fontWeight: headingFontWeight,
			lineHeight: lineheightHeading * h3FontSize,
			uppercase: false,
		},
		h4: {
			color: h4Color,
			fontSize: h4FontSize,
			fontFamily: headingFontFamily,
			fontWeight: headingFontWeight,
			lineHeight: lineheightHeading * h4FontSize,
			uppercase: false,
		},
		small: {
			color: smallColor,
			fontSize: smallFontSize,
			fontFamily: smallFontFamily,
			lineHeight: lineheightSmall * smallFontSize,
			fontWeight: 'normal',
			uppercase: false,
		},
		bold: {
			fontFamily: bodyFontBold,
			fontWeight: '700',
		},
		italic: {
			fontFamily: bodyFontItalic,
			fontStyle: 'italic',
		},
		boldItalic: {
			fontFamily: bodyFontBoldItalic,
			fontWeight: '700',
			fontStyle: 'italic',
		},
	},
	card: {
		backgroundColor: cardBackgroundColor,
		paddingHorizontal: cardPaddingHorizontal,
		paddingVertical: cardPaddingVertical,
		borderTopWidth: cardBorderTopWidth,
		borderBottomWidth: cardBorderBottomWidth,
		borderLeftWidth: cardBorderLeftWidth,
		borderRightWidth: cardBorderRightWidth,
		borderColor: cardBorderColor,
	},
	checkbox: {
		height: checkboxHeight,
		width: checkboxWidth,
		borderWidth: checkboxBorderWidth,
		borderRadius: checkboxBorderRadius,
		unchecked: {
			backgroundColor: checkboxBackgroundColor,
			borderColor: checkboxBorderColor,
		},
		checked: {
			backgroundColor: checkboxCheckedBackgroundColor,
			borderColor: checkboxCheckedBorderColor,
			checkColor,
			checkSize,
		},
	},
	radio: {
		height: radioHeight,
		width: radioWidth,
		borderWidth: radioBorderWidth,
		borderRadius: radioBorderRadius,
		unchecked: {
			backgroundColor: radioBackgroundColor,
			borderColor: radioBorderColor,
		},
		checked: {
			backgroundColor: radioCheckedBackgroundColor,
			borderColor: radioCheckedBorderColor,
			inner: {
				backgroundColor: radioCheckedInnerBackgroundColor,
				borderColor: radioCheckedInnerBorderColor,
				height: radioCheckedInnerHeight,
				width: radioCheckedInnerWidth,
				borderWidth: radioCheckedInnerBorderWidth,
			},
		},
	},
	input: {
		color: inputTextColor,
		fontFamily: inputFontFamily,
		fontStyle: 'normal',
		fontSize: inputFontSize,
		marginLeft: inputPaddingHorizontal,
		marginRight: inputPaddingHorizontal,
		backgroundColor: inputBackgroundColor,
	},
	inputAppend: {
		backgroundColor: inputAppendPrependBackgroundColor,
		borderLeftWidth: inputBorderWidth,
		borderLeftColor: inputBorderColor,
		paddingHorizontal: inputPaddingHorizontal,
		minWidth: inputMinHeight,
	},
	inputPrepend: {
		backgroundColor: inputAppendPrependBackgroundColor,
		borderRightWidth: inputBorderWidth,
		borderRightColor: inputBorderColor,
		paddingHorizontal: inputPaddingHorizontal,
		minWidth: inputMinHeight,
	},
	inputContainer: {
		borderColor: inputBorderColor,
		borderRadius: inputBorderRadius,
		borderWidth: inputBorderWidth,
		minHeight: inputMinHeight,
		backgroundColor: inputBackgroundColor,
	},
	inputIcon: {
		size: inputIconSize,
	},
};
