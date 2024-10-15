import { Comun } from "../../../repositories/comun";
import { AxiosSingleton_API_COMUN } from "../../services/serivces/comun/AxiosSingleton_API_COMUN";

export const useAsd = () => {

	const asd = AxiosSingleton_API_COMUN.getInstance().get("asd").then((res) => {
		console.log(res);
	});


	const comunService = new Comun();

	comunService.empresa.getEmpresaPorIdEmpresa({ idEmpresa: 1 }).then((res) => {
		console.log(res);
	});


	return 'asd';
}