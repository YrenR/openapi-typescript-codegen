import * as AxiosInstances from "../api-constructors";
import { AxiosSingleton_API_COMUN } from "../../services/serivces/comun/AxiosSingleton_API_COMUN";
import { AxiosSingleton_API_COMUN_PUBLIC } from "../../services/serivces/comun/AxiosSingleton_API_COMUN_PUBLIC";

export const useInstanciasAxios = () => {
  // COMUN
  AxiosSingleton_API_COMUN.setInstance(AxiosInstances.API_COMUN_V2());
  AxiosSingleton_API_COMUN.setApiUrl(AxiosInstances.getAPI_COMUN_URL());
  AxiosSingleton_API_COMUN_PUBLIC.setInstance(AxiosInstances.API_COMUN_PUBLIC_V2());
  AxiosSingleton_API_COMUN_PUBLIC.setApiUrl(AxiosInstances.getAPI_COMUN_URL());
};
