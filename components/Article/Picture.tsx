import Image from "next/image"

const Picture = ({image,title}) => {
    return(
        <figure>
            <Image
                alt={title}
                layout='fill'
                loading='lazy'
                objectFit='cover'
                objectPosition='center'
                src={image}
                title={title}
                quality={65}
            />
        </figure>
    )
}
export default Picture;