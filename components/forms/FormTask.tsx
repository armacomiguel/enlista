import { View, Text, TextInput, Button, } from 'react-native';
import { useForm, Controller, useWatch  } from 'react-hook-form';
import { agregarTarea } from 'lib/firebase/tasks';
import { Picker } from '@react-native-picker/picker'; // Asegúrate de tenerlo instalado
import { categoryTask, priorityTask } from 'constans/task.static';
import { useNavigation } from '@react-navigation/native';
import useStoreTask from 'lib/task.store';

const FormTask = () => {

  const navigation = useNavigation();
  const {loadTaskFromFirebase}  = useStoreTask();

  const { control, handleSubmit, reset } = useForm<TaskProps>();

  const values = useWatch({ control });
  const isDisabled = !values?.title || !values?.category || !values?.priority || !values?.step;

  const onSubmit = async (data: TaskProps) => {

    await agregarTarea(data);
    loadTaskFromFirebase();
    navigation.goBack()
    reset(); // limpia el formulario
  };

  return (
    <View className="p-4">
      <Text className="text-white mb-2">Nombre de la tarea:</Text>
      <Controller
        control={control}
        name="title"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="bg-white p-2 rounded mb-4"
            placeholder="Ejemplo: Lavar platos"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text className="text-white mb-2">Descripción:</Text>
      <Controller
        control={control}
        name="desc"
        defaultValue=""
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="bg-white p-2 rounded mb-4"
            placeholder="Tengo que..."
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text className="text-white mb-2">Categoría:</Text>
      <Controller
        control={control}
        name="category"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Picker selectedValue={value} onValueChange={onChange} style={{ backgroundColor: 'white', marginBottom: 16 }}>
             <Picker.Item label="Selecciona una categoría" value="" enabled={false} />
            {categoryTask.map((category) => (
              <Picker.Item key={category.label} label={category.label} value={category.value} />
            ))}
          </Picker>
        )}
      />

      <Text className="text-white mb-2">Prioridad:</Text>
      <Controller
        control={control}
        name="priority"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Picker selectedValue={value} onValueChange={onChange} style={{ backgroundColor: 'white', marginBottom: 16 }}>
             <Picker.Item label="Selecciona una prioridad" value="" enabled={false} />
            {priorityTask.map((pri) => (
                <Picker.Item key={pri.label} label={pri.label} value={pri.value} />
            ))}
          </Picker>
        )}
      />

      <Text className="text-white mb-2">Numero de fases:</Text>
      <Controller
        control={control}
        name="step"
        defaultValue={1}
        rules={{ required: true, max: 5 }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="bg-white p-2 rounded mb-4"
            placeholder="Ejemplo: 1"
            value={String(value)} // convierte a string para evitar advertencias
            onChangeText={(text) => onChange(Number(text))} // convierte a número
            keyboardType="numeric"
          />
        )}
      />

      <Button title="Agregar Tarea" onPress={handleSubmit(onSubmit)} disabled={isDisabled} />
    </View>
  );
};

export default FormTask;
