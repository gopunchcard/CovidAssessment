import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextStyle, StyleProp, ViewStyle } from 'react-native';
import { base, constants, components } from 'utils';
import { Text } from './Text';

const { radio } = components;

interface IProps {
	name?: string;
	disabled?: boolean;
	checked?: boolean;
	label?: string;
	onPress?: () => void;
	style?: StyleProp<ViewStyle>;
	boxStyle?: StyleProp<ViewStyle>;
	checkStyle?: StyleProp<TextStyle>;
}

export const Radio: React.FC<IProps> = (props: IProps): JSX.Element => {
	return (
		<TouchableOpacity
			disabled={props.disabled}
			style={[props.disabled && base.disabled, base.mb2, base.flexRow, base.py2, props.style]}
			activeOpacity={constants.touchableOpacity.activeOpacity}
			onPress={props.onPress}
		>
			<View
				style={[
					radioStyles.radio,
					props.checked && radioStyles.checked,
					props.disabled && base.disabled,
				]}
			>
				{props.checked &&
				<View style={[radioStyles.checkedInner]} />}
			</View>
			{props.label && <Text style={[base.pr3, radioStyles.label]}>{props.label}</Text>}
		</TouchableOpacity>
	);
};
const radioStyles = StyleSheet.create({
	radio: {
		borderColor: radio.unchecked.borderColor,
		backgroundColor: radio.unchecked.backgroundColor,
		borderWidth: radio.borderWidth,
		height: radio.height,
		width: radio.width,
		borderRadius: radio.borderRadius,
		...base.mr2,
		...base.mt1,
		...base.alignItemsCenter,
		...base.justifyContentCenter,
	},
	checked: {
		borderColor: radio.checked.borderColor,
		backgroundColor: radio.checked.backgroundColor,
	},
	checkedInner: {
		backgroundColor: radio.checked.inner.backgroundColor,
		borderColor: radio.checked.inner.borderColor,
		borderWidth: radio.checked.inner.borderWidth,
		height: radio.checked.inner.height,
		width: radio.checked.inner.width,
		borderRadius: radio.borderRadius,
	},
	label: {
		marginTop: 2,
	},
});
