import React from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform, ScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import { base } from 'utils';

interface IProps extends KeyboardAvoidingViewProps, ScrollViewProps {
	children?: any;
	style?: StyleProp<ViewStyle>;
	contentContainerStyle: StyleProp<ViewStyle>;
}

export const KeyboardAwareScrollView: React.FC<IProps> = ( props: IProps ): JSX.Element => {
	const { children, style, ...otherProps } = props;
	return (
		<KeyboardAvoidingView
			style={[base.flexGrow, style]}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			{...otherProps}
		>
			<ScrollView
				contentContainerStyle={[base.flexGrow, props.contentContainerStyle]}
				contentInsetAdjustmentBehavior={props.contentInsetAdjustmentBehavior}
				keyboardDismissMode={props.keyboardDismissMode}
				keyboardShouldPersistTaps={'handled'}
			>
				{children}
			</ScrollView>
		</KeyboardAvoidingView>
	);
};