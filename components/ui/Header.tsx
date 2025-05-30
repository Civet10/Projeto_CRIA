import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useRouter } from 'expo-router';
import { Moon, Sun, Bell } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function Header() {
  const { colors, isDark, toggleTheme } = useTheme();
  const router = useRouter();
  
  return (
    <Animated.View 
      entering={FadeIn.duration(500)}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View>
        <Text style={[styles.logo, { color: colors.primary }]}>CRIA</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton} onPress={toggleTheme}>
          {isDark ? (
            <Moon size={24} color={colors.textPrimary} />
          ) : (
            <Sun size={24} color={colors.textPrimary} />
          )}
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    fontFamily: 'DmSerifDisplay-Regular',
    fontSize: 28,
  },
  actions: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 20,
  },
});