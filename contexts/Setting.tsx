"use client";

import useSWR from "swr";
import { createContext, useMemo } from "react";

// import { _END_POINT } from "@/__generated__/END_POINT";
import { ROUTES } from "@/routes";
import buildQueryString from "@/libs/buildQueryString";
// import { DEFAULT_NAME_TYPE } from "@/__generated__";

type SettingProps = {
  children: React.ReactNode;
};

export const SettingContext = createContext<any>({} as any);

const Setting = ({ children }: SettingProps) => {
  const { data } = useSWR<any>(
    `${ROUTES["GENERAL_SETTING"]}?${buildQueryString({
      populate: "deep",
    })}`,
    {
      refreshInterval: 600 * 1000,
    }
  );

  const memoData = useMemo(() => {
    if (data == undefined) return {} as any;

    return data.data.attributes;
  }, [data]);

  return (
    <SettingContext.Provider value={memoData}>
      {children}
    </SettingContext.Provider>
  );
};

export default Setting;
