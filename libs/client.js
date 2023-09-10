import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-tutorial-nextjs-practice",
    apiKey: process.env.API_KEY,
});