# 📁 React Native 앱 프로젝트 구조 정리 (Twogether)

> 이 문서는 Twogether 앱의 **폴더 구조**, **기능별 역할**, 그리고 **React 웹 개발자의 관점에서의 적응 가이드**를 담고 있습니다.

---

## 🧭 기본 디렉토리 구조

```sql
project-root/
├── app/ # 라우팅 단위 (Next.js처럼)
│ ├── index.tsx # 홈
│ ├── trip/
│ │ ├── index.tsx
│ │ └── [id].tsx
│ ├── upload/
│ │ └── index.tsx
│ └── _layout.tsx # 탭/스택 설정 등 공통 UI
│
├── components/ # 공통 UI 컴포넌트
│ └── common/
│ ├── Button.tsx
│ └── UploadImage.tsx
│
├── features/ # 기능 단위 모듈 (UI + 상태 + 훅)
│ └── upload/
│ ├── components/
│ ├── hooks/
│ └── store.ts
│
├── hooks/ # 전역 커스텀 훅
├── stores/ # zustand 전역 저장소
├── constants/ # 테마, 상수
├── utils/ # 유틸 함수 모음
├── docs/ # 프로젝트 문서
│ └── issue-workflow.md
└── .github/ # Github Actions, 이슈 템플릿 등
```

---
<br/>

## 🧩 주요 폴더 역할 요약

| 디렉토리      | 역할 설명 |
|---------------|-----------|
| `app/`        | 라우팅 단위. 화면 전환은 모두 여기에서 이루어짐 |
| `components/` | 공통 UI 컴포넌트. `Button`, `Tag`, `UploadImage` 등 |
| `features/`   | 특정 기능 단위로 관련 로직을 묶어서 모듈화 |
| `hooks/`      | 전역 훅 (예: `useToast`, `useColorScheme`) |
| `stores/`     | 상태 관리 (Zustand 등). `userStore.ts`, `uploadStore.ts` |
| `constants/`  | 앱에서 사용하는 상수 및 테마 설정 |
| `utils/`      | 날짜, 문자열 등 범용 유틸 함수 |
| `docs/`       | md 기반 설명서. 이 문서도 포함 |
| `.github/`    | Github 이슈 템플릿, Jira 연동 워크플로우 정의 |

---

## 📌 기능 예시: 장소 업로드

**한 화면에 여러 스텝/상태가 존재하는 복합 UI의 경우**, 상태 기반 전환으로 처리하며 구조를 다음과 같이 분리합니다:

```sql
features/upload/
├── components/
│ ├── ImagePreview.tsx
│ ├── AddressInput.tsx
│ └── TagEditor.tsx
├── hooks/
│ └── useUploadStep.ts
├── store.ts
```

그리고 `app/upload/index.tsx`는 오직 조합만 담당:

```tsx
import ImagePreview from '@/features/upload/components/ImagePreview';
import AddressInput from '@/features/upload/components/AddressInput';
import TagEditor from '@/features/upload/components/TagEditor';

export default function UploadScreen() {
  return (
    <View>
      <ImagePreview />
      <AddressInput />
      <TagEditor />
    </View>
  );
}
```

## 💡 구조 설계 시 기준
app/ : URL 라우팅과 뷰의 기본 진입점

features/ : 특정 기능(업로드, 피드 등) 중심으로 UI, 상태, 훅 모듈화

components/ : 재사용 가능한 단위 UI들

Zustand : 글로벌/기능별 상태 분리

---

Updated: 2025-06-09