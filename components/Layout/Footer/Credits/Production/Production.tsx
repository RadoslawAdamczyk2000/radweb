import { ProductionWrapper } from "./styles";

const Production = () => {
    const year = new Date().getFullYear();
    return(
        <ProductionWrapper>
            <p>
                &copy; 2021-{year} RadWEB
            </p>
        </ProductionWrapper>
    )
}
export default Production;