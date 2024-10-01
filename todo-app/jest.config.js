module.exports = {
    preset: 'jest-expo',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(react-native' +
        '|@react-native' +
        '|@react-native-community' +
        '|@expo' +
        '|expo-asset' +
        '|expo-file-system' +
        '|expo' +
        '|expo-.*' +
        '|@expo/vector-icons' +
        '|react-native-paper' +
        ')/)',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^react-native-vector-icons/(.*)$': '<rootDir>/__mocks__/react-native-vector-icons.js',
    },
};
