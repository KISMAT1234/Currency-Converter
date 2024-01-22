import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8000/' }),
  endpoints: (builder) => ({
     getCategory:(builder) => ({
        query : () => `category`,
     }),
  }),
})

export const { useGetCategoryQuery } = categoryApi;