//COMPONENTS
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";
//API
import { request, requestCityDetail } from "./components/api.js";

export default function App($app) {
  // 앱 함수를 index.js 파일에서 모듈로 가져와 사용 할 수 있게해줌
  const getSortBy = () => {
    if (window.location.search) {
      return window.location.search.split("sort=")[1].split("&")[0];
    }
    return "total";
  };

  const getSearchWord = () => {
    if (window.location.search && window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  this.state = {
    startIdx: 0, // 몇번째 값부터 불러올 것인지 설정
    sortBy: getSortBy(), // 정렬 필터 값
    region: window.location.pathname.replace("/", ""), //어떤 지역이 선택 됐는지
    searchWord: getSearchWord(),
    cities: {
      cities: [],
      isEnd: false,
    }, // 조건에 맞는 도시들
    currentPage: window.location.pathname,
  };

  const renderHeader = () => {
    new Header({
      $app,
      initialState: {
        currentPage: this.state.currentPage,
        sortBy: this.state.sortBy,
        searchWord: this.state.searchWord,
      },
      handleSortChange: async (sortBy) => {
        const pageUrl = `/${this.state.region}?sort=${sortBy}`;
        history.pushState(
          null,
          null,
          this.state.searchWord
            ? pageUrl + `&search=${this.state.searchWord}`
            : pageUrl,
        );
        const cities = await request(
          0,
          this.state.region,
          sortBy,
          this.state.searchWord,
        );
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: sortBy,
          cities: cities,
        });
      },
      handleSearch: async (searchWord) => {
        history.pushState(
          null,
          null,
          `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`,
        );
        const cities = await request(
          0,
          this.state.region,
          this.state.sortBy,
          searchWord,
        );
        this.setState({
          ...this.state,
          startIdx: 0,
          cities: cities,
          searchWord: searchWord,
        });
      },
    });
  };

  const renderRegionList = () => {
    new RegionList({
      $app,
      initialState: this.state.region,
      handleRegion: async (region) => {
        history.pushState(null, null, `/${region}?sort=total`);
        const cities = await request(0, region, "total");
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: "total",
          region: region,
          cities: cities,
          searchWord: "",
          currentPage: `/${region}`,
        });
      },
    });
  };

  const renderCityList = () => {
    new CityList({
      // 여러 도시들의 정보가 표시될 리스트
      $app, // id가 app인 요소 가져오기
      initialState: this.state.cities, //초기 상태값 cities 값으로 설정
      handleItemClick: async (id) => {
        history.pushState(null, null, `/city/${id}`);
        this.setState({
          ...this.state,
          currentPage: `/city/${id}`,
        });
      },
      handleLoadAll: async () => {
        if (!this.state.cities || !this.state.cities.cities) return;

        let startIdx = this.state.startIdx;
        let allCities = [...this.state.cities.cities];
        let isEnd = this.state.cities.isEnd;

        while (!isEnd) {
          startIdx += 40;

          const newData = await request(
            startIdx,
            this.state.region,
            this.state.sortBy,
          );

          allCities = [...allCities, ...newData.cities];
          isEnd = newData.isEnd;
        }

        this.setState({
          ...this.state,
          startIdx,
          cities: {
            ...this.state.cities,
            cities: allCities,
            isEnd: true,
          },
        });
      },
      handleLoadMore: async () => {
        const newStartIdx = this.state.startIdx + 40;
        const newCities = await request(
          newStartIdx,
          this.state.region,
          this.state.sortBy, //매개변수들
        );
        this.setState({
          //새로운 상태들로 업데이트
          ...this.state, //state값 나열
          startIdx: newStartIdx, //startIdx를 newStartIdx으로 없데이트
          cities: {
            ...this.state.cities,
            cities: [...this.state.cities.cities, ...newCities.cities],
            isEnd: newCities.isEnd,
          },
        });
      },
    });
  };

  const renderCityDetail = async (cityId) => {
    try {
      const cityDetailData = await requestCityDetail(cityId);
      new CityDetail({ $app, initialState: cityDetailData });
    } catch (error) {
      console.log(error);
    }
  };

  const render = async () => {
    const path = this.state.currentPage;
    $app.innerHTML = "";
    // 상세 페이지로 이동
    if (path.startsWith("/city/")) {
      const cityId = path.split("/city/")[1];
      renderHeader();
      renderCityDetail(cityId);
    } else {
      renderHeader();
      renderRegionList();
      renderCityList();
    }
  };

  this.setState = (newState) => {
    this.state = newState; //CityList
    render();
  };

  const init = async () => {
    //웹 사이트 처음 접속시 실행 될 함수(초기값 설정 함수)
    const path = this.state.currentPage;
    // 메인 페이지
    if (!path.startsWith("/city/")) {
      const cities = await request(
        this.state.startIdx,
        this.state.region,
        this.state.sortBy,
        this.state.searchWord,
      );
      this.setState({
        ...this.state, //현존하는 state값은 유지
        cities: cities, //원래 cities값을 api호출의 결과인 cities의 값으로 대체
      });
    } //상세 페이지
    else {
      render();
    }
  };

  window.addEventListener("popstate", async () => {
    const urlPath = window.location.pathname;

    const prevRegion = urlPath.replace("/", "");
    const prevPage = urlPath;
    const prevSortBy = getSortBy();
    const prevSearchWord = getSearchWord();
    const prevStartIdx = 0;
    const prevCities = await request(
      prevStartIdx,
      prevRegion,
      prevSortBy,
      prevSearchWord,
    );

    this.setState({
      ...this.state,
      startIdx: prevStartIdx,
      sortBy: prevSortBy,
      region: prevRegion,
      currentPage: prevPage,
      searchWord: prevSearchWord,
      cities: prevCities,
    });
  });

  init();
}
