import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath : "productApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://dummyjson.com/"
    }),
    endpoints : (builder) => ({
        getAllProducts : builder.query({
            query : () => "products"
        })
    })
})

export default apiSlice
export const {useGetAllProductsQuery} = apiSlice