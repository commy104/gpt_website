/*
'미래의 먹방 유튜버', 0
'운동선수', 1
'탄수화물 중독자', 2
'육식주의자', 3
'김단백씨', 4
'키토제닉러', 5
'빵순이', 6
'소식좌', 7
*/

const qnaList = [
  {
    q: '1. 고깃집에서 고기를 구워 먹을 때 당신의 선택은?',
    a: [
      { answer: 'a. 고기 먹을 땐 무조건 밥이 필요하다.', type: [0, 1, 2, 6, 7]},
      { answer: 'b. 밥은 무슨. 고깃집에 왔는데 고기로 배를 채워야지', type: [3, 4, 5] },
      //{ answer: 'c. 난 잘 모르겠어..', type: [7, 11 ] },
    ]
  },
  {
    q: '2. 다이어트를 결심한 당신 어떤 다이어트를 할 것인가? ',
    a: [
      { answer: 'a. 황제 다이어트 (탄수화물의 섭취를 금하고 단백질 섭취를 증가시키는 방법)', type: [0, 1, 3, 4] },
      { answer: 'b. 저탄고지 다이어트 (탄수화물과 단백질은 적게 섭취하도 지방 섭취를 증가시키는 방법)', type: [2, 5, 6, 7] },
      //{ answer: 'c. 상대방에게 먼저 연락 올 때까지 기다린다.', type: [7, 4, 9, 11] },
    ]
  },
  {
    q: '3. 고기를 맛있게 먹는데 마지막 남은 한 점이 비계다 당신의 선택은?',
    a: [
      { answer: 'a. 비계도 고소하니 맛있다 남김없이 먹는다', type: [0, 1, 4, 5] },
      { answer: 'b. 비계는 지방이니까 살코기만 먹고 남긴다', type: [2, 3, 6, 7]},
      //{ answer: 'c. 완벽한 분위기, 완벽한 타이밍에서 고백한다.', type: [0, 6, 5, 4] }
    ]
  },
  {
    q: '4. 기름진 치킨을 먹을 때 당신은?',
    a: [
      { answer: 'a. 치킨만 너무 많이 먹으면 느끼해서 물린다 이때 치킨무를 같이 먹어줘야지', type: [2, 5, 6, 7]},
      { answer: 'b. 치킨이 느끼한지 잘 모르겠다 그냥 맛있다 ', type: [0, 1, 3, 4] },
      //{ answer: 'c. 센스있는 "우리 내일은 연인으로 만날까요" ', type: [0, 3, 6, 5 ] },
    ]
  },
  {
    q: '5. 너무 바빠서 한 끼도 먹지 못한 오늘, 집에 남은 것은 두 가지뿐 어떤 것을 먹을 것인가?',
    a: [
      { answer: 'a. 퍽퍽한 삶은 닭가슴살', type: [0, 1, 3, 4] },
      { answer: 'b. 딱딱한 바게트', type: [2, 5, 6, 7]},
      //{ answer: 'c. 어차피 내 연인인데 왜?? 모든 스킨십 다 돼!', type: [2, 5, 8] },
    ]
  },

  {
    q: '6. 미국으로 유학을 온지 어느덧 1년이 지났다. 당신은 한국의 음식이 그리운가?',
    a: [
      { answer: 'a. 한국의 국 + 밥 문화가 그립다', type: [1, 2, 4, 5] },
      { answer: 'b. 양식을 좋아해서 별로 그립지 않다', type: [0, 3, 6, 7]},
      //{ answer: 'c. 이미 깜짝 이벤트 다 준비해놨어', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: '7. 치킨을 먹을 때 치밥을 하는 편인가?',
    a: [
      { answer: 'a. 치킨은 밥이랑 잘 어울린다.', type: [1, 2, 5, 6] },
      { answer: 'b. 치킨은 그냥 맛있다 굳이 밥이랑 먹을 필요 없다', type: [0, 3, 4, 7]},
      //{ answer: 'c. "오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?"라고 하며 단번에 눈치챈다', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. 식사에 밥이 없으면 식사를 한 것 같지 않다',
    a: [
      { answer: 'a. 한국인은 밥심이지 ', type: [0, 1, 2] },
      { answer: 'b. 밥이 없어도 괜찮다', type: [3, 4, 5, 6, 7] },
      //{ answer: 'c. 집 앞까지 데려다준다.', type: [1, 7, 11 ] },
    ]
  },
  {
    q: '9. 두 가지 라면 중 어떤 라면이 더 땡기는가?',
    a: [
      { answer: 'a. 그냥 불닭', type: [0, 1, 2, 3, 4, 5]},
      { answer: 'b. 까르보 불닭', type: [5, 6, 7]},
      //{ answer: 'c. 연인에게 연락 올 때까지 무한 카톡, 무한 전화', type: [2, 10, 8, 4 ] },
    ]
  },
  {
    q: '10. 초중고 시절에 우유 급식을 꼭 신청했는가?',
    a: [
      { answer: 'a. 우유에 제티는 필수!', type: [0, 3, 5, 6, 7]},
      { answer: 'b. 우유 싫어', type: [1, 2, 4] },
      //{ answer: 'c. 헐 대박, 어디야?? 당장 나갈게!', type: [1, 7, 3, 10, 8 ] },
    ]
  },
]

const infoList = [
  {
    name: '먹는게 제일 좋아 미래의 <먹방 유튜버>',
    desc: '뭐든 다 잘 먹는 스타일, 편식하는 사람 이해 안 됨, 외식 같이 갈 때 제일 편한 친구'
  },
  {
    name: '에너지가 필요해 당신은 <운동선수>',
    desc: '평소에 헬스 같은 운동을 좋아하는 편, 느끼한 음식 싫어함, 고기를 먹어도 담백한 부위만, 고기를 먹을 때 밥을 같이 먹는 편'
  },
  {
    name: '밥이 제일 좋아 <탄수화물 중독자>',
    desc: '주변에서 빵순이, 빵돌이라는 얘기 많이 들음, 그냥 맨밥만 먹을 수 있을 정도로 쌀 러버, 육류 섭취 잘 안 하는 편, 겨울에 감자, 고구마 무조건 먹어줌'
  },
  {
    name: '전생에 사자였나? <육식주의자>',
    desc: '고기집가서 밥 시키는 친구들 이해 안됨, 고기는 가리지 않고 모두 잘 먹음, 치즈, 우유 등 유제품 좋아하는 편'
  },
  {
    name: '담백한 고기가 좋아 <김단백씨>',
    desc: '비계보단 살코기가 더 좋아 !, 고기만 있으면 한끼 ok, 붉은살 생선보다는 흰살 생선, 계란이나 햄이라도 없으면 밥먹기 싫어'
  },
  {
    name: '양보단 질이지! <키토제닉러>',
    desc: '적게 먹더라도 맛있는걸 먹고싶어, 견과류도 좋아, 건면은 이상하게 맛없더라.. 그냥 라면이 좋아, 고기는 비계붙은 부분이지'
  },
  {
    name: '군것질은 포기할 수 없어 <빵순이>',
    desc: '과자없이 못살아, 다이어트는 평생숙제지, 빵을 어떻게 참는데, 단거 땡길때는 잘 못참음'
  },
  {
    name: '움직이기 싫어.. <소식좌>',
    desc: '귀찮아서 굶은적이 많음, 운동..? 해야하긴하는데 ..., 하루에 3끼는 좀 많지않나 ?, 오늘 폭식한다 ! (밥 두공기)'
  },
]
