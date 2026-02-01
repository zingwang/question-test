const tests = [
  {
    id: "record-style",
    title: "기록 성향 테스트",
    description: "나는 어떤 방식으로 기록을 남기는 편일까?",
    category: "기록",
    duration: "1분",
    questions: [
      {
        text: "여행이나 특별한 날, 사진을 많이 찍는 편이다",
        scores: { photo: 2, text: 0, mixed: 1, none: 0 }
      },
      {
        text: "일기나 메모를 글로 남기는 것이 편하다",
        scores: { photo: 0, text: 2, mixed: 1, none: 0 }
      },
      {
        text: "SNS에 사진과 함께 글을 올리는 편이다",
        scores: { photo: 1, text: 1, mixed: 2, none: 0 }
      },
      {
        text: "기록보다는 그 순간을 즐기는 게 더 좋다",
        scores: { photo: 0, text: 0, mixed: 0, none: 2 }
      },
      {
        text: "나중에 다시 보려고 기록을 남기는 편이다",
        scores: { photo: 1, text: 1, mixed: 2, none: 0 }
      },
      {
        text: "영수증, 티켓 같은 것도 모아두는 편이다",
        scores: { photo: 0, text: 1, mixed: 1, none: 0 }
      }
    ],
    results: {
      photo: {
        title: "사진형 기록러",
        description: "순간을 이미지로 담아두는 경향이 있습니다",
        traits: [
          "시각적인 기억에 강한 편",
          "갤러리가 곧 일기장",
          "말보다 사진 한 장이 편할 때가 있음"
        ],
        tips: [
          "가끔은 사진에 짧은 메모를 붙여보는 것도 좋아요",
          "포토북이나 앨범 정리를 해보면 뿌듯할 수 있어요"
        ]
      },
      text: {
        title: "글형 기록러",
        description: "생각과 감정을 글로 정리하는 경향이 있습니다",
        traits: [
          "머릿속을 글로 정리하면 시원해지는 편",
          "일기, 메모, 노트 앱이 친숙함",
          "기록이 나중에 좋은 자료가 됨"
        ],
        tips: [
          "부담 없이 한 줄 기록부터 시작해도 충분해요",
          "아날로그 노트를 써보는 것도 새로운 느낌일 수 있어요"
        ]
      },
      mixed: {
        title: "혼합형 기록러",
        description: "사진과 글을 함께 활용하는 경향이 있습니다",
        traits: [
          "상황에 따라 기록 방식을 바꾸는 편",
          "사진에 글을 곁들이면 더 완성된 느낌",
          "다양한 앱과 도구를 활용함"
        ],
        tips: [
          "나만의 기록 템플릿을 만들어보는 것도 재밌을 거예요",
          "한 가지 방식에 집중해보는 시간도 좋아요"
        ]
      },
      none: {
        title: "순간집중형",
        description: "기록보다는 지금 이 순간에 집중하는 경향이 있습니다",
        traits: [
          "기록에 에너지를 쓰기보다 경험에 집중",
          "사진이나 글이 부담스러울 때가 있음",
          "기억에 의존하는 편"
        ],
        tips: [
          "가끔은 아주 짧은 기록이라도 나중에 반가울 수 있어요",
          "부담 없이 음성 메모를 활용해보는 것도 방법이에요"
        ]
      }
    }
  },
  {
    id: "travel-style",
    title: "여행 스타일 테스트",
    description: "나는 어떤 여행자에 가까울까?",
    category: "여행",
    duration: "1분",
    questions: [
      {
        text: "여행 전에 일정을 꼼꼼하게 짜는 편이다",
        scores: { planner: 2, spontaneous: 0, rest: 0, minimal: 1 }
      },
      {
        text: "여행지에서 그날그날 기분에 따라 움직이는 게 좋다",
        scores: { planner: 0, spontaneous: 2, rest: 1, minimal: 1 }
      },
      {
        text: "여행의 목적은 휴식이다",
        scores: { planner: 0, spontaneous: 0, rest: 2, minimal: 1 }
      },
      {
        text: "한 장소에서 오래 머무는 편이다",
        scores: { planner: 0, spontaneous: 0, rest: 1, minimal: 2 }
      },
      {
        text: "유명 관광지는 꼭 가봐야 한다고 생각한다",
        scores: { planner: 2, spontaneous: 1, rest: 0, minimal: 0 }
      },
      {
        text: "여행 중 예상치 못한 상황이 생기면 당황하는 편이다",
        scores: { planner: 2, spontaneous: 0, rest: 1, minimal: 1 }
      },
      {
        text: "숙소에서 쉬는 시간도 여행의 일부라고 생각한다",
        scores: { planner: 0, spontaneous: 1, rest: 2, minimal: 1 }
      }
    ],
    results: {
      planner: {
        title: "계획형 여행자",
        description: "꼼꼼한 계획과 함께 움직이는 경향이 있습니다",
        traits: [
          "일정표가 있으면 마음이 편해지는 편",
          "효율적으로 여행지를 둘러보고 싶음",
          "예약과 준비를 미리 해두는 스타일"
        ],
        tips: [
          "가끔은 빈 시간을 일부러 만들어두는 것도 좋아요",
          "계획에 없던 곳을 발견하는 재미도 있을 거예요"
        ]
      },
      spontaneous: {
        title: "즉흥형 여행자",
        description: "그때그때 흐름에 맡기는 경향이 있습니다",
        traits: [
          "자유로운 일정을 선호하는 편",
          "현지에서 정보를 얻는 것도 즐거움",
          "예상 밖의 발견을 좋아함"
        ],
        tips: [
          "최소한의 숙소 예약은 해두면 편할 수 있어요",
          "가끔은 '꼭 가볼 곳' 하나 정도는 정해두는 것도 좋아요"
        ]
      },
      rest: {
        title: "휴식중심형 여행자",
        description: "여행에서 충분한 휴식을 중요하게 생각하는 경향이 있습니다",
        traits: [
          "빡빡한 일정보다는 여유로운 일정 선호",
          "좋은 숙소와 편안한 환경이 중요",
          "돌아와서 더 지치는 여행은 피하고 싶음"
        ],
        tips: [
          "휴식과 탐험의 균형을 찾아보는 것도 좋아요",
          "숙소 근처 산책 정도는 색다른 경험이 될 수 있어요"
        ]
      },
      minimal: {
        title: "동선최소형 여행자",
        description: "한 곳에서 깊이 있게 머무는 경향이 있습니다",
        traits: [
          "이동이 많으면 피곤해지는 편",
          "한 동네를 천천히 둘러보는 걸 좋아함",
          "로컬 느낌을 즐기는 스타일"
        ],
        tips: [
          "다음엔 한 도시를 여러 날 머물러보는 것도 좋아요",
          "숙소 근처 단골 가게를 만들어보는 재미도 있어요"
        ]
      }
    }
  },
  {
    id: "current-state",
    title: "요즘 상태 체크",
    description: "요즘 나의 에너지 상태는 어떨까?",
    category: "에너지",
    duration: "1분",
    questions: [
      {
        text: "요즘 하루가 빠르게 지나가는 느낌이다",
        scores: { busy: 2, overload: 1, relaxed: 0, blank: 0 }
      },
      {
        text: "해야 할 일이 머릿속에서 계속 맴돈다",
        scores: { busy: 1, overload: 2, relaxed: 0, blank: 0 }
      },
      {
        text: "요즘 여유 시간이 있는 편이다",
        scores: { busy: 0, overload: 0, relaxed: 2, blank: 1 }
      },
      {
        text: "무언가를 하고 싶은데 뭘 해야 할지 모르겠다",
        scores: { busy: 0, overload: 0, relaxed: 0, blank: 2 }
      },
      {
        text: "최근에 충분히 쉬었다고 느낀다",
        scores: { busy: 0, overload: 0, relaxed: 2, blank: 1 }
      },
      {
        text: "요즘 집중이 잘 안 되는 편이다",
        scores: { busy: 0, overload: 1, relaxed: 0, blank: 2 }
      },
      {
        text: "할 일 목록이 계속 늘어나는 느낌이다",
        scores: { busy: 1, overload: 2, relaxed: 0, blank: 0 }
      },
      {
        text: "요즘 에너지가 넘치는 편이다",
        scores: { busy: 1, overload: 0, relaxed: 2, blank: 0 }
      }
    ],
    results: {
      relaxed: {
        title: "여유로운 상태",
        description: "요즘 비교적 안정적인 에너지 상태에 가깝습니다",
        traits: [
          "시간적, 정신적 여유가 있는 편",
          "새로운 것을 시도해볼 에너지가 있음",
          "일상의 리듬이 잘 유지되고 있음"
        ],
        tips: [
          "이 시기에 해보고 싶었던 것을 시작해보는 것도 좋아요",
          "여유로울 때 루틴을 만들어두면 바빠져도 도움이 돼요"
        ]
      },
      busy: {
        title: "바쁜 상태",
        description: "요즘 할 일이 많아 정신없이 지내는 쪽에 가깝습니다",
        traits: [
          "일정이 꽉 차 있는 날이 많음",
          "생산적이지만 쉴 틈이 부족",
          "시간이 빠르게 흐르는 느낌"
        ],
        tips: [
          "짧은 휴식이라도 의식적으로 챙겨보는 게 좋아요",
          "우선순위를 정해서 덜 중요한 건 미뤄도 괜찮아요"
        ]
      },
      overload: {
        title: "과부하 상태",
        description: "요즘 에너지가 많이 소진된 상태에 가깝습니다",
        traits: [
          "해야 할 일이 감당하기 어려운 느낌",
          "쉬어도 피로가 잘 안 풀림",
          "머릿속이 복잡하고 정리가 안 됨"
        ],
        tips: [
          "지금은 '안 해도 되는 일'을 찾아서 덜어내는 게 먼저예요",
          "완벽하지 않아도 괜찮아요, 일단 쉬는 것도 중요해요"
        ]
      },
      blank: {
        title: "멍한 상태",
        description: "요즘 방향이 흐릿하고 에너지가 낮은 쪽에 가깝습니다",
        traits: [
          "뭘 해야 할지 잘 모르겠는 느낌",
          "의욕이 예전만큼 안 생김",
          "시간이 그냥 흘러가는 느낌"
        ],
        tips: [
          "작은 것부터 하나씩 해보는 것도 방법이에요",
          "산책이나 가벼운 움직임이 기분 전환에 도움이 될 수 있어요"
        ]
      }
    }
  },
  {
    id: "exercise-style",
    title: "운동 성향 테스트",
    description: "나에게 맞는 운동 스타일은 뭘까?",
    category: "생활",
    duration: "1분",
    questions: [
      {
        text: "혼자 운동하는 게 더 편하다",
        scores: { solo: 2, group: 0, outdoor: 1, relaxing: 1 }
      },
      {
        text: "사람들과 함께 하면 더 동기부여가 된다",
        scores: { solo: 0, group: 2, outdoor: 1, relaxing: 0 }
      },
      {
        text: "실내보다 야외에서 움직이는 게 좋다",
        scores: { solo: 1, group: 1, outdoor: 2, relaxing: 0 }
      },
      {
        text: "격한 운동보다 천천히 하는 게 맞는 것 같다",
        scores: { solo: 1, group: 0, outdoor: 0, relaxing: 2 }
      },
      {
        text: "운동할 때 음악이나 영상을 틀어놓는 편이다",
        scores: { solo: 2, group: 0, outdoor: 0, relaxing: 1 }
      },
      {
        text: "땀을 많이 흘려야 운동한 느낌이 난다",
        scores: { solo: 1, group: 2, outdoor: 1, relaxing: 0 }
      },
      {
        text: "운동 후 개운함보다 평온함이 더 좋다",
        scores: { solo: 0, group: 0, outdoor: 1, relaxing: 2 }
      }
    ],
    results: {
      solo: {
        title: "혼자 집중형",
        description: "나만의 페이스로 운동하는 게 잘 맞는 경향이 있습니다",
        traits: [
          "남의 시선 신경 안 쓰고 집중하는 편",
          "헬스장보다 홈트가 편할 수 있음",
          "운동 루틴을 스스로 관리하는 스타일"
        ],
        tips: [
          "홈트레이닝, 러닝머신, 자전거 등이 잘 맞을 수 있어요",
          "유튜브 홈트 영상을 따라해보는 것도 좋아요"
        ]
      },
      group: {
        title: "함께 으쌰으쌰형",
        description: "사람들과 함께할 때 에너지가 나는 경향이 있습니다",
        traits: [
          "같이 하면 더 열심히 하게 됨",
          "경쟁이나 협력이 동기부여가 됨",
          "운동 모임이나 클래스가 잘 맞음"
        ],
        tips: [
          "크로스핏, 그룹PT, 배드민턴, 풋살 등이 잘 맞을 수 있어요",
          "운동 친구를 만들면 꾸준히 하기 좋아요"
        ]
      },
      outdoor: {
        title: "야외 활동형",
        description: "바깥 공기를 마시며 움직이는 게 잘 맞는 경향이 있습니다",
        traits: [
          "자연 속에서 움직이면 기분이 좋아짐",
          "날씨 좋은 날 밖에 나가고 싶어짐",
          "헬스장 러닝머신보다 공원 러닝 선호"
        ],
        tips: [
          "러닝, 등산, 자전거, 산책 등이 잘 맞을 수 있어요",
          "주말에 가벼운 트레킹을 시작해보는 것도 좋아요"
        ]
      },
      relaxing: {
        title: "천천히 이완형",
        description: "격하게보다 부드럽게 움직이는 게 잘 맞는 경향이 있습니다",
        traits: [
          "몸을 혹사시키는 건 부담스러움",
          "운동 후 편안해지는 느낌을 좋아함",
          "호흡과 스트레칭이 중요하게 느껴짐"
        ],
        tips: [
          "요가, 필라테스, 스트레칭, 수영 등이 잘 맞을 수 있어요",
          "잠들기 전 가벼운 스트레칭부터 시작해보세요"
        ]
      }
    }
  }
];
