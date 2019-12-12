import React from 'react';
import { View, Text } from 'react-native';

const PendingView = () => (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);

export default PendingView;
