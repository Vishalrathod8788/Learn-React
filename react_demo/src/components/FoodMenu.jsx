import { DishesList } from "./DishesList";

export const FoodMenu = () => {
  const Dishes = [
    { name: "pizza", price: 200 },
    { name: "Burgur", price: 100 },
    { name: "Coke", price: 50 },
  ];
  return (
    <div>
      <h1>FoodMenu</h1>
      {Dishes.map((dish, index) => {
        return <DishesList key={index} name={dish.name} price={dish.price} />;
      })}
    </div>
  );
};
