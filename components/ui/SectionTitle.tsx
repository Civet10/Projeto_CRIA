import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronRight } from 'lucide-react-native';

type SectionTitleProps = {
  title: string;
  onSeeAll?: () => void;
};

export default function SectionTitle({ title, onSeeAll }: SectionTitleProps) {
  const { colors } = useTheme();
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        {title}
      </Text>
      
      {onSeeAll && (
        <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAll}>
          <Text style={[styles.seeAllText, { color: colors.accent }]}>
            Ver Todos
          </Text>
          <ChevronRight size={16} color={colors.accent} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Cabin-SemiBold',
    fontSize: 18,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 14,
  },
});