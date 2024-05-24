/* eslint-disable prefer-const */
import { GQL_STATUS } from "types/gql";
import { handle } from "graphql/apollo/helpers";
import { simplifyResponse } from "graphql/apollo/simplify-response";
import {
  DocumentNode,
  MutationHookOptions,
  useMutation,
  ApolloError,
} from "@apollo/client";
import { useState } from "react";

const useShopcekMutation = <DType>(
  mutation: DocumentNode,
  options?: MutationHookOptions,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  notFound?: (data: any) => boolean,
): {
  status: GQL_STATUS;
  fn: CallableFunction;
  data?: DType;
  error?: ApolloError;
  loading?: boolean;
  called?: boolean;
  setData?: (value: DType) => void;
} => {
  const jwt = localStorage.getItem("jwt");

  let [fn, { data, error, loading, called }] = useMutation(mutation, {
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
    status = null;
  }

  return {
    data: data || stateData,
    setData: setStateData,
    error,
    loading,
    called,
    fn: handle(fn),
    status,
  };
};

export default useShopcekMutation;
