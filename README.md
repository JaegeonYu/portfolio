# portfolio

유재건의 포트폴리오 페이지입니다. → https://jaegeonyu.github.io/portfolio/

빌드 과정 없이 정적 파일 그대로 GitHub Pages로 배포합니다. `main`에 푸시하면 1~2분 뒤 사이트에 반영됩니다.

| 파일 | 내용 |
|---|---|
| `index.html` | 홈 (경력, 프로젝트, 운영 개선, 개인 프로젝트, 학력, 기술, 연락처) |
| `data/badges.js` | 홈의 "자격·활동" 뱃지 목록 (자격증, 스터디·세션) |
| `sqlp-study.html` | 개인 프로젝트 상세: SQLP 스터디 운영 시스템 |
| `assets/` | 프로필 사진 등 이미지 |

## 수정한 뒤 확인하기

`index.html`을 브라우저로 바로 열면 됩니다. 서버를 띄울 필요는 없습니다.

## 자격증·스터디·세션 뱃지 추가

`data/badges.js`만 고치면 됩니다. HTML은 건드리지 않습니다.

```js
certs: [
  { name: 'AWS SAA', date: '2027.03', by: 'Amazon Web Services' },   // ← 맨 위에 추가
  { name: 'SQLP', date: '2026.09', by: '한국데이터산업진흥원', main: true },
  ...
],
activities: [
  { name: '○○ 컨퍼런스', date: '2027.05.20', role: '참여', link: 'https://...' },  // ← 맨 위에 추가
  { name: 'SQLP 스터디', date: '2026.10 – 현재', role: '멘토 · 운영', link: '...' },
],
```

- 필드 설명은 파일 맨 위 주석에 있습니다.
- `main: true`를 주면 강조 색으로 표시됩니다. 대표 자격 하나에만 쓰는 것을 권합니다.
- `link`를 넣으면 뱃지를 눌렀을 때 그 주소가 새 탭으로 열립니다.
- 목록이 비어 있으면 그 묶음(제목 포함)은 화면에 나오지 않습니다.

## 회사 프로젝트 추가 (홈의 "프로젝트")

`index.html`에서 `<section id="projects">` 안의 `<article>` 하나를 복사해 원하는 위치에 붙여 넣고 내용만 바꿉니다. 최신 프로젝트가 위에 오도록 둡니다.

```html
<article style="... 기존 article과 같은 style ...">
<div style="...">
<h3 style="margin: 0; font-size: 21px">프로젝트 이름</h3>
<span style="...">2027.01 – 2027.04 (4개월) · emroCloud</span>
</div>
<p style="...">무엇이 문제였고 무엇을 맡았는지 두세 문장</p>
<ul style="...">
<li>한 일과 그 이유</li>
</ul>
<p style="...">사용 기술</p>
</article>
```

- 숫자로 보여 줄 성과가 있으면 "보존기간 지난 로그 데이터 정리" 카드처럼 오른쪽 숫자 상자가 있는 형태를 복사합니다.
- 진행 중인 프로젝트 기간을 자동으로 늘리려면 `현재 (<span data-since="2027-01">1개월</span>)`처럼 시작 연월을 적습니다.
- 운영 중 고친 작은 문제는 `<section id="ops">`의 작은 카드를 복사합니다.

## 개인 프로젝트 추가 (상세 페이지 포함)

1. 홈의 `<section id="side">` 안의 `<article>`을 복사해 요약 카드를 만듭니다.
2. 상세 페이지가 필요하면 `sqlp-study.html`을 복사해 새 파일(예: `my-project.html`)을 만들고, 제목과 각 섹션 내용을 바꿉니다.
   - 구조 그림이 필요 없으면 "어떻게 돌아가나요"의 그림 부분(`overflow-x: auto`로 시작하는 `<div>`)을 통째로 지웁니다.
3. 1에서 만든 카드의 "자세히" 링크를 새 파일 이름으로 바꿉니다.

## 반영하기

```bash
git add -A
git commit -m "프로젝트 추가: ○○"
git push
```
