import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Load environment variables
const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const token = process.env.REACT_APP_SANITY_TOKEN;

// Set up the client for fetching data
export const client = createClient({
    projectId: projectId,
    dataset: 'production',
    apiVersion: '2024-04-12',
    useCdn: true,
    token: token, // Pass the token securely from environment variables
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
