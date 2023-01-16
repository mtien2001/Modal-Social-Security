import { convertData } from "./convert";
import { dataMock } from "../../contants";
import axios from "axios";

export const getModalSocialSecurityResult = () => {
  const response = axios.get("https://modal_social_security");
  return convertData(dataMock);
};
