type FetchMultipleQuery = {
  isLoading: boolean;
  error: Error | undefined;
  data: FetchMultipleResult | undefined;
};

type FetchSingleQuery = {
  isLoading: boolean;
  error: Error;
  data: FetchSingleResult;
};
