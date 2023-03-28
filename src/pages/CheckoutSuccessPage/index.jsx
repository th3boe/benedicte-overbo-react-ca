import { Link } from "react-router-dom";
import Walker from "../../images/ cute-walker.gif";
import styles from "./checkoutsuccess.module.css";

export default function CheckoutSuccessPage() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>WoopWoop, success!!</h1>
        <p>Payday?</p>
        <p>
          No matter if that was the case or not, your puchase was successful and
          you might offically be poor again! The purchase is on it's way in a
          very earth-friendly way.
        </p>
        <div>
          <Link to="/">Return back to the store!</Link>
        </div>
        <img className={styles.walkingSeed} src={Walker} alt="eco-walker" />
      </div>
      <div></div>
    </div>
  );
}
