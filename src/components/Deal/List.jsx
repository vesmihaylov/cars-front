import Deal from "./Deal.jsx";
import { useEffect, useState } from "react";
import { getDeals } from "../../api.js";

function List() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    getDeals()
      .then((response) => {
        setDeals(response.data);
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );
  }, []);

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
