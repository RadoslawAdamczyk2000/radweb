import { techObj } from "./tech";

export const posts = {
    articles:[
        {
            poster:'https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063_960_720.jpg',
            path:'blog/czym-jest-html-historia-czy-terazniejszosc',
            time:'17:58 11/04/2022',
            title:'Czym jest HTML? - historia czy teraźniejszość?',
            readTime:25
        },
        {
            poster:'https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_960_720.jpg',
            path:'blog/cechy-dobrej-strony-internetowej',
            time:'11:11 12/04/2022',
            title:'Cechy dobrej strony internetowej',
            readTime:'27'
        },
        {
            poster:'https://cdn.pixabay.com/photo/2018/12/04/14/24/warrior-3855706_960_720.jpg',
            path:'blog/czarny-orzel-leszek-czarny',
            time:'12:00 12/04/2022',
            title:'Czarny orzeł - Leszek Czarny',
            readTime:'32'
        },
        {
            poster:'https://cdn.pixabay.com/photo/2020/06/11/19/00/programming-5287885_960_720.jpg',
            path:'/blog/pseudo-css',
            time:'11:50 18/04/2022',
            title:'Pseudo CSS I - pseudoklasy',
            readTime:'32'
        },
        // {
        //     poster:'',
        //     path:'',
        //     time:'',
        //     title:'',
        //     readTime:''
        // },
    ],
    projects:[
        {
            title:'Borówkowy Gaj',
            image:'https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/projekty/zdjecia/borowkowy-gaj.png?raw=true',
            stack:[techObj.html.icon,techObj.css.icon,techObj.bootstrap.icon,techObj.javascript.icon,techObj.seo.icon],
            excerpt:'Każdy postawia swój pierwszy krok na rynku. Moim pierwszym krokiem była strona zrealizowana dla Borókowego Gaju - gospodarstwa, które należy do ojca mojego kolegi. Niedługo minie rok od zrealizowania tej strony. Dziś napewno napisałbym lepiej tą stronę, jednak z perspektywy pozycjonera statystyki są idealne.',
            path:'projekty/borowkowy-gaj'
        },
        // {
        //     title:'',
        //     image:'',
        //     stack:[],
        //     excerpt:'',
        //     path:''
        // },
    ]
}