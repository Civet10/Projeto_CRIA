import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import Animated, { FadeInUp } from 'react-native-reanimated';
import * as Lucide from 'lucide-react-native';

type TopicCardProps = {
  title: string;
  icon: keyof typeof Lucide;
  color: string;
  onPress: () => void;
};

export default function TopicCard({ title, icon, color, onPress }: TopicCardProps) {
  const { colors } = useTheme();
  const Icon = Lucide[icon] as React.ComponentType<Lucide.IconProps>;
  
  return (
    <Animated.View entering={FadeInUp.duration(400)}>
      <TouchableOpacity 
        style={[styles.container, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Icon color="#fff" size={28} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  title: {
    fontFamily: 'Cabin-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});