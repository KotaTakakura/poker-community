import styles from '../card/Card.module.css'

export default function CardImage(props: iCardImage) {
    const number_color = props.suit === 'heart' || props.suit === 'diamond' ? 'red' : 'black';
    const number_image_src = `/card_images/number/${number_color}/${props.number}.svg`;
    const suit_image_src = `/card_images/suit/${props.suit}.svg`;
    const number_image_alt = number_color + props.number;
    const suit_image_alt = props.suit;

    const is_empty_card_class = props.number === null || props.suit === null ? styles.empty : '';
    return (
        <div style={{width: props.width ? props.width : `24px`}} className={`${styles.card_wrapper} ${is_empty_card_class}`} onClick={props.notify_click}>
            <div className={`${styles.card_number_wrapper}`}>
                {
                    props.number === null || props.suit === null ?
                        <span></span> : <img src={number_image_src} alt={number_image_alt} className={styles.card_number}/>
                }
            </div>
            <div className={`${styles.card_suit_wrapper}`}>
                {
                    props.number === null || props.suit === null ?
                        <span></span> : <img src={suit_image_src} alt={suit_image_alt} className={styles.card_suit}/>
                }
            </div>
        </div>
    )
}

interface iCardImage {
    number?: string,
    suit?: string,
    width?: string,
    notify_click?: () => void,
}
