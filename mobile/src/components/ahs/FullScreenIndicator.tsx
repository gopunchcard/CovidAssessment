import React from 'react';
import { View } from 'react-native';
import { base, constants } from 'utils';
import { PulseIndicator } from 'react-native-indicators';
import { Text } from 'components/core';

interface IProps {
  loading?: boolean;
  text?: string;
}

const FullScreenIndicator: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      {props.loading && (
        <View style={[base.positionAbsolute, base.left0, base.right0, base.top0, base.bottom0, base.flexGrow, base.bgWhite, { width: '100%', height: '100%', zIndex: 999 }]}>
          {/* Separate View to prevent the loader elevation from adding a drop shadow on Android */}
          <View style={[base.alignItemsCenter, base.flexGrow, base.justifyContentCenter, { zIndex: 999 }]}>
            <View style={[{ height: 50 }]}>
              <PulseIndicator size={40} color={constants.colours.brand.primary} />
            </View>
            {props.text !== undefined && props.text !== '' && <Text style={[base.h3, base.mb3, base.textPrimary]}>{props.text}</Text>}
          </View>
        </View>
      )}
    </>
  );
}

export default FullScreenIndicator;