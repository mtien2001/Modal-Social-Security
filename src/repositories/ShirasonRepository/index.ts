import { dataMock } from "./contants";
import { ISocialSecurityParams, ISocialSecurityResponse } from "./types";

export class SocialSecurityRepository {
  async getSocialSecurityResult(
    _params: ISocialSecurityParams
  ): Promise<ISocialSecurityResponse> {
    return new Promise(resolve => {
      resolve(dataMock);
    });
  }
}
