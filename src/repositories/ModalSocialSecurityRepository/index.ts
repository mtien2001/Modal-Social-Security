import { convertData } from "./convert";
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
    const response = await axios.get("https://modal_social_security");

    return convertData(dataMock.data);
  }
}
