# TwoGether

React Native 기반의 커플 앱입니다.

## 아이콘 관리

### SVG 아이콘 추가하기

1. SVG 파일을 `src/assets/images/` 폴더에 추가:
   - `common/` - 공통 아이콘들
   - `icons/` - 특정 기능 아이콘들
   - `navigation/` - 네비게이션 아이콘들

2. 아이콘 생성 스크립트 실행:
   ```bash
   npm run generate-icons
   ```
   - SVG 파일들이 `generated/icons.ts`로 자동 변환됩니다
   - `generated/` 폴더는 .gitignore에 포함되어 Git에서 제외됩니다

3. 컴포넌트에서 사용:
   ```typescript
   import SvgIcon from '../components/icons/SvgIcon';
   
   <SvgIcon name="search" width={24} height={24} color="#3B82F6" />
   ```

### 프로젝트 구조

```
src/
├── assets/
│   ├── images/          # 원본 SVG 파일들 (소스)
│   │   ├── common/
│   │   ├── icons/
│   │   └── navigation/
│   └── fonts/           # 폰트 파일들
├── components/
│   └── icons/           # SVG 아이콘 컴포넌트들
└── ...

generated/                # 자동 생성된 파일들 (Git 제외)
└── icons.ts             # SVG → TypeScript 변환 결과

scripts/
└── generate-icons.js    # 아이콘 생성 도구
```

### 사용 가능한 아이콘들

- **Navigation**: home, map, calendar, my, place
- **Common**: search, close, menu, plus, like, unlike, share, share-sm, arrowTop, pw_open, pw_close, myPosition, waypoint
- **Icons**: store

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 아이콘 생성 (SVG 파일 추가 후)
npm run generate-icons

# iOS 시뮬레이터 실행
npm run ios

# Android 에뮬레이터 실행
npm run android
```

## 폰트 설정

앱에서는 다음 폰트를 사용합니다:
- **Gowun Dodum**: 기본 텍스트
- **Catways**: 로고 텍스트

## 색상 팔레트

브랜드 색상과 그레이스케일 색상이 정의되어 있습니다. `src/theme/colors.ts`에서 확인할 수 있습니다.
