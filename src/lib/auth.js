import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']) // ✅ Added Cloudflare DNS

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter"; // ✅ CORRECT PATH

const client = new MongoClient(process.env.MONGO_URI);

const db = client.db("Hi"); // ✅ DATABASE NAME ADDED (as you requested)

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true,
  },
  baseURL: process.env.BETTER_AUTH_URL, // ✅ Added baseURL
});