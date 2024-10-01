// src/screens/TaskListScreen.tsx

import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TaskContext, Task } from '../context/TaskContext';

const TaskListScreen = () => {
    const taskContext = useContext(TaskContext);
    if (!taskContext) {
        return null;
    }
    const { tasks } = taskContext;
    if (tasks.length === 0) {
        return (
            <View>
                <Text>taskがありません。</Text>
            </View>
        );
    }
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.name}</Text>
                </View>
            )}
        />
    );
};

export default TaskListScreen;
