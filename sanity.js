import { createClient } from 'next-sanity'

export const config = {
  dataset:
    // process.env.NEXT_PUBLIC_SANITY_DATASET ||
    'production',
  projectId: 'tn4ez646',
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)
