import React from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { base } from 'utils';

interface IProps extends ViewProps {
	children?: any;
}

export const SafeAreaView: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { children, style, ...otherProps } = props;
	return (
		<RNSafeAreaView style={[base.flexGrow, base.flexShrink, style]} {...otherProps}>
			{children}
		</RNSafeAreaView>
	);
};
