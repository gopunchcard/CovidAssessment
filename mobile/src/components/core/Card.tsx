import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { base, components } from 'utils';
import { Text } from './Text';

const { card } = components;

interface IProps extends ViewProps {
	label?: string;
}

export const Card: React.FC<IProps> = ( props ): JSX.Element => {
	const { style, label, children, ...otherProps } = props;
	return (
		<View style={[cardStyles.card, style]} {...otherProps}>
			{label && <Text style={[base.fontWeightBold, base.textGray500, base.mb4]} uppercase={true}>{label}</Text>}
			{children}
		</View>
	);
};

const cardStyles = StyleSheet.create({
	card: {
		backgroundColor: card.backgroundColor,
		paddingLeft: card.paddingHorizontal,
		paddingRight: card.paddingHorizontal,
		paddingTop:  card.paddingVertical,
		paddingBottom:  card.paddingVertical,
		borderTopColor: card.borderTopWidth > 0 ? card.borderColor : 'transparent',
		borderBottomColor: card.borderBottomWidth > 0 ? card.borderColor : 'transparent',
		borderLeftColor: card.borderLeftWidth > 0 ? card.borderColor : 'transparent',
		borderRightColor: card.borderRightWidth > 0 ? card.borderColor : 'transparent',
		borderTopWidth: card.borderTopWidth,
		borderBottomWidth: card.borderBottomWidth,
		borderLeftWidth: card.borderLeftWidth,
		borderRightWidth: card.borderRightWidth,
		...base.mb3,
	}
});