import axios from "axios";

export default async function getChartData(token: String) {
  try {
    const chartData = await axios({
      method: "get",
      url: `/netTransactions/${token}`,
    });
    return chartData.data;
  } catch (error) {
    console.log(error);
  }
}
