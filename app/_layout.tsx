import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts } from 'expo-font';
import { 
  DmSerifDisplay_400Regular,
  DmSerifDisplay_400Regular_Italic 
} from '@expo-google-fonts/dm-serif-display';
import { 
  Cabin_400Regular,
  Cabin_500Medium,
  Cabin_600SemiBold,
  Cabin_700Bold
} from '@expo-google-fonts/cabin';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Platform } from 'react-native';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();
  
  const [fontsLoaded, fontError] = useFonts({
    'DmSerifDisplay-Regular': DmSerifDisplay_400Regular,
    'DmSerifDisplay-Italic': DmSerifDisplay_400Regular_Italic,
    'Cabin-Regular': Cabin_400Regular,
    'Cabin-Medium': Cabin_500Medium,
    'Cabin-SemiBold': Cabin_600SemiBold,
    'Cabin-Bold': Cabin_700Bold,
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return null to keep splash screen visible while fonts load
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack 
        screenOptions={{ 
          headerShown: false,
          contentStyle: Platform.select({
            web: {
              maxWidth: 1200,
              width: '100%',
              alignSelf: 'center',
            },
            default: {}
          })
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}