export const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  export const filterData = (searchData, query) => {
    if (!query) {
      return searchData;
    }

    return searchData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };