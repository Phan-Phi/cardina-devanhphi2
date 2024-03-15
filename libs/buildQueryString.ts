import qs from "qs";

const buildQueryString = (searchParamsObject: object) => {
  return qs.stringify(searchParamsObject);
};

export default buildQueryString;
