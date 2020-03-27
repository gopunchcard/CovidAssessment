module.exports = {
	presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
	plugins: [
		[
			'module-resolver',
			{
				extensions: [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
					'.android.js',
					'.android.tsx',
					'.ios.js',
					'.ios.tsx',
				],
				root: ['src'],
			},
		],
	],
};
