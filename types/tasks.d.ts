// interface TaskProps {
//     id: number;
//     name: string;
//     completed: boolean;
//     category: string;
//     type: string;
//     cooldownMinutes: number;
//     lastCompleted: number;
// }

// interface StoreTasks {
//     level: number;
//     exp: number;
//     expToUp: number;
//     lives: number;
//     streak: number;
//     tasks: TaskProps[];
//     loadAndSetDataPlayer: () => void;
//     resetTask: (taskId: number) => void;
//     completeTask: (taskId: number) => void;
// }

// interface PlayerDataProps {
//     level: number;
//     exp: number;
//     expToUp: number;
//     lives: number;
//     streak: number;
//     tasks: TaskProps[];
// }

// interface RecordProps {
//     streak: number;
// }

// interface ProfileCardProps {
//     level: number;
//     exp: number;
//     expToUp: number;
// }

// interface ExpBarProps {
//     exp: number;
//     expToUp: number;
// }


// Enlista App Types

interface TaskProps {
    title: string;
    desc?: string;
    category: CategoryTaskProps;
    priority: PriorityStatic;
    step: number;
}

interface CategoryTaskProps {
    name: string;
}

interface CategoryStatic {
    label: string;
    value: string;
}

interface StoreTasks {
    totalTask: number;
    totalCompleteTasks: number,
    tasks: string[];
    loadTaskFromFirebase:() => void;
}

interface TaskItem {
    title: string;
    category: string;
    completed: boolean;
    priority: PriorityStatic;
    step: number; // Num Max 5
    createdAt: date;
}

interface PriorityStatic {
    label: string;
    value: number;
}