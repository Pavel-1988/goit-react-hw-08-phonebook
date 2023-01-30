import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'https://connections-api.herokuapp.com/'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
  }
})

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['contact'],
  refetchOnMountOrArgChange: true,
  baseQuery,
  endpoints: builder => ({
    
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contact']
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact']
    }),
    deleteContact: builder.mutation({
      query: Id => ({
        url: `contacts/${Id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query: ({ values, id }) => ({
        url: `contacts/${id}`,
        method: 'POST',
        body: values,
      })
    })
  })
})

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi

// 1234567Fg!
//=====================================================================
// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   tagTypes: ['contact'],
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://63b67deb58084a7af3b3c24c.mockapi.io/',

//   }),
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => 'contacts',
//       providesTags: ['Contact']
//     }),
//     addContact: builder.mutation({
//       query: newContact => ({
//         url: `contacts`,
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contact']
//     }),
//     deleteContact: builder.mutation({
//       query: Id => ({
//         url: `contacts/${Id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     })
//   })
// })

// export const {
//   useFetchContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation
// } = contactsApi