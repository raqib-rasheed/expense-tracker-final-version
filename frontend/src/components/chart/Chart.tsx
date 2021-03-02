import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { Col } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { ExportTrackerContext } from "../../context/Context";
import { TContextProps } from "../../types/transactions-types";
import { initialChartValue } from "../../utils/categoriesConstants";
import getChartData from "./getChartData";

export type PropVal = {
  title: string;
  setTotalAmount: Dispatch<SetStateAction<number>>;
};

const Chart = (props: PropVal) => {
  const [chartData, setChartData] = React.useState(initialChartValue);
  const { title, setTotalAmount } = props;

  const contextData = useContext(ExportTrackerContext) as TContextProps;
  const { token, transactions } = contextData;
  useEffect(() => {
    getChartData(token).then((res) => {
      setChartData(res.transactions);
      setTotalAmount(res.netTotal);
    });
  }, [token, transactions]);
  const categories =
    title === "income"
      ? chartData.incomeCategories
      : chartData.expenseCategories;

  const state = useMemo(() => {
    return {
      labels: categories.map((el) => el.type),
      datasets: [
        {
          label: title,
          backgroundColor: categories.map((el) => el.color),
          hoverBackgroundColor: ["#4B5000", "#003350", "#35014F", "#175000"],
          fill: false,
          borderColor: "rgba(0,0,0,.45)",
          borderWidth: 2,
          data: categories.map((el) => el.amount),
        },
      ],
    };
  }, [categories, title]);

  return (
    <>
      <Col
        xs={12}
        sm={6}
        lg={title === "income" ? { order: "first" } : { order: "last" }}
        className="mb-3"
      >
        <div className={`chart-container ${title} round-corners`}>
          <h5 className="text-center py-3">{`Chart For ${title}`}</h5>
          <Doughnut
            data={state}
            options={{
              fill: false,
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </Col>
    </>
  );
};

export default Chart;
