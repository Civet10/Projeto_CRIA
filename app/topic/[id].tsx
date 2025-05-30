import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { topics } from '@/constants/Topics';
import { ArrowLeft, BookOpen, Lightbulb, Send } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function TopicScreen() {
  const { colors, isDark } = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const topic = topics.find((t) => t.id === id) || topics[0];
  
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style="light" />
      
      <ImageBackground
        source={{ uri: topic.coverImage }}
        style={styles.headerImage}
      >
        <SafeAreaView style={styles.headerOverlay}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{topic.title}</Text>
        </SafeAreaView>
      </ImageBackground>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[styles.introContainer, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.introTitle, { color: colors.textPrimary }]}>
            {topic.introTitle}
          </Text>
          <Text style={[styles.introText, { color: colors.textSecondary }]}>
            {topic.introText}
          </Text>
        </View>
        
        <Animated.View 
          entering={FadeInDown.duration(400).delay(200)}
          style={[styles.sectionContainer, { backgroundColor: topic.sectionColors.reflect }]}
        >
          <View style={styles.sectionHeader}>
            <BookOpen size={22} color="#fff" />
            <Text style={styles.sectionTitle}>Refletir</Text>
          </View>
          
          {topic.reflectItems.map((item, index) => (
            <View key={index} style={styles.reflectItem}>
              <Text style={styles.reflectText}>{item}</Text>
            </View>
          ))}
        </Animated.View>
        
        <Animated.View 
          entering={FadeInDown.duration(400).delay(400)}
          style={[styles.sectionContainer, { backgroundColor: topic.sectionColors.act }]}
        >
          <View style={styles.sectionHeader}>
            <Lightbulb size={22} color="#fff" />
            <Text style={styles.sectionTitle}>Agir</Text>
          </View>
          
          {topic.actItems.map((item, index) => (
            <View key={index} style={styles.actItem}>
              <View style={styles.actItemNumber}>
                <Text style={styles.actItemNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.actItemText}>{item}</Text>
            </View>
          ))}
        </Animated.View>
        
        <Animated.View 
          entering={FadeInDown.duration(400).delay(600)}
          style={[styles.sectionContainer, { backgroundColor: topic.sectionColors.create }]}
        >
          <View style={styles.sectionHeader}>
            <Send size={22} color="#fff" />
            <Text style={styles.sectionTitle}>Criar</Text>
          </View>
          
          <TouchableOpacity 
            style={[styles.createButton, { backgroundColor: 'rgba(255,255,255,0.2)' }]}
            onPress={() => router.push('/create')}
          >
            <Text style={styles.createButtonText}>Compartilhe sua ideia sobre esse tema</Text>
          </TouchableOpacity>
        </Animated.View>
        
        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 220,
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'DmSerifDisplay-Regular',
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
  scrollContent: {
    padding: 20,
  },
  introContainer: {
    borderRadius: 12,
    padding: 20,
    marginTop: -40,
    marginBottom: 20,
  },
  introTitle: {
    fontFamily: 'Cabin-SemiBold',
    fontSize: 18,
    marginBottom: 10,
  },
  introText: {
    fontFamily: 'Cabin-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  sectionContainer: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: 'Cabin-Bold',
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  reflectItem: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  reflectText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
  },
  actItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  actItemNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  actItemNumberText: {
    fontFamily: 'Cabin-Bold',
    fontSize: 14,
    color: '#fff',
  },
  actItemText: {
    flex: 1,
    fontFamily: 'Cabin-Regular',
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  createButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  createButtonText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 16,
    color: '#fff',
  },
});