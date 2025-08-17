/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { KAKAO_APP_KEY } from '@env';
import App from './App';

// 카카오 SDK 초기화
if (KAKAO_APP_KEY) {
  console.log('카카오 SDK 초기화 중...');
  // React Native에서는 네이티브 모듈을 통해 초기화해야 함
  // 여기서는 WebView를 통해 초기화하므로 별도 초기화 불필요
}

AppRegistry.registerComponent('TwoGether', () => App);