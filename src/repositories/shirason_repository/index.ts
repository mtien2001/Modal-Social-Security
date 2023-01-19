import { dataMock } from "./contants";
import {
  IModalSocialSecurityParams,
  IModalSocialSecurityResponse
} from "./types";

export class ModalSocialSecurityRepository {
  async getModalSocialSecurityResult(
    _params: IModalSocialSecurityParams
  ): Promise<IModalSocialSecurityResponse> {
    return new Promise(resolve => {
      resolve(dataMock);
    });
  }
}
