import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
          Найдите лучшую сделку <br className="sm:block hidden" /> за пару простых шагов.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Лучшие сделки по картам – всего за несколько шагов. Упрощаем выбор и экономим ваше время!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
