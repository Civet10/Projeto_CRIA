import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/Header';
import TopicCard from '@/components/ui/TopicCard';
import RandomSeedButton from '@/components/ui/RandomSeedButton';
import { topics } from '@/constants/Topics';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { colors, isDark } = useTheme();
  const router = useRouter();

  const handleTopicPress = (topicId: string) => {
    router.push(`/topic/${topicId}`);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Header />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.heroSection}>
          <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>
            O futuro é o que 
            <Text style={{ color: colors.accent }}> criamos </Text> 
            juntos.
          </Text>
          <View style={styles.heroLine} />
        </View>

        <View style={styles.topicsContainer}>
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              icon={topic.icon}
              color={topic.color}
              onPress={() => handleTopicPress(topic.id)}
            />
          ))}
        </View>

        <RandomSeedButton />
        
        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  heroSection: {
    marginBottom: 40,
  },
  heroTitle: {
    fontFamily: 'DmSerifDisplay-Regular',
    fontSize: 34,
    marginBottom: 20,
    lineHeight: 42,
  },
  heroLine: {
    height: 2,
    width: 64,
    backgroundColor: '#14B8A6',
    marginTop: 8,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});