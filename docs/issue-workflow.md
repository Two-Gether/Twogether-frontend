# GitHub ↔ Jira 자동 이슈 생성 및 완료 워크플로

이 문서는 GitHub Issue 생성 → Jira 이슈 자동 생성 및 브랜치 생성,  
그리고 GitHub PR 병합 → Jira 이슈 자동 완료까지의 **전체 연동 워크플로**를 설명합니다.

---

## ✅ 전체 흐름 요약

### 1. 이슈 생성 시

- GitHub 이슈 작성 (템플릿 기반)
- 워크플로 트리거 → Jira 이슈 자동 생성
- Jira 이슈 제목에 `[FE]` 또는 `[BE]` prefix 자동 삽입
- 입력한 브랜치명 기반으로 GitHub 브랜치 자동 생성

### 2. 이슈 완료 처리 시

- GitHub에서 PR 병합 시 `Closes #이슈번호` 커밋 사용
- GitHub 이슈는 자동 `Closed`
- 별도 워크플로에서 Jira 이슈 상태 자동 `완료`로 전환

---

## 🛠 사용 방법

### 1. GitHub 이슈 생성

경로: `Issues → New issue → 이슈 생성 템플릿`

입력 항목:
- 🎟️ 상위 작업 (TD-xx)
- 🌳 브랜치명 (예: `feature`, `chore`, `bug`, `subtask`)
- 📝 상세 설명
- ✅ 체크리스트 (자유롭게 입력 가능)

→ 입력 완료 후 자동으로 Jira 이슈가 생성되고 브랜치도 푸시됩니다.

### 2. PR 작성 및 이슈 닫기

- GitHub PR의 커밋 또는 description에 다음과 같이 작성:
  ```
  Closes #2
  ```

→ GitHub 이슈는 자동으로 `Closed` 상태가 되며,  
→ `close-jira-issue.yml` 워크플로에 의해 Jira 이슈도 자동으로 `완료` 상태로 전환됩니다.

---

## ⚙️ 연동 구성 파일

| 파일 | 설명 |
|------|------|
| `.github/ISSUE_TEMPLATE/issue-form.yml` | 이슈 작성 시 입력받는 템플릿 정의 |
| `.github/workflows/create-jira-issue.yml` | GitHub 이슈 생성 시 Jira 이슈 생성 + 브랜치 생성 |
| `.github/workflows/close-jira-issue.yml` | GitHub 이슈 닫힘 시 Jira 이슈 상태를 `완료`로 전환 |

---

## 🔐 Secrets 목록

다음 값들은 GitHub Repository > Settings > Secrets > Actions 에 등록되어야 합니다:

| 이름 | 예시 | 설명 |
|------|------|------|
| `JIRA_API_TOKEN` | `ATCT...` | Atlassian에서 발급한 API 토큰 |
| `JIRA_USER_EMAIL` | `your.email@gmail.com` | 위 토큰을 발급한 Atlassian 계정의 이메일 |
| `JIRA_BASE_URL` | `https://your-org.atlassian.net` | Jira 인스턴스 URL (마지막 `/` 제외) |

---

## 🧩 워크플로 브랜치 전략

- 실제 작업은 `develop` 브랜치 기준에서 진행됩니다.
- 이슈 작성 시 브랜치명 입력 → `type/TD-xx` 형식으로 브랜치 생성 및 푸시
- PR은 `develop`으로 병합

---

## 📝 기타 팁

- 체크리스트는 Markdown 형식 그대로 작성 (`- [ ] 항목`)
  - Jira에서는 체크박스로 렌더링되지 않지만 텍스트로 확인 가능
- 이슈 제목에 `[FE]`, `[BE]` prefix는 GitHub Repository명을 기준으로 자동 분기됨
- 커밋 메시지에 `Closes #이슈번호`만 써주면 워크플로가 자동으로 작동

---
<br/><br/>

## 📌 향후 개선 가능성

- GitHub PR 생성 시 자동으로 Jira 상태를 `리뷰 요청`으로 변경
- GitHub PR 승인 시 `병합 준비`, 머지 시 `완료` 등 워크플로 상세화
- Jira 이슈에 PR 링크 자동 첨부 (gajira smart-commit 이용)