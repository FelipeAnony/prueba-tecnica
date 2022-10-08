export const fetchMockSuccessReturn = {
  data: { data: 'any-data' },
};

export const fetchMock = jest.fn(
  (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<Response> => {
    return Promise.resolve({
      status: 200,
      json: () => Promise.resolve(fetchMockSuccessReturn),
    } as Response);
  }
);
