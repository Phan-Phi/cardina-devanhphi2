import { useContext } from "react";
import { LoadingPageContext } from "@/contexts";

const useLoadingPage = () => {
  const { startLoadingPage } = useContext(LoadingPageContext);

  return { startLoadingPage };
};

export default useLoadingPage;
