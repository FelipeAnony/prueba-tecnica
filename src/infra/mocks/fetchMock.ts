export const fetchMockSuccessReturn = {
  status: 200,
  data: { data: 'any-data' },
};

export const fetchMock = jest.fn(
  (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<Response> => {
    return Promise.resolve({
      json: () => Promise.resolve(fetchMockSuccessReturn),
    } as Response);
  }
);
