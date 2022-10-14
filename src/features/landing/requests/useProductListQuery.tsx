import { useQuery } from "@tanstack/react-query";
import { Product } from "../../../mock-api/models/product";
import { GenericResponse } from "../../../shared/types";
import { httpClient } from "../../../shared/utils/httpClient";

const listProducts = async () => {
  const resp = await httpClient.get<GenericResponse<Product[]>>("api/products");
  return resp.data;
};

export const useProductListQuery = () =>
  useQuery(["product", "list"], () => listProducts());
