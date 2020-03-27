import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { components, base, constants } from 'utils';
import { Text } from 'components/core';

const { input, inputContainer } = components;

interface IProps extends TextInputProps {
	prepend?: string;
	append?: string;
}

export const Input: React.FC<IProps> = ( props ): JSX.Element => {
	const { value, style, ...otherProps } = props;
	const multilineHeight = { minHeight: 100 };

	return (
		<View style={[base.flexRow, base.flexGrow, inputContainer, style]}>
			{props.prepend && (
				<View style={[components.inputPrepend, base.justifyContentCenter, base.alignItemsCenter]}>
					<Text>{props.prepend}</Text>
				</View>
			)}
			<TextInput
				style={[input, value === '' && base.textGray500, value === '' && base.fontItalic, props.multiline && multilineHeight, base.flex]}
				placeholderTextColor={constants.colours.brand.gray500}
				numberOfLines={props.multiline ? (props.numberOfLines || 4) : 1}
				{...otherProps}
			/>
			{props.append && (
				<View style={[components.inputAppend, base.justifyContentCenter, base.alignItemsCenter]}>
					<Text>{props.append}</Text>
				</View>
			)}
		</View>
	);
};
