import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import RNPickerSelect, { PickerProps } from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { base, components, constants } from 'utils';

const { input } = components;

interface IProps extends PickerProps {
}

export const Select: React.FC<IProps> = ( props: IProps ): JSX.Element => {
	const { style, ...otherProps } = props;
	const { placeholder, iconContainer, inputIOS, inputAndroid } = styles;

	// RNPickerSelect requires the styles to have viewContainer specifically named, so
	// we need to add additional styles depending on the field's state to the same
	// object.
	let viewContainer = styles.viewContainer;
	if (props.disabled) {
		viewContainer = { ...viewContainer, ...base.bgGray200};
	}
	// TODO: Error validation styles
	// else if (props.errorText) {
	// 	viewContainer = { ...viewContainer, ...base.borderDanger };
	// }

	return (
		<RNPickerSelect
			style={{
				viewContainer,
				inputAndroid,
				inputIOS,
				iconContainer,
				placeholder,
				...style,
			}}
			placeholder={{
				label: 'Select an Option',
				value: null,
			}}
			Icon={() => {
				return <Icon name={'keyboard-arrow-down'} />;
			}}
			{...otherProps}
		/>
	);
};

const styles = StyleSheet.create({
	placeholder: {
		...base.fontItalic,
		...base.textGray400,
		fontSize: components.text.regular.fontSize,
		minHeight: components.inputContainer.minHeight,
	},
	iconContainer: {
		height: components.inputContainer.minHeight,
		top: constants.dimensions.gutter,
		right: Platform.OS === 'android' ? components.input.marginRight : -(components.inputIcon.size + constants.dimensions.gutter),
	},
	viewContainer: {
		...input,
		...base.justifyContentCenter,
		paddingRight: Platform.OS === 'ios' ? (components.inputIcon.size + constants.dimensions.gutter + components.input.marginRight) : 0,
		height: undefined, // Remove the default 50 height
	},
	inputIOS: {
		color: components.text.regular.color,
		fontFamily: components.text.regular.fontFamily,
		fontSize: components.text.regular.fontSize,
		height: undefined, // Remove the default 50 height
		minHeight: components.inputContainer.minHeight,
	},
	inputAndroid: {
		color: components.text.regular.color,
		fontFamily: components.text.regular.fontFamily,
		fontSize: components.text.regular.fontSize,
		height: undefined, // Remove the default 50 height
		minHeight: components.inputContainer.minHeight,
		marginLeft: -8, // Android has some odd alignment issues that could not be identified. This adjusts it.
	},
	label: {
		color: constants.colours.body.text,
		fontSize: components.text.regular.fontSize,
		fontFamily: components.text.bold.fontFamily,
		marginBottom: constants.dimensions.gutter * 0.25,
	},
	selectedContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: Platform.OS === 'android' ? constants.dimensions.gutter * 0.5 : constants.dimensions.gutter,
		paddingRight: constants.dimensions.gutter * 1.5 + components.text.regular.fontSize,
		borderColor: constants.colours.brand.secondary,
	},
	selectedContainerOverlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		backgroundColor: constants.colours.backgroundColor,
	},
	selectedClearButton: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		paddingLeft: constants.dimensions.gutter * 0.5,
		paddingRight: constants.dimensions.gutter * 0.5,
	},
	selectedClearIcon: {
		color: constants.colours.brand.secondary,
		fontSize: components.text.regular.fontSize,
	},
});