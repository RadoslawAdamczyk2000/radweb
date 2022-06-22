import { menu } from "../data/menu"
const {pl,pt,fr,es,en,de} = menu;
export const home = {
    pl:{
        hero:'Programowanie i SEO',
        about:{
            button:'Przeczytaj',
            content:`Nazywam się Radosław Adamczyk, mam 21 lat i szczęśliwie ukończyłem KPALO w Śremie, gdzie miałem rozszerzoną matematykę, fizykę, informatykę oraz moją ulubioną historię. Jestem młodym programistą, który od 2016 roku codziennie rozwija swoje umiejętności z zakresu tworzenia stron internetowych oraz od 2021 roku w dziedzinie pozycjonowania.`,
            path:pl[1].path,
            title:'Kim jestem?'
        },
        blog:{
            button:'Wszystkie artykuły',
            content:'Strony internetowe i historia - dwie dziedziny, które są moimi największymi pasjami. Przeszłość i przyszłość. Znajdziesz u mnie tematy związane ze stronami internetowymi, ich tworzeniem oraz pozycjonowaniem jak i zagdanienia historyczne, poczynając od historii lokalnej a kończąc na historii globalnej.',
            path:pl[2].path,
            title:'Blog'
        },
        projects:{
            button:'Poznaj wszystkie',
            content:'Tworzeniem stron oraz aplikacji internetowych zajmuję się już od 2016 roku. Natomiast na poziom komercyjny wkroczyłem na przełomie 2020/2021 roku, kiedy to zacząłem zbierać pierwsze zamówienia. Dlaczego projekty są tak istotne? Niezależnie od tego, czy to realizacja prywatna lub komercyjna, to projekty prezentują rozwój developera.',
            path:pl[3].path,
            title:'Projekty'
        },
        offers:{
            button:'Wszystkie',
            content:'Istnieje wiele sposobów nawiązania ze mną efektywnej współpracy. Co oferuję? Znajdziesz u mnie głównie możliwość napisania strony internetowej typu blog, czy też portfolio. Ponadto istnieje opcja nawiązania komercyjnej współpracy przy pozycjonowaniu oraz optymalizacji, czyli wprowadzaniu zmian na istniejących już stronach.',
            path:pl[4].path,
            title:'Oferty',
            card:'więcej',
            cards:[]
        },
        steps:{
            content:'Proces tworzenia stron internetowych przeze mnie jest kompletny, gdzie najważniejszy nacisk nakładam na klienta, użytkownika strony oraz wyszukiwarkę.Jeśli chcesz abym zrealizował dla Ciebie stronę internetową, to warto wiedzieć jak wygląda ten proces.',
            title:'',
            cards:[]
        }
    },
    pt:{
        hero:'Programação e SEO',
        about:{
            button:'Leia',
            content:'Meu nome é Radosław Adamczyk, tenho 21 anos e me formei feliz na KPALO em Śrem, onde aprendi matemática, física, ciência da computação e minha história favorita. Sou um jovem programador que vem desenvolvendo minhas habilidades de desenvolvimento web todos os dias desde 2016 e desde 2021 na área de posicionamento.',
            path:pt[1].path,
            title:'Quem sou eu?'
        },
        blog:{
            button:'Todos os artigos',
            content:'Websites e história - duas áreas que são as minhas maiores paixões. Passado e futuro. Você encontrará aqui tópicos relacionados a sites, sua criação e posicionamento, bem como questões históricas, que vão desde a história local até a história global.',
            path:pt[2].path,
            title:'Blogue'
        },
        projects:{
            button:'Conheça todos eles',
            content:'Crio websites e aplicações web desde 2016. No entanto, entrei no nível comercial na virada de 2020/2021, quando comecei a coletar meus primeiros pedidos. Por que os projetos são tão importantes? Independentemente de ser um projeto privado ou comercial, os projetos mostram o desenvolvimento do desenvolvedor.',
            path:pt[3].path,
            title:'Projetos'
        },
        offers:{
            button:'Tudo',
            content:'Há muitas maneiras de estabelecer uma cooperação eficaz comigo. O que estou oferecendo? Você encontrará aqui principalmente a possibilidade de escrever um blog ou site de portfólio. Além disso, existe a opção de estabelecer cooperação comercial em posicionamento e otimização, ou seja, introduzir alterações em sites existentes.',
            path:pt[4].path,
            title:'Ofertas',
            card:'mais',
            cards:[]
        },
        steps:{
            content:'O processo de criação de sites por mim é completo, onde a ênfase mais importante é no cliente, usuário do site e mecanismo de busca. Se você quer que eu crie um site para você, vale a pena saber como é esse processo.',
            title:'Processo de atendimento de pedidos',
            cards:[]
        }
    },
    fr:{
        hero:'Programmation et référencement',
        about:{
            button:'Continuer à lire',
            content:`Je m'appelle Radosław Adamczyk, j'ai 21 ans et j'ai été diplômé avec bonheur de KPALO à Śrem, où j'ai étudié les mathématiques, la physique, l'informatique et mon histoire préférée. Je suis un jeune programmeur qui développe chaque jour mes compétences en développement web depuis 2016 et depuis 2021 dans le domaine du positionnement.`,
            path:fr[1].path,
            title:'Qui suis je?'
        },
        blog:{
            button:'Tous les articles',
            content:`Sites Web et histoire - deux domaines qui sont mes plus grandes passions. Passé et futur. Vous y trouverez des sujets liés aux sites web, à leur création et leur positionnement ainsi que des enjeux historiques, allant de l'histoire locale à l'histoire globale.`,
            path:fr[2].path,
            title:'Blog'
        },
        projects:{
            button:'Rencontrez-les tous',
            content:`Je crée des sites et des applications web depuis 2016. Cependant, je suis entré dans le niveau commercial au tournant de 2020/2021, lorsque j'ai commencé à collecter mes premières commandes. Pourquoi les projets sont-ils si importants ? Qu'il s'agisse d'un projet privé ou commercial, les projets montrent le développement du développeur.`,
            path:fr[3].path,
            title:'Projets'
        },
        offers:{
            button:'Tout',
            content:`Il existe de nombreuses façons d'établir une coopération efficace avec moi. Qu'est-ce que je propose ? Vous trouverez ici principalement la possibilité de rédiger un blog ou un site portfolio. En outre, il existe une possibilité d'établir une coopération commerciale dans le positionnement et l'optimisation, c'est-à-dire l'introduction de modifications sur les sites Web existants.`,
            path:fr[4].path,
            title:'Des offres',
            card:'Suite',
            cards:[]
        },
        steps:{
            content:`Le processus de création de sites Web par moi est terminé, l'accent étant mis sur le client, l'utilisateur du site Web et le moteur de recherche. Si vous souhaitez que je crée un site Web pour vous, il est utile de savoir à quoi ressemble ce processus.`,
            title:`Processus d'exécution des commandes`,
            cards:[]
        }
    },
    en:{
        hero:'Programming and SEO',
        about:{
            button:'Read on',
            content:`My name is Radoslaw Adamczyk. I have 21 years old and I finished KPALO in Śrem, where I had extended math, physics, computer science, and my favourite - history. I'm young developer who every day involving own programmer skills since 2016, and positioning skills since 2021.`,
            path:en[1].path,
            title:'Who am I?'
        },
        blog:{
            button:'All articles',
            content:'Websites and history - two areas that are my greatest passions. Past and future. You will find here topics related to websites, their creation and positioning as well as historical issues, ranging from local history to global history.',
            path:en[2].path,
            title:'Blog'
        },
        projects:{
            button:'Meet them all',
            content:'I have been creating websites and web applications since 2016. However, I entered the commercial level at the turn of 2020/2021, when I started collecting my first orders. Why are projects so important? Regardless of whether it is a private or commercial project, the projects show the development of the developer.',
            path:en[3].path,
            title:'Projects'
        },
        offers:{
            button:'All',
            content:'There are many ways to establish effective cooperation with me. What am i offering? You will find here mainly the possibility of writing a blog or portfolio website. In addition, there is an option to establish commercial cooperation in positioning and optimization, i.e. introducing changes to existing websites.',
            path:en[4].path,
            title:'Offers',
            card:'more',
            cards:[]
        },
        steps:{
            content:'The process of creating websites by me is complete, where the most important emphasis is on the client, website user and search engine. If you want me to create a website for you, it is worth knowing what this process looks like.',
            title:'Order fulfillment process',
            cards:[]
        }
    },
    es:{
        hero:'Programación y SEO',
        about:{
            button:'Sigue leyendo',
            content:'Mi nombre es Radosław Adamczyk, tengo 21 años y felizmente me gradué de KPALO en Śrem, donde estudié matemáticas, física, informática y mi historia favorita. Soy un joven programador que viene desarrollando cada día mis habilidades de desarrollo web desde 2016 y desde 2021 en el ámbito del posicionamiento.',
            path:es[1].path,
            title:'¿Quién soy?'
        },
        blog:{
            button:'Todos los artículos',
            content:'Sitios web e historia: dos áreas que son mis mayores pasiones. Pasado y futuro. Aquí encontrará temas relacionados con los sitios web, su creación y posicionamiento, así como temas históricos, que van desde la historia local hasta la historia global.',
            path:es[2].path,
            title:'Blog'
        },
        projects:{
            button:'Conócelos a todos',
            content:'He estado creando sitios web y aplicaciones web desde 2016. Sin embargo, entré al nivel comercial a finales de 2020/2021, cuando comencé a recolectar mis primeros pedidos. ¿Por qué son tan importantes los proyectos? Independientemente de si es un proyecto privado o comercial, los proyectos muestran el desarrollo del desarrollador.',
            path:es[3].path,
            title:'Proyectos'
        },
        offers:{
            button:'Todos',
            content:'Hay muchas maneras de establecer una cooperación efectiva conmigo. ¿Qué estoy ofreciendo? Aquí encontrará principalmente la posibilidad de escribir un blog o un sitio web de cartera. Además, existe la opción de establecer cooperación comercial en posicionamiento y optimización, es decir, introducir cambios en sitios web existentes.',
            path:es[4].path,
            title:'Ofertas',
            card:'más',
            cards:[]
        },
        steps:{
            content:'El proceso de creación de sitios web por mí está completo, donde el énfasis más importante está en el cliente, el usuario del sitio web y el motor de búsqueda.Si quieres que cree un sitio web para ti, vale la pena saber cómo es este proceso.',
            title:'Proceso de cumplimiento de pedidos',
            cards:[]
        }
    },
    de:{
        hero:'Programmierung und SEO',
        about:{
            button:'Weiter lesen',
            content:'Mein Name ist Radosław Adamczyk, ich bin 21 Jahre alt und habe glücklich meinen Abschluss an der KPALO in Śrem gemacht, wo ich Mathematik, Physik, Informatik und meine Lieblingsgeschichte erweitert habe. Ich bin ein junger Programmierer, der seit 2016 täglich seine Fähigkeiten in der Webentwicklung und seit 2021 im Bereich Positionierung weiterentwickelt.',
            path:de[1].path,
            title:'Wer bin ich?'
        },
        blog:{
            button:'Alle Artikel',
            content:'Websites und Geschichte – zwei Bereiche, die meine größten Leidenschaften sind. Vergangenheit und Zukunft. Hier finden Sie Themen rund um Websites, deren Erstellung und Positionierung sowie historische Fragestellungen von der Lokalgeschichte bis zur Weltgeschichte.',
            path:de[2].path,
            title:'Bloggen'
        },
        projects:{
            button:'Treffen Sie sie alle',
            content:'Seit 2016 erstelle ich Websites und Webanwendungen. In die kaufmännische Ebene bin ich jedoch zum Jahreswechsel 2020/2021 eingestiegen, als ich anfing, meine ersten Bestellungen zu sammeln. Warum sind Projekte so wichtig? Egal ob privates oder gewerbliches Projekt, die Projekte zeigen die Entwicklung des Entwicklers.',
            path:de[3].path,
            title:'Projekte'
        },
        offers:{
            button:'Alle',
            content:'Es gibt viele Möglichkeiten, eine effektive Zusammenarbeit mit mir aufzubauen. Was biete ich an? Hier finden Sie hauptsächlich die Möglichkeit, einen Blog oder eine Portfolio-Website zu schreiben. Darüber hinaus besteht die Möglichkeit, eine kommerzielle Zusammenarbeit bei der Positionierung und Optimierung aufzubauen, dh Änderungen an bestehenden Websites vorzunehmen.',
            path:de[4].path,
            title:'Bietet an',
            card:'mehr',
            cards:[]
        },
        steps:{
            content:'Der Prozess der Erstellung von Websites durch mich ist abgeschlossen, wobei der Kunde, der Website-Benutzer und die Suchmaschine im Mittelpunkt stehen.Wenn Sie möchten, dass ich eine Website für Sie erstelle, ist es wichtig zu wissen, wie dieser Prozess aussieht.',
            title:'Auftragsabwicklung',
            cards:[]
        }
    }
}