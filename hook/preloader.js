import { useEffect, useState } from "react";

const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setIsLoading(false);
    };
    loadData();
  }, []);
  return { isLoading };
};
export default usePreloader;
