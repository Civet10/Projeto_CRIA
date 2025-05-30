import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Heart, MessageCircle, Repeat2 } from 'lucide-react-native';
import { CommunityPost as CommunityPostType } from '@/constants/CommunityPosts';

type CommunityPostProps = {
  post: CommunityPostType;
};

export default function CommunityPost({ post }: CommunityPostProps) {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View 
            style={[
              styles.anonymousAvatar, 
              { backgroundColor: post.avatarColor }
            ]}
          >
            <Text style={styles.anonymousText}>
              {post.username.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={[styles.username, { color: colors.textPrimary }]}>
            {post.username}
          </Text>
        </View>
        
        <View style={[styles.topicTag, { backgroundColor: post.topicColor }]}>
          <Text style={styles.topicText}>{post.topic}</Text>
        </View>
      </View>
      
      <Text style={[styles.content, { color: colors.textPrimary }]}>
        {post.content}
      </Text>
      
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Heart size={20} color={colors.textSecondary} />
          <Text style={[styles.actionText, { color: colors.textSecondary }]}>
            {post.likes}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={20} color={colors.textSecondary} />
          <Text style={[styles.actionText, { color: colors.textSecondary }]}>
            {post.comments}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Repeat2 size={20} color={colors.textSecondary} />
          <Text style={[styles.actionText, { color: colors.textSecondary }]}>
            {post.shares}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  anonymousAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  anonymousText: {
    color: '#fff',
    fontFamily: 'Cabin-Bold',
    fontSize: 16,
  },
  username: {
    fontFamily: 'Cabin-Medium',
    fontSize: 16,
    marginLeft: 10,
  },
  topicTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  topicText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 12,
    color: '#fff',
  },
  content: {
    fontFamily: 'Cabin-Regular',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontFamily: 'Cabin-Regular',
    fontSize: 14,
    marginLeft: 6,
  },
});