import { useContext } from 'react';
import {TiWorld} from 'react-icons/ti';
import { LangContext } from '../../../../../context/LangContext';
import { LangWrapper } from './styles';
const Lang = () => {
    const {open} = useContext(LangContext);
    return(
        <LangWrapper onClick={() => open()}>
            <TiWorld/>
        </LangWrapper>
    )
}
export default Lang;