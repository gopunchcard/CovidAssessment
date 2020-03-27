import React from 'react';
import Modal, { ModalProps } from 'react-native-modal';
import { SafeAreaView } from './';
import { base, constants } from '../../utils';

interface IProps extends ModalProps {
}

export const Drawer: React.FC<IProps> = ( props: IProps ): JSX.Element => {
	const { children, style, ...allProps } = props;

	return (
		<Modal
			deviceHeight={constants.dimensions.viewportHeight}
			deviceWidth={constants.dimensions.viewportWidth}
			animationIn={props.animationIn || 'slideInRight'}
			animationInTiming={props.animationInTiming || 250}
			animationOut={props.animationOut || 'slideOutRight'}
			animationOutTiming={props.animationOutTiming || 200}
			backdropOpacity={props.backdropOpacity || 0.7}
			useNativeDriver={true}
			hideModalContentWhileAnimating={true}
			style={[
				base.m0,
				base.p0,
				base.top0,
				base.positionAbsolute,
				base.justifyContentEnd,
				base.shadow,
				base.right0,
				base.bottom0,
				base.bgWhite,
				{
					left: '20%',
				},
				style,
			]}
			{...allProps}
		>
			<SafeAreaView>
				{children}
			</SafeAreaView>
		</Modal>
	);
};