import Card from "../Card/Card"
import Content from "../Content/Content"
import {IntSteps} from "./interface"
import { Cards, Wrapper } from "./styles"
const Steps = ({content,locale,title}:IntSteps) => {
    return(
        <Wrapper>
            <Content
                content={content}
                title={title}
            />
            <Cards>
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={0}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={0}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={0}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={0}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={9}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={9}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={0}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={0}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={0}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={0}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={9}
                    title='Kontakt z klientem'
                />
                <Card
                    content='Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.'
                    number={9}
                    title='Kontakt z klientem'
                />
            </Cards>
        </Wrapper>
    )
}
export default Steps;