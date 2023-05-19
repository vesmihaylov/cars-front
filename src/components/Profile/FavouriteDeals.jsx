import deals from "../../fake-data/deals.json";
import Deal from "../Deal/Deal.jsx";

function FavouriteDeals() {
  let favouriteDeals = deals
    .filter((deal) => deal.price <= 10000)
    .map((filteredDeal) => {
      return <Deal key={filteredDeal.id} deal={filteredDeal} />;
    });

  return (
    <div className="container">
      <div className="row">{favouriteDeals}</div>
    </div>
  );
}

export default FavouriteDeals;
