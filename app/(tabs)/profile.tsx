import { StyleSheet, Text, View, ScrollView, Switch, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Moon, Sun, Settings, CreditCard as Edit, BookOpen, Heart, Award } from 'lucide-react-native';

export default function ProfileScreen() {
  const { colors, isDark, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Perfil
        </Text>
        <TouchableOpacity>
          <Settings size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editButton}>
              <Edit size={18} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: colors.textPrimary }]}>
              Maria Silva
            </Text>
            <Text style={[styles.profileBio, { color: colors.textSecondary }]}>
              Transformando ideias em ações para um futuro melhor.
            </Text>
          </View>
        </View>
        
        <View style={styles.statsSection}>
          <View style={[styles.statItem, { backgroundColor: colors.cardBackground }]}>
            <BookOpen size={24} color={colors.primary} />
            <Text style={[styles.statValue, { color: colors.textPrimary }]}>23</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Contribuições</Text>
          </View>
          
          <View style={[styles.statItem, { backgroundColor: colors.cardBackground }]}>
            <Heart size={24} color={colors.accent} />
            <Text style={[styles.statValue, { color: colors.textPrimary }]}>47</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Curtidas</Text>
          </View>
          
          <View style={[styles.statItem, { backgroundColor: colors.cardBackground }]}>
            <Award size={24} color={colors.tertiary} />
            <Text style={[styles.statValue, { color: colors.textPrimary }]}>5</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Sementes</Text>
          </View>
        </View>
        
        <View style={[styles.settingsSection, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.settingsSectionTitle, { color: colors.textPrimary }]}>
            Preferências
          </Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLabelContainer}>
              {isDark ? (
                <Moon size={20} color={colors.accent} />
              ) : (
                <Sun size={20} color={colors.accent} />
              )}
              <Text style={[styles.settingLabel, { color: colors.textPrimary }]}>
                {isDark ? 'Modo Escuro' : 'Modo Claro'}
              </Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              thumbColor={isDark ? colors.accent : '#f4f3f4'}
              trackColor={{ false: '#767577', true: colors.textSecondary }}
            />
          </View>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLabelContainer}>
              <Text style={[styles.settingLabel, { color: colors.textPrimary }]}>
                Acessibilidade
              </Text>
            </View>
            <Text style={[styles.settingValue, { color: colors.textSecondary }]}>
              Padrão
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLabelContainer}>
              <Text style={[styles.settingLabel, { color: colors.textPrimary }]}>
                Idioma
              </Text>
            </View>
            <Text style={[styles.settingValue, { color: colors.textSecondary }]}>
              Português
            </Text>
          </TouchableOpacity>
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
  scrollContent: {
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#14B8A6',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 20,
    flex: 1,
  },
  profileName: {
    fontFamily: 'Cabin-Bold',
    fontSize: 22,
    marginBottom: 5,
  },
  profileBio: {
    fontFamily: 'Cabin-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statItem: {
    flex: 1,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statValue: {
    fontFamily: 'Cabin-Bold',
    fontSize: 20,
    marginTop: 5,
  },
  statLabel: {
    fontFamily: 'Cabin-Regular',
    fontSize: 12,
  },
  settingsSection: {
    borderRadius: 12,
    padding: 20,
  },
  settingsSectionTitle: {
    fontFamily: 'Cabin-SemiBold',
    fontSize: 18,
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  settingLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    fontFamily: 'Cabin-Medium',
    fontSize: 16,
    marginLeft: 10,
  },
  settingValue: {
    fontFamily: 'Cabin-Regular',
    fontSize: 14,
  },
});