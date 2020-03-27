import React from 'react';
import { TextProps, Text as RNText } from 'react-native';
import { base } from 'utils';

interface IProps extends TextProps {
	uppercase?: boolean;
	children: any;
}

export const Text: React.FC<IProps> = ( props: IProps ): JSX.Element => {
	const { style, uppercase, children, ...otherProps } = props;

	return (
		<RNText style={[{...base.text}, uppercase && base.textUppercase, props.style]} {...otherProps}>
			{children}
		</RNText>
	);
};