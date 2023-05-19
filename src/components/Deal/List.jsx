import Deal from "./Deal.jsx";
import deals from "../../fake-data/deals.json";

function List() {
  let newDeals = deals.map((deal) => {
    return <Deal key={deal.id} deal={deal} />;
  });

  return (
    <div className="container">
      <div className="row">{newDeals}</div>
    </div>
  );
}

export default List;
