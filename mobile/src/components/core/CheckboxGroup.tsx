import React from 'react';
import { View } from 'react-native';
import { base } from 'utils';
import { Checkbox } from './Checkbox';

export interface ICheckbox {
	label: string | undefined;
	value?: any;
	disabled?: boolean;
}

interface IProps {
	options: ICheckbox[];
	label?: string;
	disabled?: boolean;
	horizontal?: boolean;
	selectedValues: any[];
	onPress: (value: any[]) => void;
}

export const CheckboxGroup: React.FC<IProps> = (props): JSX.Element => {
	const groupedCheckboxes = groupCheckboxes(props.options, 2);
	const onSelect = (radio: ICheckbox) => props.onPress(handleSelect(props.selectedValues, radio.value));
	return (
		<React.Fragment>
			{groupedCheckboxes.map((groupedItem, index: number) => {
				return (
					<View style={[props.horizontal && base.flexRow]} key={index}>
						{groupedItem.map((item, itemIndex) => (
							<Checkbox
								key={itemIndex || 'defaultKey'}
								checked={isChecked(props.selectedValues, item.value)}
								onPress={() => onSelect(item)}
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

// TODO: replace with lodash.chunk
const groupCheckboxes = (list: ICheckbox[], elementsPerSubArray: number): ICheckbox[][] => {
	const matrix = [] as Array<ICheckbox[]>;
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

const handleSelect = (oldValues: any[], newValue: any) => {
	if (!oldValues || oldValues.length === 0) {
		return [newValue];
	}
	return (oldValues.indexOf(newValue) === -1)
		? [...oldValues, newValue]
		: oldValues.filter(i => i !== newValue);
};

const isChecked = (oldValues: any[], nevValue: any) => {
	return oldValues && oldValues.indexOf(nevValue) > -1;
};
