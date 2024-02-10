import { NewCardFragment } from "./NewCardFragment";
import Styles from './CardList.module.css'; 

export const NewCardsList = () => {
    return (
        <section className={`${Styles.list__section}`}>
        <h2 className={`${Styles.list__section__title}`} id="new">
          Новинки
        </h2>
        <ul className={`${Styles.card__list}`}>
          <NewCardFragment/>
        </ul>
      </section>
    );
}