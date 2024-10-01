// tests/TaskListScreen.test.tsx

import React from 'react';
import { render } from '@testing-library/react-native';
import TaskListScreen from '../src/screens/TaskListScreen';
import { TaskProvider } from '../src/context/TaskContext';


test('taskがない場合、"taskがありません。"を表示する。', () => {
    const { getByText } = render(
        <TaskProvider initialTasks={[]}>
            <TaskListScreen />
        </TaskProvider>
    );

    expect(getByText('taskがありません。')).toBeTruthy();
});

test('taskがある場合、一覧に表示する', () => {
    const tasks = [
        { id: 1, name: 'task 1' },
        { id: 2, name: 'task 2' },
    ];

    const { getByText } = render(
        <TaskProvider initialTasks={tasks}>
            <TaskListScreen/>
        </TaskProvider>
    );

    expect(getByText('task 1')).toBeTruthy();
    expect(getByText('task 2')).toBeTruthy();
});
