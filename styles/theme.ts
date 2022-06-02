import { DefaultTheme } from "styled-components"
const fonts = {
    family:{
        code:"'Roboto Mono', monospace",
        heading:"'X-Heighting','Poppins', sans-serif",
        regular:"'Poppins', sans-serif",
    }
}
export const darkTheme:DefaultTheme = {
    colors:{
        background:'#212121',
        color:'#f5f5f5',
        gray:'#d6d6d6',
        primary:'#c3dcf1',
        secondary:'#d63c75',
        tertiary:'#cf3a71',
        quatenary:'#e60457',
        code:{
            background:'#333333',
            color:'#1DC6A4'
        }
    },
    fonts:{...fonts}
}
export const lightTheme:DefaultTheme = {
    colors:{
        background:'#fdfdfd',
        color:'#0a0a0a',
        gray:'#3d3d3d',
        primary:'#00C2B2',
        secondary:'#740CAC',
        tertiary:'#DA00A9',
        quatenary:'#FF3569',
        code:{
            background:'#00291D',
            color:'#F9F871'
        }
    },
    fonts:{...fonts}
}