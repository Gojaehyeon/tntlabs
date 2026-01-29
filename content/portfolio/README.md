# 포트폴리오 작성 가이드

## 폴더 구조

```
content/portfolio/
├── _template/           # 템플릿 (복사해서 사용)
│   └── index.mdx
├── my-project/          # 프로젝트 폴더 (폴더명 = 슬러그)
│   ├── index.mdx        # 내용
│   ├── thumbnail.png    # 대표 이미지 (필수)
│   ├── 01.png           # 세부 이미지
│   ├── 02.png
│   └── ...
└── another-project/
    └── ...
```

## 작성 방법

### 1. 프로젝트 폴더 생성
- `_template` 폴더를 복사하여 프로젝트명으로 변경
- 폴더명은 영문 소문자, 하이픈(-) 사용 (예: `my-project`)
- 폴더명이 URL 슬러그가 됨 → `/portfolio/my-project`

### 2. index.mdx 작성
- frontmatter(상단 --- 사이) 수정
- 본문 마크다운 작성

### 3. 이미지 추가
- `thumbnail.png`: 대표 이미지 (필수, 1600x1000)
- `01.png`, `02.png`, ...: 세부 이미지 (1600x1000)

### 4. 본문에서 이미지 사용
```markdown
![설명](/api/portfolio-image/my-project/01.png)
![설명](/api/portfolio-image/my-project/02.png)
```

## Frontmatter 필드

| 필드 | 필수 | 설명 |
|------|------|------|
| title | O | 프로젝트 제목 |
| year | O | 연도 (숫자) |
| description | O | 한 줄 설명 |
| gradient | O | 썸네일 없을 때 배경 |
| tags | O | 기술/분야 태그 배열 |
| client | X | 클라이언트명 |
| duration | X | 프로젝트 기간 |

## 그라디언트 예시

```
linear-gradient(135deg, #667eea 0%, #764ba2 100%)  # 보라
linear-gradient(135deg, #f093fb 0%, #f5576c 100%)  # 핑크
linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)  # 파랑
linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)  # 초록
linear-gradient(135deg, #fa709a 0%, #fee140 100%)  # 오렌지
```
