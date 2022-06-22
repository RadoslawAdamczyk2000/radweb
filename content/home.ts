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
            cards:[
                {
                    title:'Strony internetowe',
                    content:`Strona internetowa jest idealnym pomysłem na rozszerzenie swojej działalności na internet, z którego można pozyskać nowych klientów. Dlatego postaw na niepowtarzalne i responsywne strony internetowe.`,
                    path:'/oferty/tworzenie-stron-internetowych'
                },
                {
                    title:'Pozycjonowanie',
                    content:`Skoro posiadasz już własną i niepowtarzalną stronę internetową warto aby była widoczna w sieci. Za te zabiegi odpowiada pozycjonowanie. Wypozycjonuję zarówno stronę, blog jak i sklep internetowy `,
                    path:'/oferty/pozycjonowanie-stron-internetowych'
                },
                {
                    title:'Optymalizacja',
                    content:`Jak dom potrzebuje remontu, lub jak samochód wymaga fachowej naprawy, tak strony internetowe potrzebują fachowca, który usunie błędy i nada nowego wyglądu witrynom internetowym.`,
                    path:'/oferty/optymalizacja-stron-internetowych'
                }
            ]
        },
        steps:{
            content:'Proces tworzenia stron internetowych przeze mnie jest kompletny, gdzie najważniejszy nacisk nakładam na klienta, użytkownika strony oraz wyszukiwarkę.Jeśli chcesz abym zrealizował dla Ciebie stronę internetową, to warto wiedzieć jak wygląda ten proces.',
            title:'Proces realizacji stron',
            cards:[
                {
                    content:'Rozmowa z klientem na temat tego, jaką ma wizję na stronę, wraz z preferowanymi funkcjonalnościami oraz paletą barw.',                    		   
                    title:'Kontakt z klientem',
                },
                {
                    content:'Każda strona zrealizowana przeze mnie, ma wizualizować cechy firmy bądź przedsiębiorstwa. W tym celu zbieram materiały, które zainspirują mnie do stworzenia jedynej w swoim rodzaju strony.',
                    title:'Zebranie pomysłów',
                },
                {
                    content:'Po zebraniu pomysłów tworzę szkic strony, gdzie przenoszę na papier to co chcę zrobić na stronie. Tworzę makiety do każdego ekranu, ponieważ wiem jak istotne jest to aby strony internetowe były dopasowane do każdego urządzenia (responsywne).',
                    title:'Stworzenie szkiców',
                },
                {
                    content:'Kolejnym etapem jest wybranie najlepszych technolgii i narzędzi, bo jak wiadomo, każdy problem wymaga innego podejścia.',
                    title:'Wybór technologii i narzędzi',
                },
                {
                    content:'Po zrealizowaniu powyższych punktów konsultuję się z usługobiorcą, czy akceptuje koncept strony, jednocześnie w klarownymi i prostymi słowami wyjaśniam jakie procesy będą zachodzić na stronie oraz dlaczego wykorzystam takie technologie.',
                    title:'Konsultacja z klientem',
                },
                {
                    content:'Najbardziej czasochłonna, a także jednocześnie najprzyjemniejsza czynność, gdzie to co miałem w głowie jest przenoszone na język zrozumiały dla komputera - czyli programuję stronę.',
                    title:'Proces tworzenia.',
                },
                {
                    content:'Po zakończeniu procesu tworzenia strony internetowej zamieszczam stronę na prywatnym serwerze, po czym przekazuję klientowi link do produktu. Po zebraniu uwag, poprawiam podane zastrzeżenia, gdzie później ponowanie przekazuję stronę do weryfikacji.',
                    title:'Rozmowa z klientem - zebranie opinii',
                },
                {
                    content:'Aby klient miał możność kontrolowania wyników strony w internecie instaluję najważniejsze aplikacje do mierzenia widoczności witryny internetowej: Google Search Console oraz Google Anayltics.',
                    title:'Zainstalowanie narzędzi Google',
                },
                {
                    content:'Przedostatnim krokiem jest przeniesienie strony na serwer oraz przypisanie domeny. Po wykonaniu tej czynności indeksuję stronę w wyszukiwarkach internetowych, aby mogły już zbierać pierwsze wyświetlenia.',
                    title:'Zaindeksowanie strony',
                },
                {
                    content:'Na deser, oddaję klientowi stronę do użytku, gdzie może się cieszyć swoją stroną internetową i zaistnieć w cyfrowym świecie.',
                    title:'Oddanie strony do użytku',
                }
            ]
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
            cards:[
                {
                    title:'Sites',
                    content:`Um website é uma ideia ideal para expandir o seu negócio para a Internet, a partir da qual pode conquistar novos clientes. Portanto, escolha sites exclusivos e responsivos.`,
                    path:'/ofertas/criando-sites'
                },
                {
                    title:'SEO',
                    content:`Como você já tem um site próprio e exclusivo, vale a pena torná-lo visível na web. O posicionamento é responsável por esses tratamentos. Vou posicionar tanto o site, blog e loja online`,
                    path:'/ofertas/seo'
                },
                {
                    title:'Otimização',
                    content:`Quando uma casa precisa de reforma ou um carro precisa de reparo profissional, os sites precisam de um especialista que remova os erros e dê um novo visual aos sites.`,
                    path:'/ofertas/otimizacao-de-sites'
                }
            ]
        },
        steps:{
            content:'O processo de criação de sites por mim é completo, onde a ênfase mais importante é no cliente, usuário do site e mecanismo de busca. Se você quer que eu crie um site para você, vale a pena saber como é esse processo.',
            title:'Processo de atendimento de pedidos',
            cards:[
                {
                    content:'Conversa com o cliente sobre sua visão do site, juntamente com as funcionalidades e paleta de cores preferidas.',
                    title:'Contato com o cliente',
                },
                {
                    content:'Cada site feito por mim é para visualizar as características de uma empresa ou empreendimento. Para isso, coleto materiais que me inspirarão a criar um site único. ',
                    title:'Reunindo ideias',
                },
                {
                    content:'Depois de coletar ideias, crio um esboço de página, onde transfiro para o papel o que quero fazer na página. Crio maquetes para cada tela, pois sei o quanto é importante que os sites sejam adaptados a cada dispositivo (responsivo). ',
                    title: 'Criação de croquis',
                },
                {
                    content:'O próximo passo é escolher as melhores tecnologias e ferramentas, pois como você sabe, cada problema requer uma abordagem diferente.',
                    title:'Escolha de tecnologia e ferramentas',
                },
                {
                    content:'Depois de completar os pontos acima, consulto o destinatário se ele aceita o conceito do site, ao mesmo tempo em palavras claras e simples explico quais processos ocorrerão no site e por que usarei tais tecnologias.',
                    title:'Consulta ao cliente',
                },
                {
                    content:'A atividade mais demorada e também mais prazerosa, onde o que eu tinha na cabeça é transferido para uma linguagem compreensível para o computador - ou seja, eu programo o site.',
                    title:'Processo de Desenvolvimento.',
                },
                {
                    content:'Após concluir o processo de criação do site, coloco o site em um servidor privado e, em seguida, forneço ao cliente um link para o produto. Depois de coletar meus comentários, corrijo as reservas fornecidas e, em seguida, envio a página para verificação novamente. ',
                    title:'Conversa com o cliente - coleta de opiniões',
                },
                {
                    content:'Para que o cliente possa controlar os resultados do site na Internet, instalo os aplicativos mais importantes para medir a visibilidade do site: Google Search Console e Google Anayltics.',
                    title:'Instalar ferramentas do Google',
                },
                {
                    content:'O penúltimo passo é transferir o site para o servidor e atribuir o domínio. Depois de fazer isso, indexo a página nos buscadores para que eles possam coletar as primeiras visualizações. ',
                    title:'Indexação de sites',
                },
                {
                    content:'Para a sobremesa, estou dando ao cliente um site para usar, onde ele pode curtir seu site e aparecer no mundo digital.',
                    title:'Colocando o site em uso',
                }
            ]
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
            cards:[
                {
                    title:'Sites Internet',
                    content:`Un site Web est une idée idéale pour développer votre entreprise sur Internet, à partir de laquelle vous pouvez gagner de nouveaux clients. Par conséquent, choisissez des sites Web uniques et réactifs.`,
                    path:'/des-offres/creation-de-sites-web'
                },
                {
                    title:'Positionnement',
                    content:`Puisque vous avez déjà votre propre site Web unique, cela vaut la peine de le rendre visible sur le Web. Le positionnement est responsable de ces traitements. Je positionnerai à la fois le site web, le blog et la boutique en ligne`,
                    path:'/des-offres/referencement'
                },
                {
                    title:'Optimisation',
                    content:`Lorsqu'une maison a besoin d'être rénovée ou qu'une voiture a besoin d'une réparation professionnelle, les sites Web ont besoin d'un spécialiste qui supprimera les erreurs et donnera un nouveau look aux sites Web.`,
                    path:'/des-offres/optimisation-de-site-web'
                }
            ]
        },
        steps:{
            content:`Le processus de création de sites Web par moi est terminé, l'accent étant mis sur le client, l'utilisateur du site Web et le moteur de recherche. Si vous souhaitez que je crée un site Web pour vous, il est utile de savoir à quoi ressemble ce processus.`,
            title:`Processus d'exécution des commandes`,
            cards:[
                {
                    content:'Conversation avec le client sur sa vision du site Web, ainsi que sur les fonctionnalités et la palette de couleurs préférées.',
                    title:'Contact avec le client',
                },
                {
                    content:`Chaque site web que j'ai réalisé sert à visualiser les caractéristiques d'une société ou d'une entreprise. À cette fin, je collecte des matériaux qui m'inspireront pour créer un site Web unique en son genre.`,
                    title:"Recueillir des idées",
                },
                {
                    content:'Après avoir collecté des idées, je crée un croquis de page, où je transfère sur papier ce que je veux faire sur la page. Je crée des maquettes pour chaque écran, car je sais à quel point il est important que les sites web soient adaptés à chaque appareil (responsive).',
                    title:'Création de croquis',
                },
                {
                    content:'La prochaine étape consiste à choisir les meilleures technologies et outils, car comme vous le savez, chaque problème nécessite une approche différente.',
                    title:'Choix de la technologie et des outils',
                },
                {
                    content:`Après avoir complété les points ci-dessus, je consulte le destinataire pour savoir s'il accepte le concept du site Web, en même temps, en termes clairs et simples, j'explique quels processus auront lieu sur le site Web et pourquoi j'utiliserai ces technologies.`,
                    title:'Conseil client',
                },
                {
                    content:`L'activité la plus chronophage et aussi la plus agréable, où ce que j'avais dans la tête est transféré dans un langage compréhensible pour l'ordinateur - c'est-à-dire que je programme le site Web.`,
                    title:'Processus de développement.',
                },
                {
                    content:'Après avoir terminé le processus de création du site Web, je place le site Web sur un serveur privé, puis je fournis au client un lien vers le produit. Après avoir recueilli mes commentaires, je corrige les réserves données, puis je soumets à nouveau la page pour vérification. ',
                    title:`Conversation avec le client - recueil d'avis`,
                },
                {
                    content:`Afin que le client puisse contrôler les résultats du site Web sur Internet, j'installe les applications les plus importantes pour mesurer la visibilité du site Web : Google Search Console et Google Anayltics.`,
                    title:"Installer les outils Google",
                },
                {
                    content:`L'avant-dernière étape consiste à transférer le site Web sur le serveur et à attribuer le domaine. Après cela, j'indexe la page dans les moteurs de recherche afin qu'ils puissent collecter les premières vues.`,
                    title:'Indexation du site',
                },
                {
                    content:'Pour le dessert, je donne au client un site Web à utiliser, où il peut profiter de son site Web et apparaître dans le monde numérique.',
                    title:'Utilisation du site Web',
                }
            ]
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
            cards:[
                {
                    title:'Websites',
                    content:`A website is an ideal idea to expand your business to the Internet, from which you can gain new customers. Therefore, choose unique and responsive websites.`,
                    path:'/offers/creating-websites'
                },
                {
                    title:'SEO',
                    content:`Since you already have your own and unique website, it is worth making it visible on the web. Positioning is responsible for these treatments. I will position both the website, blog and online store`,
                    path:'/offers/seo'
                },
                {
                    title:'Optimization',
                    content:`When a house needs renovation, or a car needs professional repair, websites need a specialist who will remove errors and give websites a new look.`,
                    path:'/offers/website-optimization'
                }
            ]
        },
        steps:{
            content:'The process of creating websites by me is complete, where the most important emphasis is on the client, website user and search engine. If you want me to create a website for you, it is worth knowing what this process looks like.',
            title:'Order fulfillment process',
            cards:[
                {
                    content:'Conversation with the client about his vision of the website, along with the preferred functionalities and color palette.',
                    title: 'Contact with the client',
                },
                {
                    content: 'Each website made by me is to visualize the features of a company or enterprise. For this purpose, I collect materials that will inspire me to create a one-of-a-kind website. ',
                    title: 'Gathering ideas',
                },
                {
                    content:'After collecting ideas, I create a page sketch, where I transfer to paper what I want to do on the page. I create mockups for each screen, because I know how important it is that websites should be adapted to each device (responsive). ',
                    title:'Creation of sketches',
                },
                {
                    content:'The next step is to choose the best technologies and tools, because as you know, each problem requires a different approach.',
                    title: 'Choice of technology and tools',
                },
                {
                    content:'After completing the above points, I consult with the recipient whether he accepts the website concept, at the same time in clear and simple words I explain what processes will take place on the website and why I will use such technologies.',
                    title:'Customer consultation',
                },
                {
                    content:'The most time-consuming and also the most pleasant activity, where what I had in my head is transferred to a language understandable for the computer - that is, I program the website.',
                    title:'Development Process.',
                },
                {
                    content:'After completing the website creation process, I place the website on a private server and then provide the client with a link to the product. After collecting my comments, I correct the given reservations, and then submit the page for verification again. ',
                    title: 'Conversation with the client - collecting opinions',
                },
                {
                    content:'In order for the client to be able to control the results of the website on the Internet, I install the most important applications for measuring the visibility of the website: Google Search Console and Google Anayltics.',
                    title:'Install Google tools',
                },
                {
                    content: 'The penultimate step is transferring the website to the server and assigning the domain. After doing this, I index the page in search engines so that they can collect the first views. ',
                    title: 'Site indexing',
                },
                {
                    content:'For dessert, I am giving the client a website to use, where he can enjoy his website and appear in the digital world.',
                    title:'Putting the website to use',
                }
            ]
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
            cards:[
                {
                    title:'Sitios web',
                    content:`Un sitio web es una idea ideal para expandir tu negocio a Internet, desde el cual puedes ganar nuevos clientes. Por lo tanto, elija sitios web únicos y receptivos.`,
                    path:'/ofertas/creando-sitios-web'
                },
                {
                    title:'SEO',
                    content:`Dado que ya tiene su propio y único sitio web, vale la pena hacerlo visible en la web. El posicionamiento es el responsable de estos tratamientos. Posicionaré tanto la web, el blog como la tienda online`,
                    path:'/ofertas/seo'
                },
                {
                    title:'Mejoramiento',
                    content:`Cuando una casa necesita una renovación o un automóvil necesita una reparación profesional, los sitios web necesitan un especialista que elimine los errores y les dé una nueva apariencia.`,
                    path:'/ofertas/optimizacion-del-sitio-web'
                }
            ]
        },
        steps:{
            content:'El proceso de creación de sitios web por mí está completo, donde el énfasis más importante está en el cliente, el usuario del sitio web y el motor de búsqueda.Si quieres que cree un sitio web para ti, vale la pena saber cómo es este proceso.',
            title:'Proceso de cumplimiento de pedidos',
            cards:[
                {
                    content: 'Conversación con el cliente sobre su visión del sitio web, junto con las funcionalidades preferidas y la paleta de colores.',
                    title: 'Contacto con el cliente',
                },
                {
                    content: 'Cada sitio web hecho por mí es para visualizar las características de una empresa o emprendimiento. Para este propósito, recopilo materiales que me inspirarán para crear un sitio web único en su tipo. ',
                    title: 'Recopilación de ideas',
                },
                {
                    content:'Después de recopilar ideas, creo un boceto de página, donde transfiero al papel lo que quiero hacer en la página. Hago maquetas para cada pantalla, porque sé lo importante que es que los sitios web se adapten a cada dispositivo (responsive).',
                    title:'Creación de bocetos',
                },
                {
                    content:'El siguiente paso es elegir las mejores tecnologías y herramientas, porque como sabes, cada problema requiere un enfoque diferente.',
                    title:'Elección de tecnología y herramientas',
                },
                {
                    content:'Después de completar los puntos anteriores, consulto con el destinatario si acepta el concepto del sitio web, al mismo tiempo, en palabras claras y sencillas, explico qué procesos se llevarán a cabo en el sitio web y por qué usaré tales tecnologías.',
                    title:'Consulta al cliente',
                },
                {
                    content:'La actividad que consume más tiempo y también la más placentera, donde lo que tenía en la cabeza se transfiere a un lenguaje comprensible para la computadora, es decir, programo el sitio web.',
                    title:'Proceso de desarrollo',
                },
                {
                    content:'Después de completar el proceso de creación del sitio web, coloco el sitio web en un servidor privado y luego proporciono al cliente un enlace al producto. Después de recopilar mis comentarios, corrijo las reservas dadas y luego envío la página para su verificación nuevamente. ',
                    title:'Conversación con el cliente - recogida de opiniones',
                },
                {
                    content:'Para que el cliente pueda controlar los resultados del sitio web en Internet, instalo las aplicaciones más importantes para medir la visibilidad del sitio web: Google Search Console y Google Anayltics.',
                    title:'Instalar herramientas de Google',
                },
                {
                    content:'El penúltimo paso es transferir el sitio web al servidor y asignar el dominio. Después de hacer esto, indexo la página en los motores de búsqueda para que puedan recopilar las primeras vistas. ',
                    title:'Indización del sitio',
                },
                {
                    content:'Para el postre, le doy al cliente un sitio web para usar, donde puede disfrutar de su sitio web y aparecer en el mundo digital.',
                    title:'Puesta en uso del sitio web',
                }
            ]
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
            cards:[
                {
                    title:'Webseiten',
                    content:`Eine Website ist eine ideale Idee, um Ihr Geschäft auf das Internet auszudehnen und neue Kunden zu gewinnen. Wählen Sie daher einzigartige und reaktionsschnelle Websites.`,
                    path:'/bietet-an/webseiten-erstellen'
                },
                {
                    title:'SEO',
                    content:`Da Sie bereits über eine eigene und einzigartige Website verfügen, lohnt es sich, diese im Web sichtbar zu machen. Die Positionierung ist für diese Behandlungen verantwortlich. Ich werde sowohl die Website, den Blog als auch den Online-Shop positionieren`,
                    path:'/bietet-an/seo'
                },
                {
                    title:'Optimierung',
                    content:`Wenn ein Haus renoviert oder ein Auto professionell repariert werden muss, brauchen Websites einen Spezialisten, der Fehler beseitigt und Websites ein neues Aussehen verleiht.`,
                    path:'/bietet-an/website-optimierung'
                }
            ]
        },
        steps:{
            content:'Der Prozess der Erstellung von Websites durch mich ist abgeschlossen, wobei der Kunde, der Website-Benutzer und die Suchmaschine im Mittelpunkt stehen.Wenn Sie möchten, dass ich eine Website für Sie erstelle, ist es wichtig zu wissen, wie dieser Prozess aussieht.',
            title:'Auftragsabwicklung',
            cards:[
                {
                    content:'Gespräch mit dem Kunden über seine Vision der Website, zusammen mit den bevorzugten Funktionalitäten und der Farbpalette.',
                    title:'Kontakt mit dem Kunden',
                },
                {
                    content:`Jede von mir erstellte Website soll die Besonderheiten einer Firma oder eines Unternehmens visualisieren. Zu diesem Zweck sammle ich Materialien, die mich dazu inspirieren werden, eine einzigartige Website zu erstellen.`,
                    title:'Ideen sammeln',
                },
                {
                    content:`Nachdem ich Ideen gesammelt habe, erstelle ich eine Seitenskizze, in der ich auf Papier übertrage, was ich auf der Seite machen möchte. Ich erstelle Mock-ups für jeden Bildschirm, weil ich weiß, wie wichtig es ist, dass Websites an jedes Gerät angepasst (responsive) sind.`,
                    title: 'Erstellung von Skizzen',
                },
                {
                    content:'Der nächste Schritt ist die Auswahl der besten Technologien und Tools, denn wie Sie wissen, erfordert jedes Problem einen anderen Ansatz.',
                    title:`Wahl der Technologie und Werkzeuge`,
                },
                {
                    content:'Nach Abschluss der oben genannten Punkte berate ich mich mit dem Empfänger, ob er das Website-Konzept akzeptiert, gleichzeitig erkläre ich in klaren und einfachen Worten, welche Prozesse auf der Website stattfinden und warum ich solche Technologien einsetzen werde.',
                    title:'Kundenberatung',
                },
                {
                    content:'Die zeitaufwändigste und auch angenehmste Tätigkeit, bei der das, was ich im Kopf hatte, in eine für den Computer verständliche Sprache übertragen wird - das heißt, ich programmiere die Website.',
                    title:'Entwicklungsprozess.',
                },
                {
                    content:`Nach Abschluss der Erstellung der Website platziere ich die Website auf einem privaten Server und stelle dem Kunden dann einen Link zum Produkt zur Verfügung. Nachdem ich meine Kommentare gesammelt habe, korrigiere ich die angegebenen Reservierungen und reiche die Seite dann erneut zur Überprüfung ein.`,
                    title:'Gespräch mit dem Kunden - Meinungen einholen',
                },
                {
                    content:'Damit der Kunde die Ergebnisse der Website im Internet kontrollieren kann, installiere ich die wichtigsten Anwendungen zur Messung der Sichtbarkeit der Website: Google Search Console und Google Analytics.',
                    title:'Google-Tools installieren',
                },
                {
                    content:'Der vorletzte Schritt ist die Übertragung der Website auf den Server und die Zuweisung der Domain. Danach indiziere ich die Seite in Suchmaschinen, damit sie die ersten Aufrufe sammeln können. ',
                    title:'Website-Indizierung',
                },
                {
                    content:'Zum Nachtisch gebe ich dem Kunden eine Website zur Nutzung, auf der er seine Website genießen und in der digitalen Welt auftreten kann.',
                    title:'Inbetriebnahme der Website',
                }
            ]
        }
    }
}