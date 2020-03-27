import React from 'react';
import { Platform, StatusBar } from 'react-native';
import AppNavigator from './AppNavigator';
import { SafeAreaProvider, SafeAreaView, EdgeInsets } from 'react-native-safe-area-context';
import { base } from 'utils';

const App: React.FC = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={[base.flexGrow]}>
				{Platform.OS === 'ios' && <StatusBar barStyle={'dark-content'} />}
				<AppNavigator />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export default App;
