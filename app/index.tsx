// app/index.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 투게더에 오신 걸 환영합니다!</Text>
      <Button title="프로필 보기" onPress={() => router.push('/profile')} />
      <Button title="여행 목록으로 이동" onPress={() => router.push('/trip')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
});
