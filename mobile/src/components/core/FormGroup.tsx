import React from 'react';
import { View, ViewProps } from 'react-native';
import { base } from '../../utils';
import { Text } from './Text';

interface IProps extends ViewProps {
	label?: string;
	required?: boolean;
	optional?: boolean;
}

export const FormGroup: React.FC<IProps> = ( props ): JSX.Element => {
	const { style, label, children, optional, required, ...otherProps } = props;
	return (
		<View style={[base.mb3, style]} {...otherProps}>
			{label && (
				<View style={[base.flexRow, base.justifyContentBetween]}>
					<Text style={[base.fontWeightBold, base.mb1]}>{label}{required && <Text style={[base.fontWeightBold, base.textSecondary, base.mb1]}>*</Text>}</Text>
					{optional && <Text style={[base.small, base.fontItalic]}>optional</Text>}
				</View>
			)}
			{children}
		</View>
	);
};