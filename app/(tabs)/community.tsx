import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filter } from 'lucide-react-native';
import CommunityPost from '@/components/ui/CommunityPost';
import { communityPosts } from '@/constants/CommunityPosts';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function CommunityScreen() {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Comunidade
        </Text>
        
        <TouchableOpacity style={[styles.filterButton, { backgroundColor: colors.cardBackground }]}>
          <Filter size={18} color={colors.textSecondary} />
          <Text style={[styles.filterText, { color: colors.textSecondary }]}>Filtrar</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.networkVisualization}>
        <Text style={[styles.networkText, { color: colors.textPrimary }]}>
          Rede de Sementes
        </Text>
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {communityPosts.map((post, index) => (
          <Animated.View 
            key={post.id}
            entering={FadeInUp.duration(300).delay(index * 100)}
          >
            <CommunityPost post={post} />
          </Animated.View>
        ))}
        
        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontFamily: 'DmSerifDisplay-Regular',
    fontSize: 30,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filterText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 14,
    marginLeft: 5,
  },
  networkVisualization: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  networkText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 14,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 0,
  },
});