import baseApi from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCountriesQuery } = userApi;
