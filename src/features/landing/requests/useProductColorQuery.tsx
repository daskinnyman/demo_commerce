import { useQuery } from "@tanstack/react-query";
import { GenericResponse } from "../../../shared/types";
import { httpClient } from "../../../shared/utils/httpClient";

const listProductColors = async () => {
  const resp = await httpClient.get<GenericResponse<string[]>>(
    "api/products/colors"
  );
  return resp.data;
};

export const useProductColorQuery = () =>
  useQuery(["product", "colors"], () => listProductColors());
