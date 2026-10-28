// 홈 화면 "자격·활동" 뱃지 목록입니다. 항목을 추가하거나 고친 뒤 커밋·푸시하면 사이트에 반영됩니다.
//
// 자격증(certs)
//   name   필수  자격증 이름
//   date   필수  취득 연월 (예: '2026.09')
//   by     선택  발급 기관
//   main   선택  true 이면 강조 색으로 표시
//   link   선택  확인용 링크
//
// 스터디·세션(activities)
//   name   필수  활동 이름
//   date   필수  기간 또는 날짜 (예: '2026.10 – 현재', '2026.08.21')
//   role   선택  참여 형태 (예: '멘토', '참여', '발표')
//   by     선택  주최
//   link   선택  관련 링크
//
// 위에서부터 보이는 순서대로 적습니다. 최신 항목을 맨 위에 두세요.

window.BADGES = {
  certs: [
    { name: 'SQLP', date: '2026.09', by: '한국데이터산업진흥원', main: true },
    { name: 'TOEIC Speaking IM1', date: '2026.04', by: 'ETS' },
    { name: 'SQLD', date: '2024.09', by: '한국데이터산업진흥원' },
    { name: '정보처리기사', date: '2023.06', by: '한국산업인력공단' },
  ],
  activities: [
    { name: 'SQLP 스터디', date: '2026.10 – 현재', role: '멘토 · 운영', link: 'https://sqlp-study-2026.github.io/sqlp-archive/' },
  ],
};
