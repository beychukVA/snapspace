import { Auth } from "aws-amplify";

export const getSession = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user: ", user);
    return true;
  } catch (error) {
    return false;
  }
};
