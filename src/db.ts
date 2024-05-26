export const db = {
  project: [
    {
      id: 240424,
      name: "꼬리의 일상",
      catagory: "개인",
      skill: ["react", "redux"],
      day: "2024-04-24 ~ 2024-04-28",
      func: [
        "react-router-dom을 사용하여 다양한 페이지로의 라우팅을 설정했습니다.",
        "useReducer와 useContext를 사용하여 애플리케이션의 상태를 전역적으로 관리했습니다.",
        "사용자의 다이어리 데이터를 브라우저의 로컬 스토리지에 저장하여, 페이지를 새로고침하거나 다시 방문했을 때도 데이터를 유지할 수 있게 했습니다.",
        "다이어리 항목을 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)할 수 있습니다.",
      ],
      link: "https://taillife.firebaseapp.com",
      github: "https://github.com/jbinyim/react-ex/tree/master/taillife",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-taillife-web-app-2024-05-18-14_32_56.png",
      text: "Diary 부분을 만들때 로컬 스토리를 이용해 만들다 보니 생각보다 어려웠으나 CRUD에 따라 차근차근 만들어 가며 완료하였습니다. 또 컴포넌트 분리를 통해 코드의 재사용성과 유지보수성을 향상시켰습니다. id와 같은 동적 파라미터를 사용하여 갤러리 상세 페이지나 일기 상제 정보 페이지로 라우팅을 설정했습니다. 이를 통해 사용자가 일기의 상세정보를 보거나 편집할 수 있습니다.",
    },
    {
      id: 240229,
      name: "더 벤티",
      catagory: "팀",
      skill: ["Html", "Css", "javascript"],
      day: "2024-02-29 ~ 2024-03-29",
      func: [
        "fetch, api를 이용하여 데이터를 비동기적으로 불러왔습니다.",
        "category - 선택된 카테고리에 해당하는 공지사항만을 표시했습니다 ",
        "search - 사용자가 입력한 검색어를 기반으로 제목에서 해당 텍스트를 포함하는 공지사항만을 필터링하여 표시했습니다.",
      ],
      link: "https://theventi-d1217.firebaseapp.com",
      github: "https://github.com/jbinyim/team-project-theventi.git",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-theventi-d1217-web-app-common-common-html-2024-05-17-01_07_19.png",
      text: "PM으로써 팀원 각각에게 맞는 임무를 배정하고 스케줄을 조율하면서 프로젝트를 시작했습니다. 중간에 팀원중 한명이 개인사정으로 이탈해야하는 문제가 있었지만 팀원들과의 소통으로 잘 해결하여 완성했습니다. 저는 커뮤니티 부분을 담당하였으며, 공지사항 목록에서 특정 항목을 클릭했을 때, 해당 공지사항의 상세 페이지로 이동합니다. 이 함수는 클릭 이벤트와 함께 호출되며, 공지사항의 ID를 URL에 포함시켜 새 탭에서 상세 페이지를 엽니다. 검색 폼이 제출될 때 호출되는 함수입니다. 사용자가 입력한 검색어를 기반으로 제목에서 해당 텍스트를 포함하는 공지사항만을 필터링하여 표시합니다. 검색 결과는 새로운 리스트로 구성되어 표시됩니다. fetch API를 사용하여 공지사항 데이터를 비동기적으로 불러옵니다. 불러온 데이터는 화면에 표시되며, 카테고리로 구분되여 각각 다르게 표시합니다. 드롭다운 메뉴에서 카테고리를 선택하면, 선택된 카테고리에 해당하는 공지사항만을 표시합니다. 이 기능은  함수에 의해 구현되며, 사용자가 선택한 카테고리 값에 따라 다른 함수를 호출하여 결과를 필터링합니다. 공지사항 제목을 클릭할 때마다 함수가 호출되도록 이벤트 리스너를 추가합니다. 또한, 검색 폼에 대해서는 submit 이벤트가 발생할 때 함수가 호출되도록 설정합니다.",
    },
    {
      id: 240425,
      type: "react",
      name: "mbti",
      catagory: "개인",
      skill: ["react"],
      day: "2024-04-25",
      func: [
        "useState를 사용하여 현재 질문 번호와 총 점수를 관리합니다. MBTI의 네 가지(EI, SN, TF, JP) 각각에 대한 점수를 배열로 저장합니다.",
        "ProgressBar를 사용하여 사용자가 설문조사에서 얼마나 진행했는지 시각적으로 표시합니다.",
        "사용자가 버튼을 클릭하면, 함수가 호출되어 사용자의 선택(점수 증가)을 기반으로 총 점수를 업데이트하고, 다음 질문으로 넘어갑니다.",
        "모든 질문에 답하면, 사용자의 MBTI 유형을 계산하고, 이를 쿼리 파라미터로 포함하여 결과 페이지로 사용자를 리디렉션합니다. 이 때 MBTI 결과를 쿼리 파라미터로 전달합니다.",
      ],
      link: "https://jb-mbti.firebaseapp.com",
      github:
        "https://github.com/jbinyim/EZENCLASS/tree/master/240425-mbti/01-mbti",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-mbti-firebaseapp-2024-05-26-18_12_52.png",
      text: "사용자가 MBTI 테스트를 완료한 후, 결과 페이지에서 해당 MBTI에 맞는 결과와 설명을 보여줍니다. 사용자는 결과 페이지에서 테스트 다시하기 버튼을 눌러 메인 페이지로 돌아갈 수 있습니다. useEffect 훅을 사용하여 URL에서 MBTI 값을 가져와 해당 결과 데이터를 찾고 상태를 업데이트합니다.",
    },
  ],
  example: [
    {
      id: 240522,
      type: "react",
      name: "칸반보드",
      catagory: "개인",
      skill: ["react", "typescript", "recoil"],
      day: "2024-05-22 ~ 2024-05-27",
      func: ["recoil", "react-beautiful-dnd"],
      link: "https://jb-kanban.firebaseapp.com",
      github:
        "https://github.com/jbinyim/EZENCLASS/tree/master/240522-canvanboard/02",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-kanban-firebaseapp-2024-05-27-00_10_41.png",
      text: "react-beautiful-dnd를 이용해 DragDropContext와 DropResult를 사용하여 드래그 앤 드롭 인터랙션을 구현합니다. 이를 통해 사용자가 항목을 드래그하여 다른 위치로 옮길 수 있게 해 줍니다. useRecoilState를 사용하여 애플리케이션의 상태를 관리합니다. Recoil은 React 애플리케이션을 위한 상태 관리 라이브러리로, 복잡한 상태 관리 로직을 쉽게 처리할 수 있게 해 줍니다. 여기서는 toDoState라는 상태를 사용하여 할 일 목록을 관리합니다.",
    },
    {
      id: 240514,
      type: "react",
      name: "Coins",
      catagory: "개인",
      skill: ["react", "typescript", "react-query"],
      day: "2024-05-14 ~ 2024-04-16",
      func: ["react-router-dom", "react-query"],
      link: "https://jb-coins.firebaseapp.com",
      github:
        "https://github.com/jbinyim/EZENCLASS/tree/master/240514-coin-createbrowser/02-coin",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-coins-firebaseapp-2024-05-26-18_31_55.png",
      text: "React와 여러 라이브러리를 사용하여 암호화폐 정보를 보여주는 웹 입니다. react-router-dom을 사용하여 라우팅을 설정하고 useParams, useNavigate, useLocation 등의 훅을 사용하여 URL 라미터를 읽고, 페이지 이동을 제어한다. react-query를 사용하여 암호화폐의 정보와 가격 데이터를 비동기적으로 불러옵니다. useQuery 훅을 통해 데이터를 요청하고, 로딩 상태 및 데이터를 관리합니다. 실제 데이터를 API에서 가져옵니다. 또한 refetchInterval 옵션을 통해 5초마다 가격 보를 자동으로 새로고침합니다.",
    },
    {
      id: 240423,
      type: "react",
      name: "넷플릭스",
      catagory: "개인",
      skill: ["react", "redux"],
      day: "2024-04-23 ~ 2024-04-24",
      func: ["react-redux"],
      link: "https://jb-netiflx.firebaseapp.com",
      github:
        "https://github.com/jbinyim/EZENCLASS/tree/master/240423-netfilx/01-netiflx",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-netiflx-web-app-2024-05-26-15_16_10.png",
      text: " useEffect 훅을 사용하여 컴포넌트가 마운트될 때 movieAction.getMovies() 액션을 디스패치합니다. 이는 Redux를 통해 영화 데이터를 비동기적으로 가져오는 역할을 합니다. useSelector 훅을 사용하여 Redux 스토어의 상태 중 영화 데이터와 로딩 상태를 추출합니다.",
    },
    {
      id: 240416,
      type: "react",
      name: "react-todoList",
      catagory: "개인",
      skill: ["react"],
      day: "2024-04-16 ~ 2024-04-17",
      func: ["react-hooks"],
      link: "https://jb-todolist.firebaseapp.com",
      github: "https://github.com/jbinyim/react-ex/tree/master/todolist",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-todolist-firebaseapp-2024-05-18-02_50_02.png",
      text: "React의 기본적인 상태 관리, 이벤트 처리, 컴포넌트 간의 데이터 전달 및 조작 등의 개념을 잘 보여줍니다. 또한, 주석 처리된 부분을 활용하여 기능을 확장하고 데이터의 영속성을 추가하는 방법을 탐색할 수 있습니다.",
    },
    {
      id: 240403,
      type: "javascript",
      name: "도서문고",
      catagory: "개인",
      skill: ["Html", "Css", "javascript"],
      day: "2024-04-03 ~ 2024-04-05",
      func: ["filter", "sort"],
      link: "https://jb-findbooks.firebaseapp.com/",
      github:
        "https://github.com/jbinyim/vanilla-js-ex/tree/master/product%20filter",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-findbooks-firebaseapp-2024-05-24-20_54_41.png",
      text: "제품 목록을 관리하고, 사용자가 제품을 검색하거나 카테고리별로 필터링하고, 가격에 따라 정렬할 수 있게 해주는 JavaScript 코드입니다. 기본적으로 제품 데이터를 가져와서 사용자의 입력에 따라 동적으로 제품 목록을 업데이트하는 기능을 수행합니다. 각각 신상품 순, 가격 내림차순, 가격 오름차순으로 제품을 정렬하고 검색어에 해당하는 제품만을 필터링하여 목록에 다시 표시합니다.",
    },
    {
      id: 240411,
      type: "javascript",
      name: "전국 날씨",
      catagory: "개인",
      skill: ["Html", "Css", "javascript"],
      day: "2024-04-11 ~ 2024-04-15",
      func: ["fetch", "api"],
      link: "https://jb-weather-8fc73.firebaseapp.com/",
      github: "https://github.com/jbinyim/vanilla-js-ex/tree/master/weather",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-weather-8fc73-firebaseapp-2024-05-18-02_37_32.png",
      text: "penWeatherMap API를 사용해 특정 도시들의 날씨 정보를 가져와서 브라우저에 표시합니다. 코드는 크게 세 부분으로 나뉩니다: changeTitle 함수, renderDataInfo 함수, 그리고 renderData 함수와 이를 실행하는 마지막 부분입니다.",
    },
    {
      id: 240408,
      type: "javascript",
      name: "JS-todoList",
      catagory: "개인",
      skill: ["Html", "Css", "javascript"],
      day: "2024-04-08 ~ 2024-04-09",
      func: ["localstorage"],
      link: "https://jb-memo.firebaseapp.com/",
      github: "https://github.com/jbinyim/team-project-theventi.git",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-memo-firebaseapp-2024-05-18-02_33_09.png",
      text: "로컬스토리지를 통해 데이터를 저장, 불러오기, 삭제를 합니다.(CRUD)",
    },
    {
      id: 240418,
      type: "react",
      name: "미세먼지",
      catagory: "개인",
      skill: ["react"],
      day: "2024-04-18 ~ 2024-04-23",
      func: ["async", "await", "api"],
      link: "https://finedust-7ea20.web.app/",
      github: "https://github.com/jbinyim/react-ex/tree/master/finedust",
      imgUrl:
        "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-finedust-7ea20-web-app-2024-05-18-14_04_14.png",
      text: "사용자에게 전국의 미세먼지 정보를 제공하고, 사용자가 특정 지역을 클릭하면 해당 지역의 상세 정보를 보여주는 기능을 구현하고 있습니다. fetch를 통해 API 호출을 수행하고, useState와 useEffect를 활용하여 상태를 관리하고 있습니다. react-bootstrap을 사용하여 스타일링을 간편하게 처리한 점도 특징입니다.",
    },
  ],
};

export const skillLogo = {
  html: "https://jbinyim12.cafe24.com/web/upload/captcha/html5-original.png",
  css: "https://jbinyim12.cafe24.com/web/upload/captcha/css3-original.png",
  scss: "https://jbinyim12.cafe24.com/web/upload/captcha/sass-original.png",
  js: "https://jbinyim12.cafe24.com/web/upload/captcha/Vector.png",
  ts: "https://jbinyim12.cafe24.com/web/upload/captcha/ts.png",
  react: "https://jbinyim12.cafe24.com/web/upload/captcha/react.png",
  git: "https://jbinyim12.cafe24.com/web/upload/captcha/git.png",
  firebase:
    "https://jbinyim12.cafe24.com/web/upload/captcha/firebase-plain.png",
  figma: "https://jbinyim12.cafe24.com/web/upload/captcha/figma-original.png",
  illustrator: "https://jbinyim12.cafe24.com/web/upload/captcha/image%204.png",
  photoshop: "https://jbinyim12.cafe24.com/web/upload/captcha/image%205.png",
};

export interface DbData {
  id: number;
  type?: string;
  name: string;
  catagory: string;
  skill: string[];
  day: string;
  func: string[];
  link: string;
  github: string;
  imgUrl: string;
  text: string;
}
