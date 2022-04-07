import { home } from "../../../../content/pages/home";
import Button from "../../AllPages/Button"
import { HeadWrapper } from "./styles/HeadWrapper";
const Head = () => {
    const {offer} = home.pl;
    return(
        <HeadWrapper>
            <div className="title">
              <h2>{offer.title}</h2>
            </div>
            <div className="content">
              <div>
                  <p dangerouslySetInnerHTML={{__html:offer.content}} />
              </div>
              <Button 
                isPage={false}
                isSecondary={false}
                isSection={true}
                path={offer.path}
                title={offer.button}
              />
            </div>
        </HeadWrapper>
    )
}
export default Head;