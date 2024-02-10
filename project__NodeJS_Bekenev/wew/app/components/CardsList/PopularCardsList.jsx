import { PopularCardsFragment } from "./PopularCardsFragment";
import Styles from './CardList.module.css'; 

export const PopularCardsList = () => {
    return (
        <section className={`${Styles.list__section}`}>
        <h2 className={`${Styles.list__section__title}`} id="popular">
          Популярное
        </h2>
        <ul className={`${Styles.card__list}`}>
          <PopularCardsFragment/>
        </ul>
      </section>
    );
}