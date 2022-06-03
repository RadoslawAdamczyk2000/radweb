export const menu = [
    {
        isExpand:false,
        title:'Start',
        path:'/',
        submenu:[]
    },
    {
        isExpand:true,
        title:'O mnie',
        path:'/o-mnie',
        submenu:[
            {
                title:'Kim jestem?',
                path:'/o-mnie/',
            },
            {
                title:'Certyfikaty',
                path:'/o-mnie/certyfikaty-i-kursy',
            },
            {
                title:'Kariera',
                path:'/o-mnie/kariera',
            },
        ],
        value:'about'
    },
    {
        isExpand:true,
        title:'Blog',
        path:'/blog',
        submenu:[
            {
                title:'Programowanie',
                path:'/blog/programowanie',
            },
            {
                title:'SEO',
                path:'/blog/seo',
            },
            {
                title:'Historia',
                path:'/blog/historia',
            },
            {
                title:'Pozostałe',
                path:'/blog',
            },
        ],
        value:'blog'
    },
    {
        isExpand:false,
        title:'Projekty',
        path:'/projekty',
        submenu:[
            {
                title:'Komercyjne',
                path:'/projekty/realizacje-komercyjne',
            },
            {
                title:'Prywatne',
                path:'/projekty/realizacje-prywatne',
            },
        ]
    },
    {
        isExpand:true,
        title:'Oferty',
        path:'/oferty',
        submenu:[
            {
                title:'Strony internetowe',
                path:'/oferty/tworzenie-stron-internetowych',
            },
            {
                title:'Pozycjonowanie',
                path:'/oferty/pozycjonowanie-stron-internetowych',
            },
            {
                title:'Optymalizacja',
                path:'/oferty/optymalizacja-stron-internetowych',
            },
            {
                title:'Analityka',
                path:'/oferty/analityka-stron-internetowych',
            },
            {
                title:'Lokalizacje',
                path:'/oferty/lokalizacje',
            },
            {
                title:'Wszyskie',
                path:'/oferty/',
            },
        ],
        value:'offers'
    },
    {
        isExpand:false,
        title:'FAQ',
        path:'/faq',
        submenu:[]
    },
    // {
    //     isExpand:false,
    //     title:'Kursy',
    //     path:'/',
    //     submenu:[]
    // },
    // {
    //     isExpand:false,
    //     title:'Sklep',
    //     path:'/',
    //     submenu:[]
    // },
    {
        isExpand:false,
        title:'Kontakt',
        path:'/kontakt',
        submenu:[]
    },
]