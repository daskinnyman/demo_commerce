import { useMutation } from "@tanstack/react-query";
import { GenericResponse, LoginResponseData } from "../../../shared/types";
import { httpClient } from "../../../shared/utils/httpClient";
import { Inputs } from "../components/login/Login";

export const login = async (values: Inputs) => {
  const res = await httpClient.post<GenericResponse<LoginResponseData>>(
    "/api/login",
    values
  );
  return res.data;
};

export const useLoginMutation = () =>
  useMutation((values: Inputs) => login(values), {
    onSuccess: (res) => {
      if (!res) {
        return;
      }

      const { isSuccess, data } = res;

      if (!res || !isSuccess || !data) {
        return;
      }
      
      localStorage.setItem("token", data.token);
    },
  });
