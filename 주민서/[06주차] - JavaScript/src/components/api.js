const API_URL = "https://trip-wiki-api.vercel.app/";

//LIST API
export const request = async (startIdx, region, sortBy, searchWord) => {
  try {
    let url = `${API_URL}`;
    if (region && region !== "All") {
      //region 값 존재하고,그 값이 all과 동일하지 않을때
      url += `${region}?start=${startIdx}`; //url 뒷쪽에 지역명을 적고 startIdx을 매개변수에 대입
    } else {
      url += `?start=${startIdx}`;
    }
    if (sortBy) {
      url += `&sort=${sortBy}`;
    }
    if (searchWord) {
      url += `&search=${searchWord}`;
    }
    console.log(url);
    //API 호출
    const response = await fetch(url);
    if (response) {
      let data = await response.json();
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

//DETAIL API
export const requestCityDetail = async (cityId) => {
  try {
    const response = await fetch(`${API_URL}city/${cityId}`);
    if (response) {
      let data = await response.json();
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
