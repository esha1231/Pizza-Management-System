import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Savor the perfection of handcrafted pizzas at Lama, where every bite is a symphony of flavors..
        Our artisanal creations, made with the freshest ingredients and 
        baked to perfection in a wood-fired oven, redefine your pizza experience.
        Join us for a culinary journey that transcends the ordinary and celebrates the art of great taste.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
