import portfolio from '../assets/images/portfolio.jpg';
import readingLog from '../assets/images/readinglog.jpg';
import sbMarket from '../assets/images/sbmarket.jpg';
import flexGrid from '../assets/images/flexgrid.jpg';
import stopWar from '../assets/images/stopwar.jpg';

const ProjectList = [
  { 
    'key' : 1,
    'title' : '포트폴리오 사이트', 
    'img' : portfolio,
    'date' : '2022.05',
    'inf' : '짧은 자기소개와 프로젝트 상세설명, 이력서가 담긴 포트폴리오 사이트입니다.',
    'stack' : 'HTML(JSX), React, styled-components',
    'way' : 'useState, useEffect 등 기본적인 React hooks를 통해 로직 재사용/useRef를 이용한 DOM제어/react-router-dom을 통한 라우팅/styled-components를 이용한 스타일링/animation 적용/반응형 작업',
    'role' :'',
    'note' : '',
    'feedback' : '',
    'github': 'https://github.com/zeroto99/portfolio',
    'link' :'https://jiah-portfolio.netlify.app',
  },
  { 
    'key' : 2,
    'title' : 'Reading Log', 
    'img' : readingLog,
    'date' : '2022.05',
    'inf' : '카카오 책 검색 API를 활용하여 완독한 도서를 기록할 수 있는 웹페이지입니다. 책 제목을 검색하여 로그에 추가할 수 있습니다.',
    'stack' : 'HTML(JSX), React, styled-components',
    'way' : 'useState, useEffect 등 기본적인 React hooks를 통해 로직 재사용/useRef를 이용한 DOM제어/react-router-dom을 통한 라우팅/axios를 통한 비동기 처리 작업/styled-components를 이용한 스타일링',
    'role' :'',
    'note' : 'https://zeroto99.notion.site/Reading-Log-dc9e62596774429588af7eaf9d5f3cc5',
    'feedback' : '',
    'github': 'https://github.com/zeroto99/reading-log',
    'link' :'https://zeroto99.github.io/reading-log/',
  },
  { 
    'key' : 3,
    'title' : '딸기마켓', 
    'img' : sbMarket,
    'date' : '2021.12 ~ 2022.02',
    'inf' : `'멋쟁이사자처럼 프론트엔드 스쿨' 팀 과제로 진행된 프로젝트입니다. 제공되는 API와 Figma 디자인을 활용했습니다. 딸기라는 아이템을 선정하고 관련 상품을 판매하거나 구매할 수 있는 플랫폼입니다. 상품 등록 뿐만 아니라 피드, 게시물 작성, 팔로우 등의 기능도 구현하여 sns로 활용할 수 있습니다.`,
    'stack' : 'HTML, CSS, JavaScript',
    'way' : '팀원 전체의 수준을 고려하여 JavaScript로 진행/공통 페이지는 짝 프로그래밍(Pair Programming)을 통한 협업/async와 await를 통해 API 요청 비동기 처리 작업/try..catch를 통한 에러 핸들링/주간회의와 일일보고를 통해 지속적으로 진행 상황 공유 및 피드백',
    'role' :'[공통] Splash, 로그인, 회원가입 페이지 구현/[개인] 게시글 작성 페이지, 게시글 상세 페이지, 검색 페이지 구현',
    'note' : 'https://zeroto99.notion.site/50a66f7d801c403896d232929b7102e8',
    'feedback': 'https://zeroto99.notion.site/c61ff73c48ee40f89aa9785fb019f81f',
    'github': 'https://github.com/zeroto99/strawberry_market',
    'link' :'https://strawberry-market.vercel.app',
    'demo' : '(데모 아이디: hey@naver.com  비밀번호: 1234qwer)' 
  },
  { 
    'key' : 4,
    'title' : 'Flex & Grid', 
    'img' : flexGrid,
    'date' : '2022.05 ~ 진행 중',
    'inf' : 'CSS 초심자가 flex와 grid를 배우는 데 도움을 주고자 기획된 오픈소스 프로젝트입니다. flex와 grid의 개념과 예제를 Cheat-Sheet처럼 찾아볼 수 있고 에디터를 통해 직접 코드를 작성해볼 수 있습니다.',
    'stack' : 'HTML, CSS, JavaScript',
    'way' : '지원자 참여률을 높이기 위해 JavaScript로 진행/공통 페이지는 짝 프로그래밍(Pair Programming)을 통한 협업/Figma 디자인 시스템 적용',
    'role' :'[공통] 사이드 메뉴 드롭다운, 스크롤 스파이 기능 구현 /[개인] 사이드 메뉴 마크업, CSS 작업',
    'note' : '',
    'feedback' : '',
    'github': 'https://github.com/zeroto99/flexandgrid',
    'link' :'https://flexngrid.com/',
  },
  { 
    'key' : 5,
    'title' : 'STOP WAR', 
    'img' : stopWar,
    'date' : '2022.03 ~ 2022.04',
    'inf' : '우크라이나 전쟁과 관련된 소식을 제공하는 비영리 서비스입니다. 전쟁 관련 이슈를 항목별로 아카이빙하여 현재 상황과 후원 정보를 한 눈에 파악할 수 있습니다.',
    'stack' : 'HTML, CSS, JavaScript',
    'way' : '자원 봉사 참여률을 높이기 위해 JavaScript로 진행/짝 프로그래밍(Pair Programming)을 통한 협업/async와 await를 통한 비동기 처리 작업/try..catch를 통한 에러 핸들링',
    'role' :'규제 페이지 구현',
    'note' : '',
    'feedback' : '',
    'github': 'https://github.com/StopWarKr',
    'link' :'https://stopwar.co.kr',
  },

];

export default ProjectList;