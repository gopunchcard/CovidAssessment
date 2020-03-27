import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppRoutes } from './utils';

// Common views
import Home from 'screens/Home';

const AppNavigator = createStackNavigator(
	{
		[AppRoutes.Home]: {
			navigationOptions: { header: null, gesturesEnabled: false, },
			screen: Home,
		},
	},
	{
		initialRouteName: AppRoutes.Home,
	},
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;