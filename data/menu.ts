import { IntMenu } from "./interface";
export const menu:IntMenu = {
    pl:[
        {
            isExpand:false,
            title:'Start',
            path:'/',
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
        },
        {
            isExpand:true,
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
                {
                    title:'Wszystkie',
                    path:'/projekty',
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
        },
        {
            isExpand:false,
            title:'FAQ',
            path:'/faq',
        },
        {
            isExpand:false,
            title:'Kontakt',
            path:'/kontakt',
        }
    ],
    pt:[
        {
            isExpand:false,
            title:'Começar',
            path:'/',
        },
        {
            isExpand:true,
            title:'Sobre mim',
            path:'/sobre-mim',
            submenu:[
                {
                    title:'Quem sou eu?',
                    path:'/sobre-mim/',
                },
                {
                    title:'Certificados',
                    path:'/sobre-mim/certificados-e-cursos',
                },
                {
                    title:'Carreira',
                    path:'/sobre-mim/carreira',
                },
            ],
        },
        {
            isExpand:true,
            title:'Blog',
            path:'/blog',
            submenu:[
                {
                    title:'Programação',
                    path:'/blog/programacao',
                },
                {
                    title:'SEO',
                    path:'/blog/seo',
                },
                {
                    title:'História',
                    path:'/blog/historia',
                },
                {
                    title:'O restante',
                    path:'/blog',
                },
            ],
        },
        {
            isExpand:true,
            title:'Projetos',
            path:'/projetos',
            submenu:[
                {
                    title:'Comercial',
                    path:'/projetos/realizacoes-comerciais',
                },
                {
                    title:'Privado',
                    path:'/projetos/projetos-privados',
                },
                {
                    title:'Tudo',
                    path:'/projetos',
                },
            ]
        },
        {
            isExpand:true,
            title:'Ofertas',
            path:'/ofertas',
            submenu:[
                {
                    title:'Sites',
                    path:'/ofertas/criando-sites',
                },
                {
                    title:'SEO',
                    path:'/ofertas/seo',
                },
                {
                    title:'Otimização',
                    path:'/ofertas/otimizacao-de-sites',
                },
                {
                    title:'Análise',
                    path:'/ofertas/analise-do-site',
                },
                {
                    title:'Localizações',
                    path:'/ofertas/localizacoes',
                },
                {
                    title:'Tudo',
                    path:'/ofertas/',
                },
            ],
        },
        {
            isExpand:false,
            title:'FAQ',
            path:'/faq',
        },
        {
            isExpand:false,
            title:'Contato',
            path:'/contato',
        }
    ],
    fr:[
        {
            isExpand:false,
            title:'Début',
            path:'/',
        },
        {
            isExpand:true,
            title:'À propos de moi',
            path:'/a-propos-de-moi',
            submenu:[
                {
                    title:'Qui suis je?',
                    path:'/a-propos-de-moi/',
                },
                {
                    title:'Certificats',
                    path:'/a-propos-de-moi/certificats-et-cours',
                },
                {
                    title:'Carrière',
                    path:'/a-propos-de-moi/carriere',
                },
            ],
        },
        {
            isExpand:true,
            title:'Blog',
            path:'/blog',
            submenu:[
                {
                    title:'Programmation',
                    path:'/blog/programmation',
                },
                {
                    title:'Référencement',
                    path:'/blog/referencement',
                },
                {
                    title:'Histoire',
                    path:'/blog/histoire',
                },
                {
                    title:'Le reste',
                    path:'/blog',
                },
            ],
        },
        {
            isExpand:true,
            title:'Projets',
            path:'/projets',
            submenu:[
                {
                    title:'Commercial',
                    path:'/projets/realisations-commerciales',
                },
                {
                    title:'Privé',
                    path:'/projets/projets-prives',
                },
                {
                    title:'Tout',
                    path:'/projets',
                },
            ]
        },
        {
            isExpand:true,
            title:'Des offres',
            path:'/des-offres',
            submenu:[
                {
                    title:'Sites Internet',
                    path:'/des-offres/creation-de-sites-web',
                },
                {
                    title:'Positionnement',
                    path:'/des-offres/referencement',
                },
                {
                    title:'Optimisation',
                    path:'/des-offres/optimisation-de-site-web',
                },
                {
                    title:'Analytique',
                    path:'/des-offres/analyse-de-site-web',
                },
                {
                    title:'Emplacements',
                    path:'/des-offres/emplacements',
                },
                {
                    title:'Tout',
                    path:'/des-offres',
                },
            ],
        },
        {
            isExpand:false,
            title:'FAQ',
            path:'/faq',
        },
        {
            isExpand:false,
            title:'Contactez',
            path:'/contactez',
        }
    ],
    en:[
        {
            isExpand:false,
            title:'Start',
            path:'/',
        },
        {
            isExpand:true,
            title:'About me',
            path:'/about-me',
            submenu:[
                {
                    title:'Who am I?',
                    path:'/about-me',
                },
                {
                    title:'Certifcates',
                    path:'/about-me/certificates-and-courses',
                },
                {
                    title:'Career',
                    path:'/about-me/career',
                },
            ],
        },
        {
            isExpand:true,
            title:'Blog',
            path:'/blog',
            submenu:[
                {
                    title:'Programming',
                    path:'/blog/programming',
                },
                {
                    title:'SEO',
                    path:'/blog/seo',
                },
                {
                    title:'History',
                    path:'/blog/history',
                },
                {
                    title:'Another',
                    path:'/blog',
                },
            ],
        },
        {
            isExpand:true,
            title:'Projects',
            path:'/projects',
            submenu:[
                {
                    title:'Commercial',
                    path:'/projects/commercial-realizations',
                },
                {
                    title:'Private',
                    path:'/projects/private-realizations',
                },
                {
                    title:'All projects',
                    path:'/projects',
                },
            ]
        },
        {
            isExpand:true,
            title:'Offers',
            path:'/offers',
            submenu:[
                {
                    title:'Websites',
                    path:'/offers/creating-websites',
                },
                {
                    title:'SEO',
                    path:'/offers/seo',
                },
                {
                    title:'Optimization',
                    path:'/offers/website-optimization',
                },
                {
                    title:'Analytics',
                    path:'/offers/website-analytics',
                },
                {
                    title:'Localizations',
                    path:'/offers/localizations',
                },
                {
                    title:'All offers',
                    path:'/offers/',
                },
            ],
        },
        {
            isExpand:false,
            title:'FAQ',
            path:'/faq',
        },
        {
            isExpand:false,
            title:'Contact',
            path:'/contact',
        }
    ],
    es:[
        {
            isExpand:false,
            title:'Comienzo',
            path:'/',
        },
        {
            isExpand:true,
            title:'Sobre mí',
            path:'/sobre-mi',
            submenu:[
                {
                    title:'Quién soy',
                    path:'/sobre-mi/',
                },
                {
                    title:'Certificados',
                    path:'/sobre-mi/certificados-y-cursos',
                },
                {
                    title:'Carrera',
                    path:'/sobre-mi/carrera-profesional',
                },
            ],
        },
        {
            isExpand:true,
            title:'Blog',
            path:'/blog',
            submenu:[
                {
                    title:'Programación',
                    path:'/blog/programacion',
                },
                {
                    title:'Posicionamiento',
                    path:'/blog/posicionamiento-web',
                },
                {
                    title:'Historia',
                    path:'/blog/historia',
                },
                {
                    title:'El restante',
                    path:'/blog',
                },
            ],
        },
        {
            isExpand:true,
            title:'Proyectos',
            path:'/proyectos',
            submenu:[
                {
                    title:'Comercial',
                    path:'/proyectos/realizaciones-comerciales',
                },
                {
                    title:'Privado',
                    path:'/proyectos/proyectos-privados',
                },
                {
                    title:'Todos',
                    path:'/proyectos',
                },
            ]
        },
        {
            isExpand:true,
            title:'Ofertas',
            path:'/ofertas',
            submenu:[
                {
                    title:'Sitios web',
                    path:'/ofertas/creando-sitios-web',
                },
                {
                    title:'SEO',
                    path:'/ofertas/seo',
                },
                {
                    title:'Mejoramiento',
                    path:'/ofertas/optimizacion-del-sitio-web',
                },
                {
                    title:'Analítica',
                    path:'/ofertas/analisis-de-sitios-web',
                },
                {
                    title:'Ubicaciones',
                    path:'/ofertas/ubicaciones',
                },
                {
                    title:'Todos',
                    path:'/oferty/',
                },
            ],
        },
        {
            isExpand:false,
            title:'FAQ',
            path:'/faq',
        },
        {
            isExpand:false,
            title:'Contacto',
            path:'/contacto',
        }
    ],
    de:[
        {
            isExpand:false,
            title:'Anfang',
            path:'/',
        },
        {
            isExpand:true,
            title:'Über mich',
            path:'/uber-mich',
            submenu:[
                {
                    title:'Wer bin ich?',
                    path:'/uber-mich/',
                },
                {
                    title:'Zertifikat',
                    path:'/uber-mich/certifikat-und-kurse',
                },
                {
                    title:'Karriere',
                    path:'/uber-mich/karriere',
                },
            ],
        },
        {
            isExpand:true,
            title:'Bloggen',
            path:'/bloggen',
            submenu:[
                {
                    title:'Programmierung',
                    path:'/bloggen/programmierung',
                },
                {
                    title:'SEO',
                    path:'/bloggen/seo',
                },
                {
                    title:'Geschichte',
                    path:'/bloggen/geschichte',
                },
                {
                    title:'Der Rest',
                    path:'/bloggen',
                },
            ],
        },
        {
            isExpand:true,
            title:'Projekte',
            path:'/projekte',
            submenu:[
                {
                    title:'Kommerziell',
                    path:'/projekte/kommerzielle-realisierungen',
                },
                {
                    title:'Privatgelände',
                    path:'/projekte/private-projekte',
                },
                {
                    title:'Alle',
                    path:'/projekte',
                },
            ]
        },
        {
            isExpand:true,
            title:'Bietet an',
            path:'/bietet-an',
            submenu:[
                {
                    title:'Webseiten',
                    path:'/bietet-an/webseiten-erstellen',
                },
                {
                    title:'SEO',
                    path:'/bietet-an/seo',
                },
                {
                    title:'Optimierung',
                    path:'/bietet-an/website-optimierung',
                },
                {
                    title:'Analytik',
                    path:'/bietet-an/website-analyse',
                },
                {
                    title:'Standorte',
                    path:'/bietet-an/standorte',
                },
                {
                    title:'Alle',
                    path:'/bietet-an/',
                },
            ],
        },
        {
            isExpand:false,
            title:'FAQ',
            path:'/faq',
        },
        {
            isExpand:false,
            title:'Kontakt',
            path:'/kontakt',
        }
    ]
}
export const menuLang = [
    {
        path:'pl',
        title:'Polski'
    },
    {
        path:'en',
        title:'English'
    },
    {
        path:'fr',
        title:'Français'
    },
    {
        path:'de',
        title:'Deutsch'
    },
    {
        path:'es',
        title:'Español'
    },
    {
        path:'pt',
        title:'Português'
    }
]