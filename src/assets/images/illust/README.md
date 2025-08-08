# 일러스트레이션 (Illustrations)

이 폴더는 앱에서 사용하는 모든 일러스트레이션을 관리합니다.

## 폴더 구조

```
illustrations/
├── cats/           # 고양이 캐릭터 일러스트
│   ├── happy/      # 행복한 고양이들
│   ├── sad/        # 슬픈 고양이들
│   ├── couple/     # 커플 고양이들
│   └── solo/       # 혼자 있는 고양이들
├── emotions/       # 감정 표현 일러스트
├── activities/     # 활동 관련 일러스트
└── scenes/         # 장면별 일러스트
```

## 파일명 규칙

- **카테고리-상태-이름**: `cat-happy-main.svg`
- **감정-강도**: `emotion-love-intense.svg`
- **활동-타입**: `activity-date-cafe.svg`
- **장면-시간**: `scene-sunset-park.svg`

## 사용법

SVG 파일을 직접 import하여 React 컴포넌트로 사용합니다:

```typescript
import MainCatSvg from '@/assets/images/illust/cats/main_cat.svg';
import MainShadowSvg from '@/assets/images/illust/cats/main_shadow.svg';

// 컴포넌트에서 사용
<MainCatSvg width={250} height={150} />
<MainShadowSvg width={250} height={15} />
```

## 설정

`react-native-svg-transformer`가 설정되어 있어 SVG 파일을 React 컴포넌트로 직접 import할 수 있습니다.
