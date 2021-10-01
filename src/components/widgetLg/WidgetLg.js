import React from "react";
import "./widgetLg.css";
import CostumerImg from "../../img/widgetsLG-img-1.jpg";
import CostumerImg2 from "../../img/widgetsLG-img-2.jpg";
import CostumerImg3 from "../../img/widgetsLG-img-3.jpg";
import CostumerImg4 from "../../img/widgetsLG-img-4.jpg";
import CostumerImg5 from "../../img/widgetsLG-img-5.jpg";

export default function WidgetLg() {
  const ButtonLg = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Costumer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={CostumerImg} alt="User Img" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.15</td>
          <td className="widgetLgStatus">
            <ButtonLg type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={CostumerImg2} alt="User Img" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.15</td>
          <td className="widgetLgStatus">
            <ButtonLg type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={CostumerImg3} alt="User Img" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.15</td>
          <td className="widgetLgStatus">
            <ButtonLg type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={CostumerImg4} alt="User Img" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.15</td>
          <td className="widgetLgStatus">
            <ButtonLg type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={CostumerImg5} alt="User Img" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.15</td>
          <td className="widgetLgStatus">
            <ButtonLg type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
