export const ADMIN_USER = {
  user: {
    id: 1,
    username: "Admin",
    role: "admin",
    email: "admin@admin.com",
    password: "secret_admin",
  },
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NDc5MDM1NDQsImV4cCI6MTY0ODUwODM0NH0.CcEdXRnBzPp__1GOt6aj8CV85P1H9nL4Ck5jFN7-CZI"
}

export const WRONG_ADMIN_USER = {
  email: "hacker@hacker.com",
  password: "secret_hacker",
}