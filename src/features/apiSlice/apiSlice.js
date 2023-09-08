import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/common';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/category/jewelery',
            providesTags: ['Products']
        }),
        getProduct: builder.query({
            query: ({id}) => `/${id}`,
            providesTags: ['Product']
        })
    }),

})

export const { useGetProductsQuery, useGetProductQuery} = apiSlice