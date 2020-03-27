import { StyleSheet, TextStyle, FlexStyle } from 'react-native';
import { constants, components } from './constants';

export const base = StyleSheet.create({
	text: {
		color: components.text.regular.color as TextStyle['color'],
		fontFamily: components.text.regular.fontFamily as TextStyle['fontFamily'],
		fontWeight: components.text.regular.fontWeight as TextStyle['fontWeight'],
		fontSize: components.text.regular.fontSize as TextStyle['fontSize'],
		lineHeight: components.text.regular.lineHeight as TextStyle['lineHeight'],
		textTransform: components.text.regular.uppercase ? 'uppercase' : 'none' as TextStyle['textTransform'],
	},
	fontWeightBold: {
		fontFamily: components.text.bold.fontFamily as TextStyle['fontFamily'],
		fontWeight: components.text.bold.fontWeight as TextStyle['fontWeight'],
	},
	fontItalic: {
		fontFamily: components.text.italic.fontFamily as TextStyle['fontFamily'],
		fontStyle: components.text.italic.fontStyle as TextStyle['fontStyle'],
	},
	fontBoldItalics: {
		fontFamily: components.text.boldItalic.fontFamily as TextStyle['fontFamily'],
		fontWeight: components.text.bold.fontWeight as TextStyle['fontWeight'],
		fontStyle: components.text.italic.fontStyle as TextStyle['fontStyle'],
	},
	heading: {
		fontFamily: components.text.h1.fontFamily as TextStyle['fontFamily'],
		fontWeight: components.text.bold.fontWeight as TextStyle['fontWeight'],
	},
	formLabel: {
		fontFamily: components.text.bold.fontFamily as TextStyle['fontFamily'],
		fontWeight: components.text.bold.fontWeight as TextStyle['fontWeight'],
		fontSize: components.text.regular.fontSize as TextStyle['fontSize'],
	},
	h1: {
		color: components.text.h1.color as TextStyle['color'],
		fontFamily: components.text.h1.fontFamily as TextStyle['fontFamily'],
		fontSize: components.text.h1.fontSize as TextStyle['fontSize'],
		fontWeight: components.text.h1.fontWeight as TextStyle['fontWeight'],
		lineHeight: components.text.h1.lineHeight as TextStyle['lineHeight'],
		textTransform: components.text.h1.uppercase ? 'uppercase' : 'none' as TextStyle['textTransform'],
	},
	h2: {
		color: components.text.h2.color as TextStyle['color'],
		fontFamily: components.text.h2.fontFamily as TextStyle['fontFamily'],
		fontSize: components.text.h2.fontSize as TextStyle['fontSize'],
		fontWeight: components.text.h2.fontWeight as TextStyle['fontWeight'],
		lineHeight: components.text.h2.lineHeight as TextStyle['lineHeight'],
		textTransform: components.text.h2.uppercase ? 'uppercase' : 'none' as TextStyle['textTransform'],
	},
	h3: {
		color: components.text.h3.color as TextStyle['color'],
		fontFamily: components.text.h3.fontFamily as TextStyle['fontFamily'],
		fontSize: components.text.h3.fontSize as TextStyle['fontSize'],
		fontWeight: components.text.h3.fontWeight as TextStyle['fontWeight'],
		lineHeight: components.text.h3.lineHeight as TextStyle['lineHeight'],
		textTransform: components.text.h3.uppercase ? 'uppercase' : 'none' as TextStyle['textTransform'],
	},
	h4: {
		color: components.text.h4.color as TextStyle['color'],
		fontFamily: components.text.h4.fontFamily as TextStyle['fontFamily'],
		fontSize: components.text.h4.fontSize as TextStyle['fontSize'],
		fontWeight: components.text.h4.fontWeight as TextStyle['fontWeight'],
		lineHeight: components.text.h4.lineHeight as TextStyle['lineHeight'],
		textTransform: components.text.h4.uppercase ? 'uppercase' : 'none' as TextStyle['textTransform'],
	},
	small: {
		color: components.text.small.color as TextStyle['color'],
		fontFamily: components.text.small.fontFamily as TextStyle['fontFamily'],
		fontSize: components.text.small.fontSize as TextStyle['fontSize'],
		fontWeight: components.text.small.fontWeight as TextStyle['fontWeight'],
		lineHeight: components.text.small.lineHeight as TextStyle['lineHeight'],
		textTransform: components.text.small.uppercase ? 'uppercase' : 'none' as TextStyle['textTransform'],
	},
	underline: {
		textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
	},
	lineThrough: {
		textDecorationLine: 'line-through' as TextStyle['textDecorationLine'],
	},
	underlineLineThrough: {
		textDecorationLine: 'underline line-through' as TextStyle['textDecorationLine'],
	},
	textLeft: {
		textAlign: 'left' as TextStyle['textAlign'],
	},
	textRight: {
		textAlign: 'right' as TextStyle['textAlign'],
	},
	textCenter: {
		textAlign: 'center' as TextStyle['textAlign'],
	},
	textJustify: {
		textAlign: 'justify' as TextStyle['textAlign'],
	},
	textAuto: {
		textAlign: 'auto' as TextStyle['textAlign'],
	},
	textUppercase: {
		textTransform: 'uppercase' as TextStyle['textTransform'],
	},
	textCapitalize: {
		textTransform: 'capitalize' as TextStyle['textTransform'],
	},
	textLowercase: {
		textTransform: 'lowercase' as TextStyle['textTransform'],
	},
	mt0: {
		marginTop: 0,
	},
	mt1: {
		marginTop: constants.dimensions.spacer * 0.5,
	},
	mt2: {
		marginTop: constants.dimensions.spacer * 1,
	},
	mt3: {
		marginTop: constants.dimensions.spacer * 2,
	},
	mt4: {
		marginTop: constants.dimensions.spacer * 3,
	},
	mt5: {
		marginTop: constants.dimensions.spacer * 4,
	},
	mr0: {
		marginRight: 0,
	},
	mr1: {
		marginRight: constants.dimensions.spacer * 0.5,
	},
	mr2: {
		marginRight: constants.dimensions.spacer * 1,
	},
	mr3: {
		marginRight: constants.dimensions.spacer * 2,
	},
	mr4: {
		marginRight: constants.dimensions.spacer * 3,
	},
	mr5: {
		marginRight: constants.dimensions.spacer * 4,
	},
	mb0: {
		marginBottom: 0,
	},
	mb1: {
		marginBottom: constants.dimensions.spacer * 0.5,
	},
	mb2: {
		marginBottom: constants.dimensions.spacer * 1,
	},
	mb3: {
		marginBottom: constants.dimensions.spacer * 2,
	},
	mb4: {
		marginBottom: constants.dimensions.spacer * 3,
	},
	mb5: {
		marginBottom: constants.dimensions.spacer * 4,
	},
	ml0: {
		marginLeft: 0,
	},
	ml1: {
		marginLeft: constants.dimensions.spacer * 0.5,
	},
	ml2: {
		marginLeft: constants.dimensions.spacer * 1,
	},
	ml3: {
		marginLeft: constants.dimensions.spacer * 2,
	},
	ml4: {
		marginLeft: constants.dimensions.spacer * 3,
	},
	ml5: {
		marginLeft: constants.dimensions.spacer * 4,
	},
	pt0: {
		paddingTop: 0,
	},
	pt1: {
		paddingTop: constants.dimensions.spacer * 0.5,
	},
	pt2: {
		paddingTop: constants.dimensions.spacer * 1,
	},
	pt3: {
		paddingTop: constants.dimensions.spacer * 2,
	},
	pt4: {
		paddingTop: constants.dimensions.spacer * 3,
	},
	pt5: {
		paddingTop: constants.dimensions.spacer * 4,
	},
	pr0: {
		paddingRight: 0,
	},
	pr1: {
		paddingRight: constants.dimensions.spacer * 0.5,
	},
	pr2: {
		paddingRight: constants.dimensions.spacer * 1,
	},
	pr3: {
		paddingRight: constants.dimensions.spacer * 2,
	},
	pr4: {
		paddingRight: constants.dimensions.spacer * 3,
	},
	pr5: {
		paddingRight: constants.dimensions.spacer * 4,
	},
	pb0: {
		paddingBottom: 0,
	},
	pb1: {
		paddingBottom: constants.dimensions.spacer * 0.5,
	},
	pb2: {
		paddingBottom: constants.dimensions.spacer * 1,
	},
	pb3: {
		paddingBottom: constants.dimensions.spacer * 2,
	},
	pb4: {
		paddingBottom: constants.dimensions.spacer * 3,
	},
	pb5: {
		paddingBottom: constants.dimensions.spacer * 4,
	},
	pl0: {
		paddingLeft: 0,
	},
	pl1: {
		paddingLeft: constants.dimensions.spacer * 0.5,
	},
	pl2: {
		paddingLeft: constants.dimensions.spacer * 1,
	},
	pl3: {
		paddingLeft: constants.dimensions.spacer * 2,
	},
	pl4: {
		paddingLeft: constants.dimensions.spacer * 3,
	},
	pl5: {
		paddingLeft: constants.dimensions.spacer * 4,
	},
	mx0: {
		marginLeft: 0,
		marginRight: 0,
	},
	mx1: {
		marginLeft: constants.dimensions.spacer * 0.5,
		marginRight: constants.dimensions.spacer * 0.5,
	},
	mx2: {
		marginLeft: constants.dimensions.spacer * 1,
		marginRight: constants.dimensions.spacer * 1,
	},
	mx3: {
		marginLeft: constants.dimensions.spacer * 2,
		marginRight: constants.dimensions.spacer * 2,
	},
	mx4: {
		marginLeft: constants.dimensions.spacer * 3,
		marginRight: constants.dimensions.spacer * 3,
	},
	mx5: {
		marginLeft: constants.dimensions.spacer * 4,
		marginRight: constants.dimensions.spacer * 4,
	},
	my0: {
		marginTop: 0,
		marginBottom: 0,
	},
	my1: {
		marginTop: constants.dimensions.spacer * 0.5,
		marginBottom: constants.dimensions.spacer * 0.5,
	},
	my2: {
		marginTop: constants.dimensions.spacer * 1,
		marginBottom: constants.dimensions.spacer * 1,
	},
	my3: {
		marginTop: constants.dimensions.spacer * 2,
		marginBottom: constants.dimensions.spacer * 2,
	},
	my4: {
		marginTop: constants.dimensions.spacer * 3,
		marginBottom: constants.dimensions.spacer * 3,
	},
	my5: {
		marginTop: constants.dimensions.spacer * 4,
		marginBottom: constants.dimensions.spacer * 4,
	},
	px0: {
		paddingLeft: 0,
		paddingRight: 0,
	},
	px1: {
		paddingLeft: constants.dimensions.spacer * 0.5,
		paddingRight: constants.dimensions.spacer * 0.5,
	},
	px2: {
		paddingLeft: constants.dimensions.spacer * 1,
		paddingRight: constants.dimensions.spacer * 1,
	},
	px3: {
		paddingLeft: constants.dimensions.spacer * 2,
		paddingRight: constants.dimensions.spacer * 2,
	},
	px4: {
		paddingLeft: constants.dimensions.spacer * 3,
		paddingRight: constants.dimensions.spacer * 3,
	},
	px5: {
		paddingLeft: constants.dimensions.spacer * 4,
		paddingRight: constants.dimensions.spacer * 4,
	},
	py0: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	py1: {
		paddingTop: constants.dimensions.spacer * 0.5,
		paddingBottom: constants.dimensions.spacer * 0.5,
	},
	py2: {
		paddingTop: constants.dimensions.spacer * 1,
		paddingBottom: constants.dimensions.spacer * 1,
	},
	py3: {
		paddingTop: constants.dimensions.spacer * 2,
		paddingBottom: constants.dimensions.spacer * 2,
	},
	py4: {
		paddingTop: constants.dimensions.spacer * 3,
		paddingBottom: constants.dimensions.spacer * 3,
	},
	py5: {
		paddingTop: constants.dimensions.spacer * 4,
		paddingBottom: constants.dimensions.spacer * 4,
	},
	m0: {
		marginTop: 0,
		marginBottom: 0,
		marginLeft: 0,
		marginRight: 0,
	},
	m1: {
		marginTop: constants.dimensions.spacer * 0.5,
		marginBottom: constants.dimensions.spacer * 0.5,
		marginLeft: constants.dimensions.spacer * 0.5,
		marginRight: constants.dimensions.spacer * 0.5,
	},
	m2: {
		marginTop: constants.dimensions.spacer * 1,
		marginBottom: constants.dimensions.spacer * 1,
		marginLeft: constants.dimensions.spacer * 1,
		marginRight: constants.dimensions.spacer * 1,
	},
	m3: {
		marginTop: constants.dimensions.spacer * 2,
		marginBottom: constants.dimensions.spacer * 2,
		marginLeft: constants.dimensions.spacer * 2,
		marginRight: constants.dimensions.spacer * 2,
	},
	m4: {
		marginTop: constants.dimensions.spacer * 3,
		marginBottom: constants.dimensions.spacer * 3,
		marginLeft: constants.dimensions.spacer * 3,
		marginRight: constants.dimensions.spacer * 3,
	},
	m5: {
		marginTop: constants.dimensions.spacer * 4,
		marginBottom: constants.dimensions.spacer * 4,
		marginLeft: constants.dimensions.spacer * 4,
		marginRight: constants.dimensions.spacer * 4,
	},
	p0: {
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		paddingRight: 0,
	},
	p1: {
		paddingTop: constants.dimensions.spacer * 0.5,
		paddingBottom: constants.dimensions.spacer * 0.5,
		paddingLeft: constants.dimensions.spacer * 0.5,
		paddingRight: constants.dimensions.spacer * 0.5,
	},
	p2: {
		paddingTop: constants.dimensions.spacer * 1,
		paddingBottom: constants.dimensions.spacer * 1,
		paddingLeft: constants.dimensions.spacer * 1,
		paddingRight: constants.dimensions.spacer * 1,
	},
	p3: {
		paddingTop: constants.dimensions.spacer * 2,
		paddingBottom: constants.dimensions.spacer * 2,
		paddingLeft: constants.dimensions.spacer * 2,
		paddingRight: constants.dimensions.spacer * 2,
	},
	p4: {
		paddingTop: constants.dimensions.spacer * 3,
		paddingBottom: constants.dimensions.spacer * 3,
		paddingLeft: constants.dimensions.spacer * 3,
		paddingRight: constants.dimensions.spacer * 3,
	},
	p5: {
		paddingTop: constants.dimensions.spacer * 4,
		paddingBottom: constants.dimensions.spacer * 4,
		paddingLeft: constants.dimensions.spacer * 4,
		paddingRight: constants.dimensions.spacer * 4,
	},
	mnx1: {
		marginLeft: -constants.dimensions.spacer * 0.5,
		marginRight: -constants.dimensions.spacer * 0.5,
	},
	mnx2: {
		marginLeft: -constants.dimensions.spacer * 1,
		marginRight: -constants.dimensions.spacer * 1,
	},
	mnx3: {
		marginLeft: -constants.dimensions.spacer * 2,
		marginRight: -constants.dimensions.spacer * 2,
	},
	mnx4: {
		marginLeft: -constants.dimensions.spacer * 3,
		marginRight: -constants.dimensions.spacer * 3,
	},
	mnx5: {
		marginLeft: -constants.dimensions.spacer * 4,
		marginRight: -constants.dimensions.spacer * 4,
	},
	mny1: {
		marginTop: -constants.dimensions.spacer * 0.5,
		marginBottom: -constants.dimensions.spacer * 0.5,
	},
	mny2: {
		marginTop: -constants.dimensions.spacer * 1,
		marginBottom: -constants.dimensions.spacer * 1,
	},
	mny3: {
		marginTop: -constants.dimensions.spacer * 2,
		marginBottom: -constants.dimensions.spacer * 2,
	},
	mny4: {
		marginTop: -constants.dimensions.spacer * 3,
		marginBottom: -constants.dimensions.spacer * 3,
	},
	mny5: {
		marginTop: -constants.dimensions.spacer * 4,
		marginBottom: -constants.dimensions.spacer * 4,
	},
	pnx1: {
		paddingLeft: -constants.dimensions.spacer * 0.5,
		paddingRight: -constants.dimensions.spacer * 0.5,
	},
	pnx2: {
		paddingLeft: -constants.dimensions.spacer * 1,
		paddingRight: -constants.dimensions.spacer * 1,
	},
	pnx3: {
		paddingLeft: -constants.dimensions.spacer * 2,
		paddingRight: -constants.dimensions.spacer * 2,
	},
	pnx4: {
		paddingLeft: -constants.dimensions.spacer * 3,
		paddingRight: -constants.dimensions.spacer * 3,
	},
	pnx5: {
		paddingLeft: -constants.dimensions.spacer * 4,
		paddingRight: -constants.dimensions.spacer * 4,
	},
	pny1: {
		paddingTop: -constants.dimensions.spacer * 0.5,
		paddingBottom: -constants.dimensions.spacer * 0.5,
	},
	pny2: {
		paddingTop: -constants.dimensions.spacer * 1,
		paddingBottom: -constants.dimensions.spacer * 1,
	},
	pny3: {
		paddingTop: -constants.dimensions.spacer * 2,
		paddingBottom: -constants.dimensions.spacer * 2,
	},
	pny4: {
		paddingTop: -constants.dimensions.spacer * 3,
		paddingBottom: -constants.dimensions.spacer * 3,
	},
	pny5: {
		paddingTop: -constants.dimensions.spacer * 4,
		paddingBottom: -constants.dimensions.spacer * 4,
	},
	mn1: {
		marginTop: -constants.dimensions.spacer * 0.5,
		marginBottom: -constants.dimensions.spacer * 0.5,
		marginLeft: -constants.dimensions.spacer * 0.5,
		marginRight: -constants.dimensions.spacer * 0.5,
	},
	mn2: {
		marginTop: -constants.dimensions.spacer * 1,
		marginBottom: -constants.dimensions.spacer * 1,
		marginLeft: -constants.dimensions.spacer * 1,
		marginRight: -constants.dimensions.spacer * 1,
	},
	mn3: {
		marginTop: -constants.dimensions.spacer * 2,
		marginBottom: -constants.dimensions.spacer * 2,
		marginLeft: -constants.dimensions.spacer * 2,
		marginRight: -constants.dimensions.spacer * 2,
	},
	mn4: {
		marginTop: -constants.dimensions.spacer * 3,
		marginBottom: -constants.dimensions.spacer * 3,
		marginLeft: -constants.dimensions.spacer * 3,
		marginRight: -constants.dimensions.spacer * 3,
	},
	mn5: {
		marginTop: -constants.dimensions.spacer * 4,
		marginBottom: -constants.dimensions.spacer * 4,
		marginLeft: -constants.dimensions.spacer * 4,
		marginRight: -constants.dimensions.spacer * 4,
	},
	pn0: {
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		paddingRight: 0,
	},
	pn1: {
		paddingTop: constants.dimensions.spacer * 0.5,
		paddingBottom: constants.dimensions.spacer * 0.5,
		paddingLeft: constants.dimensions.spacer * 0.5,
		paddingRight: constants.dimensions.spacer * 0.5,
	},
	pn2: {
		paddingTop: constants.dimensions.spacer * 1,
		paddingBottom: constants.dimensions.spacer * 1,
		paddingLeft: constants.dimensions.spacer * 1,
		paddingRight: constants.dimensions.spacer * 1,
	},
	pn3: {
		paddingTop: constants.dimensions.spacer * 2,
		paddingBottom: constants.dimensions.spacer * 2,
		paddingLeft: constants.dimensions.spacer * 2,
		paddingRight: constants.dimensions.spacer * 2,
	},
	pn4: {
		paddingTop: constants.dimensions.spacer * 3,
		paddingBottom: constants.dimensions.spacer * 3,
		paddingLeft: constants.dimensions.spacer * 3,
		paddingRight: constants.dimensions.spacer * 3,
	},
	pn5: {
		paddingTop: constants.dimensions.spacer * 4,
		paddingBottom: constants.dimensions.spacer * 4,
		paddingLeft: constants.dimensions.spacer * 4,
		paddingRight: constants.dimensions.spacer * 4,
	},
	mAuto: {
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	mxAuto: {
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	mlAuto: {
		marginLeft: 'auto',
	},
	mrAuto: {
		marginRight: 'auto',
	},
	mtAuto: {
		marginTop: 'auto',
	},
	mbAuto: {
		marginBottom: 'auto',
	},
	myAuto: {
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	w100: {
		width: '100%',
	},
	disabled: {
		opacity: constants.touchableOpacity.disabledOpacity,
	},
	textMuted: {
		color: constants.colours.brand.gray500 as TextStyle['color'],
	},
	textPrimary: {
		color: constants.colours.brand.primary as TextStyle['color'],
	},
	bgPrimary: {
		backgroundColor: constants.colours.brand.primary,
	},
	borderPrimary: {
		borderColor: constants.colours.brand.primary,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftPrimary: {
		borderLeftColor: constants.colours.brand.primary,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightPrimary: {
		borderRightColor: constants.colours.brand.primary,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderBottomPrimary: {
		borderBottomColor: constants.colours.brand.primary,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	borderTopPrimary: {
		borderTopColor: constants.colours.brand.primary,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	textSecondary: {
		color: constants.colours.brand.secondary as TextStyle['color'],
	},
	bgSecondary: {
		backgroundColor: constants.colours.brand.secondary,
	},
	borderSecondary: {
		borderColor: constants.colours.brand.secondary,
		borderWidth: constants.dimensions.borderWidth,
	},
	textTertiary: {
		color: constants.colours.brand.tertiary as TextStyle['color'],
	},
	bgTertiary: {
		backgroundColor: constants.colours.brand.tertiary,
	},
	borderTertiary: {
		borderColor: constants.colours.brand.tertiary,
		borderWidth: constants.dimensions.borderWidth,
	},
	textPrimaryLight: {
		color: constants.colours.brand.primaryLight as TextStyle['color'],
	},
	bgPrimaryLight: {
		backgroundColor: constants.colours.brand.primaryLight,
	},
	borderPrimaryLight: {
		borderColor: constants.colours.brand.primaryLight,
		borderWidth: constants.dimensions.borderWidth,
	},
	textPrimaryDark: {
		color: constants.colours.brand.primaryDark as TextStyle['color'],
	},
	bgPrimaryDark: {
		backgroundColor: constants.colours.brand.primaryDark,
	},
	borderPrimaryDark: {
		borderColor: constants.colours.brand.primaryDark,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftPrimaryDark: {
		borderLeftColor: constants.colours.brand.primaryDark,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightPrimaryDark: {
		borderRightColor: constants.colours.brand.primaryDark,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopPrimaryDark: {
		borderTopColor: constants.colours.brand.primaryDark,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomPrimaryDark: {
		borderBottomColor: constants.colours.brand.primaryDark,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textDark: {
		color: constants.colours.brand.dark as TextStyle['color'],
	},
	bgDark: {
		backgroundColor: constants.colours.brand.dark,
	},
	borderDark: {
		borderColor: constants.colours.brand.dark,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftDark: {
		borderLeftColor: constants.colours.brand.dark,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightDark: {
		borderRightColor: constants.colours.brand.dark,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopDark: {
		borderTopColor: constants.colours.brand.dark,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomDark: {
		borderBottomColor: constants.colours.brand.dark,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textLight: {
		color: constants.colours.brand.light as TextStyle['color'],
	},
	bgLight: {
		backgroundColor: constants.colours.brand.light,
	},
	borderLight: {
		borderColor: constants.colours.brand.light,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftLight: {
		borderLeftColor: constants.colours.brand.light,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightLight: {
		borderRightColor: constants.colours.brand.light,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopLight: {
		borderTopColor: constants.colours.brand.light,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomLight: {
		borderBottomColor: constants.colours.brand.light,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray100: {
		color: constants.colours.brand.gray100 as TextStyle['color'],
	},
	bgGray100: {
		backgroundColor: constants.colours.brand.gray100,
	},
	borderGray100: {
		borderColor: constants.colours.brand.gray100,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray100: {
		borderLeftColor: constants.colours.brand.gray100,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray100: {
		borderRightColor: constants.colours.brand.gray100,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray100: {
		borderTopColor: constants.colours.brand.gray100,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray100: {
		borderBottomColor: constants.colours.brand.gray100,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray200: {
		color: constants.colours.brand.gray200 as TextStyle['color'],
	},
	bgGray200: {
		backgroundColor: constants.colours.brand.gray200,
	},
	borderGray200: {
		borderColor: constants.colours.brand.gray200,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray200: {
		borderLeftColor: constants.colours.brand.gray200,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray200: {
		borderRightColor: constants.colours.brand.gray200,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray200: {
		borderTopColor: constants.colours.brand.gray200,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray200: {
		borderBottomColor: constants.colours.brand.gray200,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray300: {
		color: constants.colours.brand.gray300 as TextStyle['color'],
	},
	bgGray300: {
		backgroundColor: constants.colours.brand.gray300,
	},
	borderGray300: {
		borderColor: constants.colours.brand.gray300,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray300: {
		borderLeftColor: constants.colours.brand.gray300,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray300: {
		borderRightColor: constants.colours.brand.gray300,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray300: {
		borderTopColor: constants.colours.brand.gray300,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray300: {
		borderBottomColor: constants.colours.brand.gray300,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray400: {
		color: constants.colours.brand.gray400 as TextStyle['color'],
	},
	bgGray400: {
		backgroundColor: constants.colours.brand.gray400,
	},
	borderGray400: {
		borderColor: constants.colours.brand.gray400,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray400: {
		borderLeftColor: constants.colours.brand.gray400,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray400: {
		borderRightColor: constants.colours.brand.gray400,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray400: {
		borderTopColor: constants.colours.brand.gray400,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray400: {
		borderBottomColor: constants.colours.brand.gray400,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray500: {
		color: constants.colours.brand.gray500 as TextStyle['color'],
	},
	bgGray500: {
		backgroundColor: constants.colours.brand.gray500,
	},
	borderGray500: {
		borderColor: constants.colours.brand.gray500,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray500: {
		borderLeftColor: constants.colours.brand.gray500,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray500: {
		borderRightColor: constants.colours.brand.gray500,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray500: {
		borderTopColor: constants.colours.brand.gray500,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray500: {
		borderBottomColor: constants.colours.brand.gray500,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray600: {
		color: constants.colours.brand.gray600 as TextStyle['color'],
	},
	bgGray600: {
		backgroundColor: constants.colours.brand.gray600,
	},
	borderGray600: {
		borderColor: constants.colours.brand.gray600,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray600: {
		borderLeftColor: constants.colours.brand.gray600,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray600: {
		borderRightColor: constants.colours.brand.gray600,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray600: {
		borderTopColor: constants.colours.brand.gray600,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray600: {
		borderBottomColor: constants.colours.brand.gray600,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray700: {
		color: constants.colours.brand.gray700 as TextStyle['color'],
	},
	bgGray700: {
		backgroundColor: constants.colours.brand.gray700,
	},
	borderGray700: {
		borderColor: constants.colours.brand.gray700,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray700: {
		borderLeftColor: constants.colours.brand.gray700,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray700: {
		borderRightColor: constants.colours.brand.gray700,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray700: {
		borderTopColor: constants.colours.brand.gray700,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray700: {
		borderBottomColor: constants.colours.brand.gray700,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray800: {
		color: constants.colours.brand.gray800 as TextStyle['color'],
	},
	bgGray800: {
		backgroundColor: constants.colours.brand.gray800,
	},
	borderGray800: {
		borderColor: constants.colours.brand.gray800,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray800: {
		borderLeftColor: constants.colours.brand.gray800,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray800: {
		borderRightColor: constants.colours.brand.gray800,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray800: {
		borderTopColor: constants.colours.brand.gray800,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray800: {
		borderBottomColor: constants.colours.brand.gray800,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textGray900: {
		color: constants.colours.brand.gray900 as TextStyle['color'],
	},
	bgGray900: {
		backgroundColor: constants.colours.brand.gray900,
	},
	borderGray900: {
		borderColor: constants.colours.brand.gray900,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftGray900: {
		borderLeftColor: constants.colours.brand.gray900,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightGray900: {
		borderRightColor: constants.colours.brand.gray900,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopGray900: {
		borderTopColor: constants.colours.brand.gray900,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomGray900: {
		borderBottomColor: constants.colours.brand.gray900,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textSuccess: {
		color: constants.colours.brand.success as TextStyle['color'],
	},
	bgSuccess: {
		backgroundColor: constants.colours.brand.success,
	},
	borderSuccess: {
		borderColor: constants.colours.brand.success,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftSuccess: {
		borderLeftColor: constants.colours.brand.success,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightSuccess: {
		borderRightColor: constants.colours.brand.success,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopSuccess: {
		borderTopColor: constants.colours.brand.success,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomSuccess: {
		borderBottomColor: constants.colours.brand.success,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textSuccessLight: {
		color: constants.colours.brand.successLight as TextStyle['color'],
	},
	bgSuccessLight: {
		backgroundColor: constants.colours.brand.successLight,
	},
	borderSuccessLight: {
		borderColor: constants.colours.brand.successLight,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftSuccessLight: {
		borderLeftColor: constants.colours.brand.successLight,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightSuccessLight: {
		borderRightColor: constants.colours.brand.successLight,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopSuccessLight: {
		borderTopColor: constants.colours.brand.successLight,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomSuccessLight: {
		borderBottomColor: constants.colours.brand.successLight,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textWarning: {
		color: constants.colours.brand.warning as TextStyle['color'],
	},
	bgWarning: {
		backgroundColor: constants.colours.brand.warning,
	},
	borderWarning: {
		borderColor: constants.colours.brand.warning,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftWarning: {
		borderLeftColor: constants.colours.brand.warning,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightWarning: {
		borderRightColor: constants.colours.brand.warning,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopWarning: {
		borderTopColor: constants.colours.brand.warning,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomWarning: {
		borderBottomColor: constants.colours.brand.warning,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textDanger: {
		color: constants.colours.brand.danger as TextStyle['color'],
	},
	bgDanger: {
		backgroundColor: constants.colours.brand.danger,
	},
	borderDanger: {
		borderColor: constants.colours.brand.danger,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftDanger: {
		borderLeftColor: constants.colours.brand.danger,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightDanger: {
		borderRightColor: constants.colours.brand.danger,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopDanger: {
		borderTopColor: constants.colours.brand.danger,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomDanger: {
		borderBottomColor: constants.colours.brand.danger,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textDangerLight: {
		color: constants.colours.brand.dangerLight as TextStyle['color'],
	},
	bgDangerLight: {
		backgroundColor: constants.colours.brand.dangerLight,
	},
	borderDangerLight: {
		borderColor: constants.colours.brand.dangerLight,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftDangerLight: {
		borderLeftColor: constants.colours.brand.dangerLight,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightDangerLight: {
		borderRightColor: constants.colours.brand.dangerLight,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopDangerLight: {
		borderTopColor: constants.colours.brand.dangerLight,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomDangerLight: {
		borderBottomColor: constants.colours.brand.dangerLight,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textInfo: {
		color: constants.colours.brand.info as TextStyle['color'],
	},
	bgInfo: {
		backgroundColor: constants.colours.brand.info,
	},
	borderInfo: {
		borderColor: constants.colours.brand.info,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftInfo: {
		borderLeftColor: constants.colours.brand.info,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightInfo: {
		borderRightColor: constants.colours.brand.info,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderToprInfo: {
		borderTopColor: constants.colours.brand.info,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomrInfo: {
		borderBottomColor: constants.colours.brand.info,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textWhite: {
		color: constants.colours.common.white as TextStyle['color'],
	},
	bgWhite: {
		backgroundColor: constants.colours.common.white,
	},
	borderWhite: {
		borderColor: constants.colours.common.white,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftWhite: {
		borderLeftColor: constants.colours.common.white,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightWhite: {
		borderRightColor: constants.colours.common.white,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopWhite: {
		borderTopColor: constants.colours.common.white,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomWhite: {
		borderBottomColor: constants.colours.common.white,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	textBlack: {
		color: constants.colours.common.black as TextStyle['color'],
	},
	bgBlack: {
		backgroundColor: constants.colours.common.black,
	},
	borderBlack: {
		borderColor: constants.colours.common.black,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftBlack: {
		borderLeftColor: constants.colours.common.black,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightBlack: {
		borderRightColor: constants.colours.common.black,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopBlack: {
		borderTopColor: constants.colours.common.black,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomBlack: {
		borderBottomColor: constants.colours.common.black,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	bg: {
		backgroundColor: constants.colours.backgroundColor,
	},
	borderTransparent: {
		borderColor: 'transparent',
		borderWidth: constants.dimensions.borderWidth,
	},
	borderLeftTransparent: {
		borderLeftColor: 'transparent',
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderRightTransparent: {
		borderRightColor: 'transparent',
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderTopTransparent: {
		borderTopColor: 'transparent',
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderBottomTransparent: {
		borderBottomColor: 'transparent',
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	border: {
		borderColor: constants.colours.body.border,
		borderWidth: constants.dimensions.borderWidth,
	},
	borderTop: {
		borderTopColor: constants.colours.body.border,
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderRight: {
		borderRightColor: constants.colours.body.border,
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderBottom: {
		borderBottomColor: constants.colours.body.border,
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	borderLeft: {
		borderLeftColor: constants.colours.body.border,
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderWidth: {
		borderWidth: constants.dimensions.borderWidth,
	},
	borderWidth0: {
		borderWidth: 0,
	},
	borderWidth1: {
		borderWidth: 1,
	},
	borderWidth2: {
		borderWidth: 2,
	},
	borderWidth3: {
		borderWidth: 3,
	},
	borderWidth4: {
		borderWidth: 4,
	},
	borderLeftWidth: {
		borderLeftWidth: constants.dimensions.borderWidth,
	},
	borderLeftWidth1: {
		borderLeftWidth: 1,
	},
	borderLeftWidth2: {
		borderLeftWidth: 2,
	},
	borderLeftWidth3: {
		borderLeftWidth: 3,
	},
	borderLeftWidth4: {
		borderLeftWidth: 4,
	},
	borderLeftWidth5: {
		borderLeftWidth: 5,
	},
	borderRightWidth: {
		borderRightWidth: constants.dimensions.borderWidth,
	},
	borderRightWidth1: {
		borderRightWidth: 1,
	},
	borderRightWidth2: {
		borderRightWidth: 2,
	},
	borderRightWidth3: {
		borderRightWidth: 3,
	},
	borderRightWidth4: {
		borderRightWidth: 4,
	},
	borderRightWidth5: {
		borderRightWidth: 5,
	},
	borderTopWidth: {
		borderTopWidth: constants.dimensions.borderWidth,
	},
	borderTopWidth1: {
		borderTopWidth: 1,
	},
	borderTopWidth2: {
		borderTopWidth: 2,
	},
	borderTopWidth3: {
		borderTopWidth: 3,
	},
	borderTopWidth4: {
		borderTopWidth: 4,
	},
	borderTopWidth5: {
		borderTopWidth: 5,
	},
	borderBottomWidth: {
		borderBottomWidth: constants.dimensions.borderWidth,
	},
	borderBottomWidth1: {
		borderBottomWidth: 1,
	},
	borderBottomWidth2: {
		borderBottomWidth: 2,
	},
	borderBottomWidth3: {
		borderBottomWidth: 3,
	},
	borderBottomWidth4: {
		borderBottomWidth: 4,
	},
	borderBottomWidth5: {
		borderBottomWidth: 5,
	},
	round: {
		borderRadius: 999,
	},
	borderRadius: {
		borderRadius: constants.dimensions.borderRadius,
	},
	borderTopLeftRadius: {
		borderTopLeftRadius: constants.dimensions.borderRadius,
	},
	borderTopRightRadius: {
		borderTopRightRadius: constants.dimensions.borderRadius,
	},
	borderBottomLeftRadius: {
		borderBottomLeftRadius: constants.dimensions.borderRadius,
	},
	borderBottomRightRadius: {
		borderBottomRightRadius: constants.dimensions.borderRadius,
	},
	borderBottomStartRadius: {
		borderBottomStartRadius: constants.dimensions.borderRadius,
	},
	borderBottomEndRadius: {
		borderBottomEndRadius: constants.dimensions.borderRadius,
	},
	borderTopStartRadius: {
		borderTopStartRadius: constants.dimensions.borderRadius,
	},
	borderTopEndRadius: {
		borderTopEndRadius: constants.dimensions.borderRadius,
	},
	borderRadius0: {
		borderRadius: 0,
	},
	borderTopLeftRadius0: {
		borderTopLeftRadius: 0,
	},
	borderTopRightRadius0: {
		borderTopRightRadius: 0,
	},
	borderBottomLeftRadius0: {
		borderBottomLeftRadius: 0,
	},
	borderBottomRightRadius0: {
		borderBottomRightRadius: 0,
	},
	borderBottomStartRadius0: {
		borderBottomStartRadius: 0,
	},
	borderBottomEndRadius0: {
		borderBottomEndRadius: 0,
	},
	borderTopStartRadius0: {
		borderTopStartRadius: 0,
	},
	borderTopEndRadius0: {
		borderTopEndRadius: 0,
	},
	borderTopLeftRadius1: {
		borderTopLeftRadius: 1,
	},
	borderTopRightRadius1: {
		borderTopRightRadius: 1,
	},
	borderBottomLeftRadius1: {
		borderBottomLeftRadius: 1,
	},
	borderBottomRightRadius1: {
		borderBottomRightRadius: 1,
	},
	borderBottomStartRadius1: {
		borderBottomStartRadius: 1,
	},
	borderBottomEndRadius1: {
		borderBottomEndRadius: 1,
	},
	borderTopStartRadius1: {
		borderTopStartRadius: 1,
	},
	borderTopEndRadius1: {
		borderTopEndRadius: 1,
	},
	borderRadius2: {
		borderRadius: 2,
	},
	borderTopLeftRadius2: {
		borderTopLeftRadius: 2,
	},
	borderTopRightRadius2: {
		borderTopRightRadius: 2,
	},
	borderBottomLeftRadius2: {
		borderBottomLeftRadius: 2,
	},
	borderBottomRightRadius2: {
		borderBottomRightRadius: 2,
	},
	borderBottomStartRadius2: {
		borderBottomStartRadius: 2,
	},
	borderBottomEndRadius2: {
		borderBottomEndRadius: 2,
	},
	borderTopStartRadius2: {
		borderTopStartRadius: 2,
	},
	borderTopEndRadius2: {
		borderTopEndRadius: 2,
	},
	borderRadius3: {
		borderRadius: 3,
	},
	borderTopLeftRadius3: {
		borderTopLeftRadius: 3,
	},
	borderTopRightRadius3: {
		borderTopRightRadius: 3,
	},
	borderBottomLeftRadius3: {
		borderBottomLeftRadius: 3,
	},
	borderBottomRightRadius3: {
		borderBottomRightRadius: 3,
	},
	borderBottomStartRadius3: {
		borderBottomStartRadius: 3,
	},
	borderBottomEndRadius3: {
		borderBottomEndRadius: 3,
	},
	borderTopStartRadius3: {
		borderTopStartRadius: 3,
	},
	borderTopEndRadius3: {
		borderTopEndRadius: 3,
	},
	borderRadius4: {
		borderRadius: 4,
	},
	borderTopLeftRadius4: {
		borderTopLeftRadius: 4,
	},
	borderTopRightRadius4: {
		borderTopRightRadius: 4,
	},
	borderBottomLeftRadius4: {
		borderBottomLeftRadius: 4,
	},
	borderBottomRightRadius4: {
		borderBottomRightRadius: 4,
	},
	borderBottomStartRadius4: {
		borderBottomStartRadius: 4,
	},
	borderBottomEndRadius4: {
		borderBottomEndRadius: 4,
	},
	borderTopStartRadius4: {
		borderTopStartRadius: 4,
	},
	borderTopEndRadius4: {
		borderTopEndRadius: 4,
	},
	borderRadius5: {
		borderRadius: 5,
	},
	borderTopLeftRadius5: {
		borderTopLeftRadius: 5,
	},
	borderTopRightRadius5: {
		borderTopRightRadius: 5,
	},
	borderBottomLeftRadius5: {
		borderBottomLeftRadius: 5,
	},
	borderBottomRightRadius5: {
		borderBottomRightRadius: 5,
	},
	borderBottomStartRadius5: {
		borderBottomStartRadius: 5,
	},
	borderBottomEndRadius5: {
		borderBottomEndRadius: 5,
	},
	borderTopStartRadius5: {
		borderTopStartRadius: 5,
	},
	borderTopEndRadius5: {
		borderTopEndRadius: 5,
	},
	displayNone: {
		display: 'none',
	},
	flex: {
		flex: 1 as FlexStyle['flex'],
	},
	flexGrow: {
		flexGrow: 1 as FlexStyle['flex'],
	},
	flexShrink: {
		flexShrink: 1 as FlexStyle['flex'],
	},
	flexRow: {
		flexDirection: 'row' as FlexStyle['flexDirection'],
	},
	flexRowReverse: {
		flexDirection: 'row-reverse' as FlexStyle['flexDirection'],
	},
	flexColumn: {
		flexDirection: 'column' as FlexStyle['flexDirection'],
	},
	flexColumnReverse: {
		flexDirection: 'column-reverse' as FlexStyle['flexDirection'],
	},
	flexNoWrap: {
		flexWrap: 'nowrap' as FlexStyle['flexWrap'],
	},
	flexWrap: {
		flexWrap: 'wrap' as FlexStyle['flexWrap'],
	},
	flexWrapReverse: {
		flexWrap: 'wrap-reverse' as FlexStyle['flexWrap'],
	},
	justifyContentStart: {
		justifyContent: 'flex-start' as FlexStyle['justifyContent'],
	},
	justifyContentEnd: {
		justifyContent: 'flex-end' as FlexStyle['justifyContent'],
	},
	justifyContentCenter: {
		justifyContent: 'center' as FlexStyle['justifyContent'],
	},
	justifyContentBetween: {
		justifyContent: 'space-between' as FlexStyle['justifyContent'],
	},
	justifyContentAround: {
		justifyContent: 'space-around' as FlexStyle['justifyContent'],
	},
	alignItemsStart: {
		alignItems: 'flex-start' as FlexStyle['alignItems'],
	},
	alignItemsEnd: {
		alignItems: 'flex-end' as FlexStyle['alignItems'],
	},
	alignItemsCenter: {
		alignItems: 'center' as FlexStyle['alignItems'],
	},
	alignItemsBaseline: {
		alignItems: 'baseline' as FlexStyle['alignItems'],
	},
	alignItemsStretch: {
		alignItems: 'stretch' as FlexStyle['alignItems'],
	},
	alignSelfStart: {
		alignSelf: 'flex-start' as FlexStyle['alignSelf'],
	},
	alignSelfEnd: {
		alignSelf: 'flex-end' as FlexStyle['alignSelf'],
	},
	alignSelfCenter: {
		alignSelf: 'center' as FlexStyle['alignSelf'],
	},
	alignSelfBaseline: {
		alignSelf: 'baseline' as FlexStyle['alignSelf'],
	},
	alignSelfStretch: {
		alignSelf: 'stretch' as FlexStyle['alignSelf'],
	},
	positionRelative: {
		position: 'relative' as FlexStyle['position'],
	},
	positionAbsolute: {
		position: 'absolute' as FlexStyle['position'],
	},
	top0: {
		top: 0,
	},
	top1: {
		top: constants.dimensions.spacer * 0.5,
	},
	top2: {
		top: constants.dimensions.spacer * 1,
	},
	top3: {
		top: constants.dimensions.spacer * 2,
	},
	top4: {
		top: constants.dimensions.spacer * 3,
	},
	bottom0: {
		bottom: 0,
	},
	bottom1: {
		bottom: constants.dimensions.spacer * 0.5,
	},
	bottom2: {
		bottom: constants.dimensions.spacer * 1,
	},
	bottom3: {
		bottom: constants.dimensions.spacer * 2,
	},
	bottom4: {
		bottom: constants.dimensions.spacer * 3,
	},
	left0: {
		left: 0,
	},
	left1: {
		left: constants.dimensions.spacer * 0.5,
	},
	left2: {
		left: constants.dimensions.spacer * 1,
	},
	left3: {
		left: constants.dimensions.spacer * 2,
	},
	left4: {
		left: constants.dimensions.spacer * 3,
	},
	right0: {
		right: 0,
	},
	right1: {
		right: constants.dimensions.spacer * 0.5,
	},
	right2: {
		right: constants.dimensions.spacer * 1,
	},
	right3: {
		right: constants.dimensions.spacer * 2,
	},
	right4: {
		right: constants.dimensions.spacer * 3,
	},
	overflowHidden: {
		overflow: 'hidden',
	},
	overflowScroll: {
		overflow: 'scroll',
	},
	overflowVisible: {
		overflow: 'visible',
	},
	shadow: {
		borderWidth: 0,
		shadowColor: constants.colours.body.shadow,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.20,
		shadowRadius: 12,
		elevation: 30,
	},
	elevation: {
		elevation: 30,
	},
});
