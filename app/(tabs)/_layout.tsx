import { View } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

interface TabIconParams {
    icon: React.ComponentProps<typeof Ionicons>['name']; // usa el tipo correcto
    color: string;
    name: string;
    focused: boolean;
  }

  const TabIcon = ({ icon, color, name, focused }: TabIconParams) => {
    return (
      <View>
        <Ionicons name={icon} size={24} color={color} />
      </View>
    );
  };

const TabsLayout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarStyle: { 
            backgroundColor: '#1D2730',
            borderTopColor: "#1B242C",
            borderColor: "#1B242C",
            borderTopWidth: 3,      
            height: 80,             
            paddingBottom: 10,      
            paddingTop: 10,         
        },
        tabBarActiveTintColor: '#fff',               // color del ícono activo
        tabBarInactiveTintColor: '#aaa',             // color del ícono inactivo
      }}
    >
        <Tabs.Screen name='home'
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon="home"
                        color={color}
                        name="Home"
                        focused={focused}
                    />
                )
            }}
        />

        <Tabs.Screen name='tasks'
            options={{
                title: "Tareas",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon="list"
                        color={color}
                        name="Tareas"
                        focused={focused}
                    />
                )
            }} 
        />
        <Tabs.Screen name="super"
            options={{
                title: "Super",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon="storefront"
                        color={color}
                        name="Super"
                        focused={focused}
                    />
                )
            }}
        />
         <Tabs.Screen name="shopCar"
            options={{
                title: "Carrito",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon="cart-sharp"
                        color={color}
                        name="shopCar"
                        focused={focused}
                    />
                )
            }}
        />
    </Tabs>
    
    
  )
}

export default TabsLayout;