import { ReactChild, ReactElement } from "react"
import PostPoster from "../AllPages/PostPoster"
import { HeroWrapper } from "./styles/HeroWrapper";
interface i {
    alt:string,
    children:ReactChild,
    image:string,
    stack?:ReactElement[] | any | null,
    tags?:string[] | any | null,
    title:string,
    time?:string | null | any
}
const Hero = ({alt,children,image,stack,tags,title,time}:i) => {
    const date = new Date(parseInt(time));
    console.log(typeof time);
    const minute = date.getMinutes();
    const hour = date.getHours();
    let day:number|string = date.getDate();
    if(day < 10){day = `0${day}`}
    let month:number|string = date.getMonth() + 1;
    if(month < 10){month = `0${month}`}
    const year = date.getFullYear();
    const releaseTime = `${hour}<sup>${minute}</sup>  ${day}/${month}/${year}`;
    return(
        <HeroWrapper>
            <div>
                <h1>{title}</h1>
                <small dangerouslySetInnerHTML={{__html:releaseTime}}/>
                <ul>
                    {stack && stack.map((i:any) => <li key={i} className='stack'>{i}</li>)}
                    {tags && tags.map((i:any) => <li key={i} className='tags'>{i}</li>)}
                </ul>
                <p>{children}</p>
            </div>
            <PostPoster
                alt={alt}
                image={image}
            />
        </HeroWrapper>
    )
}
export default Hero;