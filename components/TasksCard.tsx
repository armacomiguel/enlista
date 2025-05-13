import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import useStore from '../lib/store';
import { Ionicons } from '@expo/vector-icons';
import LevelChip from './levelChip'; // 👈 Importa tu chip

const TaskCard: React.FC<{ task: TaskProps }> = ({ task }) => {
  const { completeTask, resetTask } = useStore();

  let remainingTime = '';
  const now = Date.now();
  const nextAvailable = new Date(task.lastCompleted).getTime() + (task.cooldownMinutes * 60000);
  const diffMs = nextAvailable - now;

  if (task.completed && task.lastCompleted) {
    if (diffMs > 0) {
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      remainingTime = `${diffHrs}h ${diffMins}m restantes`;
    } else {
      remainingTime = '¡Disponible!';
    }
  }

  useEffect(() => {
    if (task.completed && diffMs <= 0) {
      const timer = setTimeout(() => {
        resetTask(task.id);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [task.completed, diffMs, resetTask, task.id]);

  return (
    <View className='w-full mb-2'>
      <TouchableOpacity onPress={() => completeTask(task.id)} disabled={task.completed}>
        <View className="flex-row items-stretch justify-between relative">
          <View className={`${task.completed ? "bg-green-light" : "bg-orange-light"} w-[15%] items-center justify-center p-2 rounded-lg`}>
            <Ionicons name="person" size={24} color={`${task.completed ? "#2b9a66" : "#ef5f00"}`} />
          </View>
          <View className={`${task.completed ? "bg-green-light" : "bg-orange-light"} w-[83%] justify-center p-2 rounded-lg relative`}>
            {/* Aquí va el Chip en posición absoluta */}
            <LevelChip
              value={10}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
              }}
            />
            <Text className={`${task.completed ? "color-green-strong" : "color-orange-strong"}`}>
              {task.name}
            </Text>
            {task.completed && (
              <Text className="text-xs text-center text-gray-600 mt-1">{remainingTime}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
