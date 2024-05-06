import { DocumentNode, QueryOptions, MutationOptions } from "@apollo/client";

export type GQL_STATUS =
  | "error"
  | "loading"
  | "success"
  | "error-and-data"
  | "not-called"
  | "not-found"
  | "error-and-not-found"
  | undefined
  | null;

export type SHOPCEK_QUERY_PAYLOAD = {
  query: DocumentNode;
  options?: QueryOptions;
  notFound?: (data: any) => boolean;
};

export type SHOPCEK_MUTATION_PAYLOAD = {
  mutation: DocumentNode;
  options?: MutationOptions;
  notFound?: (data: any) => boolean;
};

export type SHOPCECK_RESPONSE<DType> = {
  data?: DType;
  error?: any;
  loading?: boolean;
  called?: boolean;
  refetch?: () => void;
  status?: string;
};
