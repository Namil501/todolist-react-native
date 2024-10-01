// __mocks__/expo-file-system.js

export default {
    getInfoAsync: jest.fn(() => Promise.resolve({ exists: true })),
    readAsStringAsync: jest.fn(() => Promise.resolve('')),
    writeAsStringAsync: jest.fn(() => Promise.resolve()),
    deleteAsync: jest.fn(() => Promise.resolve()),
    createDownloadResumable: jest.fn(),
    // 필요한 다른 메서드들을 추가할 수 있습니다.
};
