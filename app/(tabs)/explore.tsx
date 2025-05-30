import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import ContentCard from '@/components/ui/ContentCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { contentItems } from '@/constants/Content';

export default function ExploreScreen() {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Explorar
        </Text>
      </View>
      
      <View style={[styles.searchContainer, { backgroundColor: colors.cardBackground }]}>
        <Search size={20} color={colors.textSecondary} />
        <TextInput
          style={[styles.searchInput, { color: colors.textPrimary }]}
          placeholder="Buscar por temas, tags ou conteúdos..."
          placeholderTextColor={colors.textSecondary}
        />
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <SectionTitle title="Populares Hoje" />
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          {contentItems.popular.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              horizontal={true}
            />
          ))}
        </ScrollView>
        
        <SectionTitle title="Recentes" />
        
        <View style={styles.recentContainer}>
          {contentItems.recent.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
            />
          ))}
        </View>
        
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
    padding: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontFamily: 'DmSerifDisplay-Regular',
    fontSize: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Cabin-Regular',
    fontSize: 16,
    marginLeft: 10,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  horizontalScrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  recentContainer: {
    paddingHorizontal: 20,
  },
});