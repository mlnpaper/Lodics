export const locationKorean = {
  pageTitle: '회사위치',
  summarySemiTitle: '요약',
  adrressSemiTitle: '주소',
  subwaySemiTitle: '지하철역',
  busSemiTitle: '버스정류장',
  summaryContent: `지하철 2호선 뚝섬역 4번 출구, 신한은행 골목으로 들어와, 메가커피 골목으로 500m 직진.
  1층 '바다화원' 건물`,
  adrressContent: `서울특별시 성동구 상원4길 6-1 태양빌딩 3층 (성수동1가 14-32)`,
  subwayContent: [
    { subwayStation: '뚝섬역', line: '2', lineColor: '#37B32D', exit: '4번 출구', onFoot: '도보 2분' },
    { subwayStation: '성수역', line: '2', lineColor: '#37B32D', exit: '1번 출구', onFoot: '도보 10분' },
    { subwayStation: '서울숲역', line: '분당', lineColor: '#E9AF17', exit: '1번 출구', onFoot: '도보 13분' },
  ],
  busContent: [
    { busStop: '뚝섬역4번출구', busNumber: '04239', distance: '30', midnight: '심야' },
    { busStop: '뚝섬역3,5번출구', busNumber: '04238', distance: '70', midnight: '심야' },
    { busStop: '뚝섬역2번출구', busNumber: '04237', distance: '198', midnight: '심야' },
  ],
};

export const locationEnglish = {
  pageTitle: 'Company Location',
  summarySemiTitle: 'Summary',
  adrressSemiTitle: 'Address',
  subwaySemiTitle: 'Subway Station',
  busSemiTitle: 'Bus Stop',
  summaryContent: `지하철 2호선 뚝섬역 4번 출구, 신한은행 골목으로 들어와, 메가커피 골목으로 500m 직진.___eng
  1층 '바다화원' 건물___eng`,
  adrressContent: `(04790) 3F Taeyang Bldg, 6-1 Sangwon 4-gil, Seongdong-gu, Seoul, KOREA`,
  subwayContent: [
    { subwayStation: 'Ttukseom Station', line: '2', lineColor: '#37B32D', exit: 'Exit 4', onFoot: '2 minutes on foot' },
    { subwayStation: 'Seongsu Station', line: '2', lineColor: '#37B32D', exit: 'Exit 1', onFoot: '10 minutes on foot' },
    {
      subwayStation: 'Seoul Forest Station',
      line: '분당',
      lineColor: '#E9AF17',
      exit: 'Exit 1',
      onFoot: '13 minutes on foot',
    },
  ],
  busContent: [
    { busStop: 'Exit 4 of Ttukseom Station', busNumber: '04239', distance: '30', midnight: 'midnight' },
    { busStop: 'Exit 3, 5 of Ttukseom Station', busNumber: '04238', distance: '70', midnight: 'midnight' },
    { busStop: 'Exit 2 of Ttukseom Station', busNumber: '04237', distance: '198', midnight: 'midnight' },
  ],
};
