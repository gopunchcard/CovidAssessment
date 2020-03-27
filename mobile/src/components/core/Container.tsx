import React from 'react';
import { View, ViewProps } from 'react-native';
import { base } from 'utils';

interface IProps extends ViewProps {
}

export const Container: React.FC<IProps> = ( props ): JSX.Element => {
	const { style, children, ...otherProps } = props;

	return (
		<View style={[base.bg, base.flex, style]} {...otherProps}>
			{children}
		</View>
	);
};