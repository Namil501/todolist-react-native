
// src/context/TaskContext.tsx

import React, { createContext, useState } from 'react';

export interface Task {
    id: number;
    name: string;
    startDate: Date;
    dueDate: Date;
    difficulty: string;
    priority: string;
    description: string;
    status: string;
    category: string;
}

interface TaskContextProps {
    tasks: Task[];
  // 필요한 경우 작업을 추가, 삭제하는 함수들을 정의합니다.
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ initialTasks?: Task[] }> = ({ children, initialTasks = [] }) => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    // 필요한 함수들을 정의합니다.

    return (
        <TaskContext.Provider value={{ tasks }}>
        {children}
        </TaskContext.Provider>
    );
};
