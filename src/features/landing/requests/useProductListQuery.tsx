import { useQuery } from "@tanstack/react-query";
import { Product } from "../../../mock-api/models/product";
import { GenericResponse } from "../../../shared/types";
import { httpClient } from "../../../shared/utils/httpClient";

const listProducts = async (params: any = {}) => {
  const resp = await httpClient.get<GenericResponse<Product[]>>(
    "api/products",
    {
      params,
    }
  );
  return resp.data;
};

export const useProductListQuery = (params: any = null) =>
  useQuery(["product", "list", { params }], () => listProducts(params));
