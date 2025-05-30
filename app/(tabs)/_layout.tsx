import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Chrome as Home, Search, CirclePlus as PlusCircle, MessageCircle, User } from 'lucide-react-native';

export default function TabLayout() {
  const { theme, colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 85 : Platform.OS === 'web' ? 65 : 65,
          paddingBottom: Platform.OS === 'ios' ? 25 : Platform.OS === 'web' ? 15 : 10,
          paddingTop: 10,
          maxWidth: Platform.OS === 'web' ? 1200 : undefined,
          width: Platform.OS === 'web' ? '100%' : undefined,
          alignSelf: 'center',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: {
          fontFamily: 'Cabin-Medium',
          fontSize: Platform.OS === 'web' ? 14 : 12,
          marginTop: Platform.OS === 'web' ? 0 : -5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} strokeWidth={2.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, size }) => (
            <Search color={color} size={size} strokeWidth={2.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Criar',
          tabBarIcon: ({ color, size }) => (
            <View style={{ 
              backgroundColor: colors.accent, 
              borderRadius: 30, 
              padding: 5, 
              marginTop: Platform.OS === 'ios' ? -10 : Platform.OS === 'web' ? -5 : -15 
            }}>
              <PlusCircle color={colors.background} size={size} strokeWidth={2.2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Comunidade',
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size} strokeWidth={2.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} strokeWidth={2.2} />
          ),
        }}
      />
    </Tabs>
  );
}