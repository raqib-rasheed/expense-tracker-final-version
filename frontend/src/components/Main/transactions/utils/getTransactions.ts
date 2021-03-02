import axios from "axios";

export async function getIndividualTransactions(token: String) {
  try {
    const result = await axios({
      method: "get",
      url: "/transactions",
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (err) {
    return err;
  }
}
