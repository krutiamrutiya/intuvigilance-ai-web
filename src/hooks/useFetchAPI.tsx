import { useEffect, useState } from "react";
import { showToastError, showToastSuccess } from "@/utils/common";
import API_STATUS from "@/utils/apiStatus";

interface Props {
  accessPath?: string[];
  apiFunction: (params: Record<string, any>) => Promise<any>;
  apiCallCondition: boolean | number | string;
  apiParams?: Record<string, any>;
  dependencyArray: any[];
  defaultResponseValue: any[];
  hideErrorMesssage: boolean;
  showSuccessMessage: boolean;
  successCb: (data: any) => void;
  failureCb: (error: any) => void;
  errorMessage?: string;
  successMessage?: string;
}
const useFetchAPI = ({
  accessPath = [""],
  apiFunction = () => Promise.resolve({ data: {} }),
  apiCallCondition = false,
  apiParams = {},
  dependencyArray = [],
  defaultResponseValue = [],
  hideErrorMesssage = false,
  showSuccessMessage = true,
  successCb = () => {},
  failureCb = () => {},
  errorMessage,
  successMessage,
}: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);

  useEffect(() => {
    if (apiCallCondition) {
      setLoading(true);
      apiFunction(apiParams)
        .then((res) => {
          const resData = res?.data;
          if (res && res?.status == API_STATUS.SUCCESS) {
            setData(resData);
            setLoading(false);
            setError(false);
            successCb?.(resData);
            if (showSuccessMessage) {
              showToastSuccess(successMessage || res?.data?.message);
            }
          } else {
            setLoading(false);
            setError(true);
            setData(defaultResponseValue);
            failureCb?.(defaultResponseValue);
            if (!hideErrorMesssage) {
              showToastError(errorMessage || res?.data?.message);
            }
          }
        })
        .catch((error) => {
          setLoading(false);
          setError(true);
          failureCb?.(error);
          const errorType = error?.response?.data?.error;

          if (!hideErrorMesssage) {
            if (typeof errorType === "string") {
              showToastError(
                errorMessage ||
                  error?.response?.data?.error?.message ||
                  error?.response?.data?.error
              );
            }
          }
        });
    }
  }, dependencyArray);
  return { data, isLoading, hasError };
};

export default useFetchAPI;
