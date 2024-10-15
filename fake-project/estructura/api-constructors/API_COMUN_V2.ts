import { Comun } from "../../../repositories/comun";
import { APIV2 } from "./API_CONSTRUCTOR_V2";

const url = "http://localhost:9080/comun/v1/"; // .env

/**
 * Crea la instancia de axios con la ruta del microsevicio correspondiente al servicio
 *
 * En caso de querer hacer una peticion con un JWT sobreescrito, hay que pasarlo como parametro
 *
 * @param dispatch
 * @returns Instancia de axios para hacer peticiones al servicio de común
 */
export const API_COMUN_V2 = (dispatch?: any) => {
  const apiv2 = APIV2(url, true, dispatch);

  const comun = new Comun({}, apiv2.getConfig());

  return apiv2.instance;
};

export const API_COMUN_PUBLIC_V2 = (dispatch?: any) => {
  return APIV2(url, false, dispatch).instance;
};

export const getAPI_COMUN_URL = () => url;
