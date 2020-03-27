import React from 'react';
import { View } from 'react-native';
import { base } from 'utils';
import { Radio } from './Radio';

export interface IRadio {
	label: string | undefined;
	value: string | boolean;
	disabled?: boolean;
}

interface IProps {
	options: IRadio[];
	disabled?: boolean;
	horizontal?: boolean;
	value?: string | boolean;
	onChange: (value: string | boolean) => void;
}

export const RadioGroup: React.FC<IProps> = (props): JSX.Element => {
	const { options, horizontal } = props;
	const groupedRadios = groupRadios(options, 2);

	return (
		<React.Fragment>
			{groupedRadios.map((groupedItem, index: number) => {
				return (
					<View style={[horizontal && base.flexRow]} key={index}>
						{groupedItem.map((item, itemIndex) => (
							<Radio
								key={itemIndex || 'defaultKey'}
								checked={props.value === item.value}
								onPress={() => props.onChange(item.value)}
								style={[base.mr2, base.my1]}
								disabled={props.disabled || item.disabled}
								label={item.label}
							/>
						))}
					</View>
				);
			})}
		</React.Fragment>
	);
};

// TODO: use lodash.chunk
const groupRadios = (list: IRadio[], elementsPerSubArray: number): Array<IRadio[]> => {
	const matrix = [] as Array<IRadio[]>;
	let i = 0;
	let k = -1;
	for (; i < list.length; i++) {
		if (i % elementsPerSubArray === 0) {
			k++;
			matrix[k] = [];
		}
		matrix[k].push(list[i]);
	}
	return matrix;
};
