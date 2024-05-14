

import css from './ImageCard.module.css'

export default function ImageCard({ onClick, item: {
    alt_description,
    likes,
    urls: { small, regular },
    user: { instagram_username },
} }) {
    return (
        <div className={css.imgBox}>
            <img src={small} alt={alt_description} onClick={() => onClick(regular, likes, instagram_username)} width='300' height='230' className={css.img} />
            <div className={css.socials}>
                <p>Likes: {likes}</p>
                <p>{instagram_username}</p>
            </div>
        </div>

    )
}