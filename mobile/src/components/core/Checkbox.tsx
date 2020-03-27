import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextStyle, ViewStyle, StyleProp } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { constants, base, components } from 'utils';
import { Text } from 'components/core';

const { checkbox } = components;

export interface ICheckBox {
	label?: string;
	value?: string;
	checked?: boolean;
}

interface IProps extends ICheckBox {
	disabled?: boolean;
	onPress?: () => void;
	style?: StyleProp<ViewStyle>;
	boxStyle?: StyleProp<ViewStyle>;
	checkStyle?: StyleProp<TextStyle>;
}

export const Checkbox: React.FC<IProps> = (props: IProps): JSX.Element => {
	return (
		<TouchableOpacity
			disabled={props.disabled}
			style={[
				base.flexRow,
				base.alignItemsCenter,
				base.mb2,
				base.py2,
				props.disabled && base.disabled,
				props.style,
			]}
			activeOpacity={constants.touchableOpacity.activeOpacity}
			onPress={props.onPress}
		>
			<View
				style={[
					props.disabled && base.disabled,
					checkboxStyles.inner,
					props.checked && checkboxStyles.checked,
					base.alignSelfStart,
					{marginTop: 3}
				]}
			>
				{props.checked &&
					<Icon
						name={'check'}
						style={[checkboxStyles.check, props.checkStyle]}
					/>
				}
			</View>
			{props.label && <Text>{props.label}</Text>}
		</TouchableOpacity>
	);
};

const checkboxStyles = StyleSheet.create({
	inner: {
		backgroundColor: checkbox.unchecked.backgroundColor,
		borderColor: checkbox.unchecked.borderColor,
		borderWidth: checkbox.borderWidth,
		borderRadius: checkbox.borderRadius,
		height: checkbox.height,
		width: checkbox.width,
		...base.justifyContentCenter,
		...base.alignItemsCenter,
		...base.borderWidth2,
		...base.mr2,
	},
	checked: {
		borderColor: checkbox.checked.borderColor,
		backgroundColor: checkbox.checked.backgroundColor,
	},
	check: {
		color: checkbox.checked.checkColor,
		fontSize: checkbox.checked.checkSize,
	}
});