import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Heart } from 'lucide-react-native';
import { ContentItem } from '@/constants/Content';

type ContentCardProps = {
  item: ContentItem;
  horizontal?: boolean;
};

export default function ContentCard({ item, horizontal = false }: ContentCardProps) {
  const { colors } = useTheme();
  
  if (horizontal) {
    return (
      <TouchableOpacity
        style={[styles.horizontalContainer, { backgroundColor: colors.cardBackground }]}
      >
        <Image source={{ uri: item.image }} style={styles.horizontalImage} />
        <View style={styles.horizontalContent}>
          <View style={[styles.tag, { backgroundColor: item.tagColor }]}>
            <Text style={styles.tagText}>{item.tag}</Text>
          </View>
          <Text 
            style={[styles.title, { color: colors.textPrimary }]} 
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <View style={styles.metaContainer}>
            <Text style={[styles.author, { color: colors.textSecondary }]}>
              {item.author}
            </Text>
            <View style={styles.likesContainer}>
              <Heart size={14} color={colors.accent} fill={colors.accent} />
              <Text style={[styles.likesText, { color: colors.textSecondary }]}>
                {item.likes}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.cardBackground }]}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={[styles.tag, { backgroundColor: item.tagColor }]}>
          <Text style={styles.tagText}>{item.tag}</Text>
        </View>
        <Text 
          style={[styles.title, { color: colors.textPrimary }]} 
          numberOfLines={2}
        >
          {item.title}
        </Text>
        <View style={styles.metaContainer}>
          <Text style={[styles.author, { color: colors.textSecondary }]}>
            {item.author}
          </Text>
          <View style={styles.likesContainer}>
            <Heart size={14} color={colors.accent} fill={colors.accent} />
            <Text style={[styles.likesText, { color: colors.textSecondary }]}>
              {item.likes}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 15,
  },
  horizontalContainer: {
    width: 270,
    borderRadius: 12,
    marginRight: 15,
    overflow: 'hidden',
  },
  horizontalImage: {
    width: '100%',
    height: 140,
  },
  horizontalContent: {
    padding: 15,
  },
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  tagText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 12,
    color: '#fff',
  },
  title: {
    fontFamily: 'Cabin-SemiBold',
    fontSize: 16,
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    fontFamily: 'Cabin-Regular',
    fontSize: 12,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    fontFamily: 'Cabin-Regular',
    fontSize: 12,
    marginLeft: 4,
  },
});