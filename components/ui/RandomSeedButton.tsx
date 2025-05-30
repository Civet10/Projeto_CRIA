import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Sprout } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { seeds } from '@/constants/Seeds';

export default function RandomSeedButton() {
  const { colors } = useTheme();
  const [currentSeed, setCurrentSeed] = useState<string | null>(null);
  const scale = useSharedValue(1);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
  const handlePress = () => {
    scale.value = withSpring(0.95, {}, () => {
      scale.value = withSpring(1);
    });
    
    const randomIndex = Math.floor(Math.random() * seeds.length);
    setCurrentSeed(seeds[randomIndex]);
  };
  
  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle, { width: '100%' }]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.accent }]}
          onPress={handlePress}
        >
          <Sprout color="#fff" size={22} />
          <Text style={styles.buttonText}>Semente Aleatória</Text>
        </TouchableOpacity>
      </Animated.View>
      
      {currentSeed && (
        <View style={[styles.seedContainer, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.seedText, { color: colors.textPrimary }]}>
            {currentSeed}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  seedContainer: {
    width: '100%',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
  },
  seedText: {
    fontFamily: 'DmSerifDisplay-Italic',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
  },
});