import { ROUTES, ROUTES_KEY } from "@/routes";
import buildQueryString from "./buildQueryString";
import { notFound } from "next/navigation";

const fetchData = async (routeKey: ROUTES_KEY, queryString?: object) => {
  try {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_KEY!}`);
    // console.log(`${ROUTES[routeKey]}?${buildQueryString(ROUTE_SEARCH_PARAMS[routeKey])}`);
    let res: Response;

    if (queryString) {
      // `${ROUTES[routeKey]}?pagination[page]=1&pagination[pageSize]=10`,

      res = await fetch(
        `${ROUTES[routeKey]}?${buildQueryString(queryString)}`,
        {
          headers: headers,
          next: { revalidate: 900 },
          cache: "no-store",
        }
      );
    } else {
      res = await fetch(`${ROUTES[routeKey]}?populate=deep`, {
        headers: headers,
        next: { revalidate: 900 },
        cache: "no-store",
      });
    }

    const data = res.json();

    if (data == null) notFound();

    return data;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchGeneralInfo = async () => {
  return fetchData("GENERAL_SETTING");
};

export default fetchData;
