import axios from "axios";

const API_KEY = "AIzaSyCm9ZN18Dy3c04h6gIsNQ_Yh9hINDOE-0M";

export const authenticate = async (mode, email, password) => {
  const url =
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` + API_KEY;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log(response.data);
};

export const createUser = async (email, password) => {
  await authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  await authenticate("signInWithPassword", email, password);
};
