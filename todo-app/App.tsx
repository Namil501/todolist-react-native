import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TaskListScreen from './src/screens/TaskListScreen';
import { TaskProvider } from './src/context/TaskContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const initialTasks = [
  // {
  //   id: 1,
  //   name: 'React Native 공부하기',
  //   startDate: new Date(),
  //   dueDate: new Date(),
  //   difficulty: '보통',
  //   priority: '중간',
  //   description: 'React Native를 학습합니다.',
  //   status: '미착수',
  //   category: '공부',
  // },
  // {
  //   id: 2,
  //   name: '운동하기',
  //   startDate: new Date(),
  //   dueDate: new Date(),
  //   difficulty: '쉬움',
  //   priority: '높음',
  //   description: '매일 30분씩 조깅합니다.',
  //   status: '진행 중',
  //   category: '건강',
  // },
];


export default function App() {
  return (
    <TaskProvider initialTasks={initialTasks}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Task一覧' }} />
          {/* 다른 스크린을 추가할 수 있습니다. */}
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}