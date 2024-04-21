import axios from "axios";

export const instanceNonAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJyb2xlIjoiUk9MRV9TVFVERU5UIiwibWVtYmVySWQiOjksImlhdCI6MTcxMzcwMDA5MSwiZXhwIjoxNzEzNzg2NDkxfQ.jhDiioXJRv4aw9WrjvGWBeCqf3lYkUezvJvcboAJIRo",
  },
});
