import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Platform 
} from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Palette, Type, Camera, Send } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function CreateScreen() {
  const { colors, isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('text');
  const [content, setContent] = useState('');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'text':
        return (
          <Animated.View 
            entering={FadeInDown.duration(300)} 
            style={[styles.textInputContainer, { backgroundColor: colors.cardBackground }]}
          >
            <TextInput
              style={[styles.textInput, { color: colors.textPrimary }]}
              multiline
              placeholder="Compartilhe suas reflexões, ideias ou histórias..."
              placeholderTextColor={colors.textSecondary}
              value={content}
              onChangeText={setContent}
            />
          </Animated.View>
        );
      case 'image':
        return (
          <Animated.View 
            entering={FadeInDown.duration(300)}
            style={[styles.uploadContainer, { backgroundColor: colors.cardBackground }]}
          >
            <Image size={40} color={colors.textSecondary} />
            <Text style={[styles.uploadText, { color: colors.textPrimary }]}>
              Toque para fazer upload de uma imagem
            </Text>
            <Text style={[styles.uploadSubtext, { color: colors.textSecondary }]}>
              Compartilhe fotos, desenhos ou artes visuais
            </Text>
          </Animated.View>
        );
      case 'drawing':
        return (
          <Animated.View 
            entering={FadeInDown.duration(300)}
            style={[styles.drawingContainer, { backgroundColor: colors.cardBackground }]}
          >
            <Palette size={40} color={colors.textSecondary} />
            <Text style={[styles.uploadText, { color: colors.textPrimary }]}>
              Toque para criar um desenho
            </Text>
            <Text style={[styles.uploadSubtext, { color: colors.textSecondary }]}>
              Expresse suas ideias visualmente
            </Text>
          </Animated.View>
        );
      case 'camera':
        return (
          <Animated.View 
            entering={FadeInDown.duration(300)}
            style={[styles.cameraContainer, { backgroundColor: colors.cardBackground }]}
          >
            <Camera size={40} color={colors.textSecondary} />
            <Text style={[styles.uploadText, { color: colors.textPrimary }]}>
              Toque para abrir a câmera
            </Text>
            <Text style={[styles.uploadSubtext, { color: colors.textSecondary }]}>
              Captura o momento presente
            </Text>
          </Animated.View>
        );
      default:
        return null;
    }
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Criar
        </Text>
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabItem, 
              activeTab === 'text' && { backgroundColor: colors.primary, opacity: 0.9 }
            ]}
            onPress={() => setActiveTab('text')}
          >
            <Type 
              size={22} 
              color={activeTab === 'text' ? colors.background : colors.textSecondary} 
            />
            <Text 
              style={[
                styles.tabText, 
                { color: activeTab === 'text' ? colors.background : colors.textSecondary }
              ]}
            >
              Texto
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.tabItem, 
              activeTab === 'image' && { backgroundColor: colors.accent, opacity: 0.9 }
            ]}
            onPress={() => setActiveTab('image')}
          >
            <Image 
              size={22} 
              color={activeTab === 'image' ? colors.background : colors.textSecondary} 
            />
            <Text 
              style={[
                styles.tabText, 
                { color: activeTab === 'image' ? colors.background : colors.textSecondary }
              ]}
            >
              Imagem
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.tabItem, 
              activeTab === 'drawing' && { backgroundColor: colors.secondary, opacity: 0.9 }
            ]}
            onPress={() => setActiveTab('drawing')}
          >
            <Palette 
              size={22} 
              color={activeTab === 'drawing' ? colors.background : colors.textSecondary} 
            />
            <Text 
              style={[
                styles.tabText, 
                { color: activeTab === 'drawing' ? colors.background : colors.textSecondary }
              ]}
            >
              Desenho
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.tabItem, 
              activeTab === 'camera' && { backgroundColor: colors.tertiary, opacity: 0.9 }
            ]}
            onPress={() => setActiveTab('camera')}
          >
            <Camera 
              size={22} 
              color={activeTab === 'camera' ? colors.background : colors.textSecondary} 
            />
            <Text 
              style={[
                styles.tabText, 
                { color: activeTab === 'camera' ? colors.background : colors.textSecondary }
              ]}
            >
              Câmera
            </Text>
          </TouchableOpacity>
        </View>
        
        {renderTabContent()}
        
        <View style={styles.topicSelectContainer}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Escolha um tema:
          </Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.topicTagsContainer}
          >
            <TouchableOpacity style={[styles.topicTag, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.topicTagText}>Sustentabilidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topicTag, { backgroundColor: '#FF5722' }]}>
              <Text style={styles.topicTagText}>Justiça Social</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topicTag, { backgroundColor: '#9C27B0' }]}>
              <Text style={styles.topicTagText}>Diversidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topicTag, { backgroundColor: '#2196F3' }]}>
              <Text style={styles.topicTagText}>Tecnologia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topicTag, { backgroundColor: '#CDDC39' }]}>
              <Text style={styles.topicTagText}>Empatia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topicTag, { backgroundColor: '#FF9800' }]}>
              <Text style={styles.topicTagText}>Crises</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        <TouchableOpacity 
          style={[styles.submitButton, { backgroundColor: colors.accent }]}
        >
          <Send size={20} color={colors.background} />
          <Text style={styles.submitButtonText}>Compartilhar</Text>
        </TouchableOpacity>
        
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
  scrollContent: {
    padding: 20,
    paddingTop: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 4,
  },
  tabText: {
    fontSize: 12,
    fontFamily: 'Cabin-Medium',
    marginLeft: 4,
  },
  textInputContainer: {
    minHeight: 200,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  textInput: {
    fontFamily: 'Cabin-Regular',
    fontSize: 16,
    textAlignVertical: 'top',
    height: 200,
  },
  uploadContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
  },
  drawingContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
  },
  cameraContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
  },
  uploadText: {
    fontFamily: 'Cabin-Medium',
    fontSize: 16,
    marginTop: 10,
  },
  uploadSubtext: {
    fontFamily: 'Cabin-Regular',
    fontSize: 14,
    marginTop: 5,
  },
  topicSelectContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Cabin-SemiBold',
    fontSize: 16,
    marginBottom: 10,
  },
  topicTagsContainer: {
    paddingRight: 20,
  },
  topicTag: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  topicTagText: {
    color: 'white',
    fontFamily: 'Cabin-Medium',
    fontSize: 14,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  submitButtonText: {
    fontFamily: 'Cabin-SemiBold',
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
});