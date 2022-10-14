import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "../../../mock-api/models/user";
import { GenericResponse } from "../../../shared/types";
import { httpClient } from "../../../shared/utils/httpClient";

export const getUser = async () => {
  const res = await httpClient.get<GenericResponse<UserInfo>>("/api/me");
  return res.data;
};

export const useUserInfoQuery = (shouldRedirect = false) => {
  const [token, setToken] = useState<string>("");
  const navigate = useNavigate();
  const query = useQuery(["me", token], () => getUser(), {
    enabled: token !== "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    setToken(token);
  }, []);

  useEffect(() => {
    if (query.isLoading || !shouldRedirect) {
      return;
    }

    const { data } = query;
    if (!data?.isSuccess) {
      navigate("/login");
    }
  }, [shouldRedirect, query.isLoading]);

  return { data: query.data?.data, isLoading: query.isLoading };
};
