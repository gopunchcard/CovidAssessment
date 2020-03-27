import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableHighlightProps, TextStyle, StyleProp, View } from 'react-native';
import { Text } from './Text';
import { components, base } from 'utils';

const { button } = components;

interface IProps extends TouchableHighlightProps {
	title?: string;
	icon?: JSX.Element;
	titleStyle?: StyleProp<TextStyle>;
	buttonType?: 'primary' | 'primaryOutline' | 'primaryGhost' | 'secondary' | 'secondaryOutline' | 'secondaryGhost' | 'danger' | 'warning' | 'success';
	children?: any;
}
export const Button: React.FC<IProps> = ( props: IProps ): JSX.Element => {
	const {
		icon,
		style,
		disabled,
		children,
		title,
		onPress,
		titleStyle,
		buttonType,
		...otherProps
	} = props;

	const buttonStyles = StyleSheet.create({
		button: {
			minHeight: button.height,
			paddingLeft: button.paddingHorizontal,
			paddingRight: button.paddingHorizontal,
			paddingTop: button.paddingVertical,
			paddingBottom: button.paddingVertical,
			borderRadius: button.borderRadius,
			borderWidth: button.borderWidth,
			backgroundColor: button[buttonType || 'primaryOutline'].backgroundColor,
			borderColor: button[buttonType || 'primaryOutline'].borderColor,
			...base.justifyContentCenter,
			...base.alignItemsCenter,
			...base.mb3,
		},
		title: {
			fontFamily: button.fontFamily as TextStyle['fontFamily'],
			fontWeight: button.fontWeight as TextStyle['fontWeight'],
			fontSize: button.fontSize as TextStyle['fontSize'],
			color: button[buttonType || 'primaryOutline'].color as TextStyle['color'],
			lineHeight: button.lineHeight as TextStyle['lineHeight'],
		},
	});

	return (
		<TouchableHighlight
			disabled={disabled}
			underlayColor={button[buttonType || 'primaryOutline'].underlayColor}
			style={[buttonStyles.button, disabled && base.disabled, style]}
			onPress={onPress}
			{...otherProps}
		>
			<View style={[base.flexRow, base.alignItemsCenter]}>
				{icon}
				{title && (
					<Text style={[buttonStyles.title, titleStyle]} uppercase={false}>
						{title}
					</Text>
				)}
				{children}
			</View>
		</TouchableHighlight>
	);
};
