import {home} from '../../../../content/pages/home';
import Button from '../../../atoms/AllPages/Button';
import { HeroWrapper } from './styles/HeadWrapper';
const Head = () => {
    const {button,content,path,title} = home.pl.projects;
    return(
        <HeroWrapper>
            <article>
                <h2>{title}</h2>
                <div>{content}</div>
            </article>
            <div>
                <Button
                    isPage={false}
                    isSecondary={false}
                    isSection={true}
                    path={path}
                    title={button}
                />
            </div>
        </HeroWrapper>
    )
}
export default Head;