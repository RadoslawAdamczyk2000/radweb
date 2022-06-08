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
        offer:{
            color:'hsl(0, 0%, 13% ,.7)',
            hover:'hsl(0, 0%, 13% ,.5)',
        },
        gray:'#d6d6d6',
        primary:'#c3dcf1',
        secondary:'#d63c75',
        tertiary:'#cf3a71',
        quatenary:'#e60457',
        code:{
            background:'#333333',
            color:'#1DC6A4'
        },
        navShadow:'0 .25rem .5rem 	hsl(0, 0%, 99%,.18)'
    },
    fonts:{...fonts}
}
export const lightTheme:DefaultTheme = {
    colors:{
        background:'#fdfdfd',
        color:'#0a0a0a',
        offer:{
            color:'hsl(0, 0%, 99%,.7)',
            hover:'hsl(0, 0%, 99%,1)',
        },
        gray:'#3d3d3d',
        primary:'#00C2B2',
        secondary:'#009EFA',
        tertiary:'#DA00A9',
        quatenary:'#FF3569',
        code:{
            background:'#00291D',
            color:'#F9F871'
        },
        navShadow:'0 .25rem .5rem 	hsl(0, 0%, 13%,.18)'
    },
    fonts:{...fonts}
}