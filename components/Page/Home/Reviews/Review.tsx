import Image from "next/image"
import { RiStarFill } from "react-icons/ri"
import { IntReview } from "../../../../types/interface";
import { ReviewWrapper } from "./styles";

const Review = ({author,comment,image,rate}:IntReview) => {
    return(
        <ReviewWrapper>
            <div className="image">
                <figure>
                    <Image
                        alt={author}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        src={image}
                        title={author}
                    />
                </figure>
                <h4>{author}</h4>
            </div>
            <div className="comment">
                <p>
                    {comment}
                </p>
            </div>
            <ul className="stars">
                <li className={`${rate >= 1 && 'rate'}`}>
                    <RiStarFill/>
                </li>
                <li className={`${rate >= 2 && 'rate'}`}>
                    <RiStarFill/>
                </li>
                <li className={`${rate >= 3 && 'rate'}`}>
                    <RiStarFill/>
                </li>
                <li className={`${rate >= 4 && 'rate'}`}>
                    <RiStarFill/>
                </li>
                <li className={`${rate >= 5 && 'rate'}`}>
                    <RiStarFill/>
                </li>
            </ul>
        </ReviewWrapper>
    )
}
export default Review;