import { useLazyQuery, useQuery } from "@apollo/client";
import { DocumentNode, QueryHookOptions } from "@apollo/client";
import { simplifyResponse } from "./simplify-response";

import { ApolloError } from "@apollo/client";
import { useState } from "react";
import { handle } from "./helpers";
import { GQL_STATUS } from "types/gql";

export function useShopcekQuery<DType>(
  query: DocumentNode,
  options?: QueryHookOptions,
  notFound?: (data: any) => boolean
): {
  status: GQL_STATUS;
  refetch: CallableFunction;
  data?: DType;
  error?: ApolloError;
  loading?: boolean;
  called?: boolean;
  setData?: (value: DType) => void;
} {
  const jwt = localStorage.getItem("jwt");

  let { data, error, loading, refetch, called } = useQuery(query, {
    ...options,
    context: {
      headers: jwt
        ? {
            Authorization: `Bearer ${jwt}`,
          }
        : {},
    },
  });
  const [stateData, setStateData] = useState<DType>();

  let status: GQL_STATUS;
  if (loading) {
    status = "loading";
  } else if (error && data) {
    if (notFound && notFound(data)) {
      status = "error-and-not-found";
    } else {
      data = simplifyResponse(data);
      status = "error-and-data";
    }
  } else if (error) {
    status = "error";
  } else if (data) {
    if (notFound && notFound(data)) {
      status = "not-found";
    } else {
      status = "success";
      data = simplifyResponse(data);
    }
  } else if (!called) {
    status = "not-called";
  } else {
    status = undefined;
  }
  
  return {
    data: data || stateData,
    setData: setStateData,
    error,
    loading,
    called,
    refetch: handle(refetch),
    status,
  };
}

export function useLazyShopcekQuery<DType>(
  query: DocumentNode,
  options?: QueryHookOptions,
  notFound?: (data: any) => boolean
): {
  status: GQL_STATUS;
  fn: CallableFunction;
  refetch: CallableFunction;
  data?: DType;
  setData?: (value: DType) => void;
  error?: ApolloError;
  loading?: boolean;
  called?: boolean;
} {
  const jwt = localStorage.getItem("jwt");

  let [lazyCallFunction, { data, error, loading, refetch, called }] =
    useLazyQuery(query, {
      ...options,
      context: {
        headers: jwt
          ? {
              Authorization: `Bearer ${jwt}`,
            }
          : {},
      },
    });

  const [stateData, setStateData] = useState<DType>();

  let status: GQL_STATUS;
  if (loading) {
    status = "loading";
  } else if (error && data) {
    if (notFound && notFound(data)) {
      status = "error-and-not-found";
    } else {
      data = simplifyResponse(data);
      status = "error-and-data";
    }
  } else if (error) {
    status = "error";
  } else if (data) {
    if (notFound && notFound(data)) {
      status = "not-found";
    } else {
      data = simplifyResponse(data);
      status = "success";
    }
  } else if (!called) {
    status = "not-called";
  } else {
    status = undefined;
  }

  return {
    data: stateData || data,
    setData: setStateData,
    error,
    loading,
    refetch: handle(refetch),
    status,
    called,
    fn: handle(lazyCallFunction),
  };
}
