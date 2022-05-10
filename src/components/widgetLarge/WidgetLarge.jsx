import "./widgetLarge.css";

export default function Widgetlarge() {

  const Button = ({type}) => {
    return <button className={"widgetLargeButton" + type}>{type}</button>
  }

  return (
    <div className="widgetLarge">
      <span className="widgetLargeTitle">Latest transactions</span>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            Hubert Bonisseur de La Bath
          </td>
          <td className="widgetLargeDate">
            02 Avril 2022
          </td>
          <td className="widgetLargeAmnt">
            255.12 €
          </td>
          <td className="widgetLargeStts">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            Hubert Bonisseur de La Bath
          </td>
          <td className="widgetLargeDate">
            02 Avril 2022
          </td>
          <td className="widgetLargeAmnt">
            255.12 €
          </td>
          <td className="widgetLargeStts">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            Hubert Bonisseur de La Bath
          </td>
          <td className="widgetLargeDate">
            02 Avril 2022
          </td>
          <td className="widgetLargeAmnt">
            255.12 €
          </td>
          <td className="widgetLargeStts">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            Hubert Bonisseur de La Bath
          </td>
          <td className="widgetLargeDate">
            02 Avril 2022
          </td>
          <td className="widgetLargeAmnt">
            255.12 €
          </td>
          <td className="widgetLargeStts">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
