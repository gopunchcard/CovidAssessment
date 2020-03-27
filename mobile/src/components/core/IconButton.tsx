import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle, StyleProp, TouchableHighlightProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IconProps } from 'react-native-vector-icons/Icon';
import { base, constants, components } from 'utils';

const { button } = components;

interface IProps extends TouchableHighlightProps, IconProps {
	onPress?: (value?: {}) => void;
	style?: StyleProp<ViewStyle>;
	iconStyle?: StyleProp<TextStyle>;
	buttonType?: 'primary' | 'primaryOutline' | 'primaryGhost' | 'secondary' | 'secondaryOutline' | 'secondaryGhost' | 'danger' | 'warning' | 'success';
}

export const IconButton: React.FC<IProps> = ( props: IProps ): JSX.Element => {
	const { name, buttonType, onPress, iconStyle, style, disabled, ...otherProps } = props;

	const styles = StyleSheet.create({
		button: {
			height: constants.dimensions.spacer * 5.5,
			width: constants.dimensions.spacer * 5.5,
			borderRadius: 50,
			backgroundColor: button[buttonType || 'primaryOutline'].backgroundColor,
			borderColor: button[buttonType || 'primaryOutline'].borderColor,
		},
	});

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			style={[
				styles.button,
				props.disabled && base.disabled,
				base.justifyContentCenter,
				base.alignItemsCenter,
				base.borderWidth2,
				style,
			]}
			{...otherProps}
		>
			<Icon
				name={name}
				size={props.size || 20}
				style={[
					base.alignSelfCenter,
					base.textCenter,
					{
						color: button[buttonType || 'primaryOutline'].color as TextStyle['color'],
					},
					iconStyle && iconStyle,
				]}
			/>
		</TouchableOpacity>
	);
};

