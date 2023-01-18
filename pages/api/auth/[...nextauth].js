import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "d05b523e6b18b37343f3",
      clientSecret: "260008604913eca331397a05f08ee3004a2f0e8e",
    }),
    GoogleProvider({
      clientId:
        "842542254732-0v1i4h8vh2n0g88u0tucas8c0f485l3u.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  adapter: FirestoreAdapter({
    apiKey: "AIzaSyD3FeIl2plQFBpnqltN_et7rGdOblNvqgE",
    authDomain: "hae-ma.firebaseapp.com",
    projectId: "hae-ma",
    storageBucket: "hae-ma.appspot.com",
    messagingSenderId: "831224162773",
    appId: "1:831224162773:web:4e4fe2dd466094ff23b55c",
    measurementId: "G-8L8N9D12SF",
  }),
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
