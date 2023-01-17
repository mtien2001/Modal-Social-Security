import { dataMock } from "../../contants";
import axios from "axios";
import {
  IModalSocialSecurityParams,
  IModalSocialSecurityResponse
} from "./types";

export class ModalSocialSecurityRepository {
  async getModalSocialSecurityResult(
    _params: IModalSocialSecurityParams
  ): Promise<IModalSocialSecurityResponse> {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(dataMock);
      }, 1500);
    });
  }
}
