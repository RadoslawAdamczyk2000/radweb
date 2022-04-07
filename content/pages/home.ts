export const home = {
    pl: {
        hero:{
            image:'../../assets/images/river.webp',
            content:`Witaj, nazywam się <h2>Radosław Adamczyk</h2> i znajdujesz się na stronie <h1>RadWEB</h1> gdzie możesz zaznajomić się z wieloma informacjami z dziedzin takich jak programowanie i tworzenie stron internetowych, pozycjonowanie oraz historia. Ponadto dowiesz się w jakiej formie możesz podjąć ze mną współpracę, a także jakie projekty prywatne i komerycjne zrealizowałem w ostatnim czasie.<br/> Zapraszam do lektury`,
            buttons:[
                {
                    path:'/o-mnie',
                    title:'Kim jestem?'
                },
                // {
                //     path:'/',
                //     title:'CV'
                // },
                // {
                //     path:'https://rad-web.vercel.app',
                //     title:'Portfolio'
                // }
            ]
        },
        about:{
            title:'Kim jestem?',
            content:`Nazywam się Radosław Adamczyk. W 2019 roku szczęśliwie ukończyłem Katolickie Publiczne Akademickie Liceum Ogólnokształcące w Śremie o profilu matematyczno-fizyczno-informatyczno-historycznym. Obecnie jestem młodym developerem z zakresu stron i aplikacji internetowych, a także pozycjonowanie. Udało mi się już zdobyć doświadczenia pracy z klientem po przez realizację komercynych zamówień jak i pracę w korporacji.`,
            movie:'https://www.youtube.com/embed/blUik-3-gCE',
            path:'/o-mnie',
            button:'Poznaj mnie bliżej'
        },
        offer:{
            title:'Możliwości współpracy',
            content:`Istnieje wiele sposobów nawiązania ze mną efektywnej współpracy. <b>Co oferuję?</b> Znajdziesz u mnie głównie możliwość napisania strony internetowej typu blog, czy też portfolio. Ponadto istnieje opcja nawiązania komercyjnej współpracy przy pozycjonowaniu oraz optymalizacji, czyli wprowadzaniu zmian na istniejących już stronach.`,
            path:'/oferty',
            button:'Sprawdź wszystkie usługi',
            buttons:[
                {
                    title:'Tworzenie stron internetowych',
                    value:'www'
                },
                {
                    title:'Pozycjonowanie serwisów',
                    value:'seo'
                },
                // {
                //     title:'Analityka stron',
                //     value:'ana'
                // },
                // {
                //     title:'Optymalizacja stron',
                //     value:'opt'
                // }
            ],
            cards:{
                button:'Sprawdź',
                www:{
                    image:'https://cdn.pixabay.com/photo/2017/05/14/03/45/gui-2311259_960_720.png',
                    title:'Tworzenie stron internetowych',
                    content:`Strony internetowe są wyrazem tego, że Ty, bądź też Twoja firma lub organizacja istnieje. Po przez odpowiednio zbudowane witryny internetowe, czyli schludne, resposywne oraz szybkie, możesz na dłużej zachować potencjonalnego klienta przy sobie.`,
                    path:'/oferty/strony-internetowe',
                },
                seo:{
                    image:'https://cdn.pixabay.com/photo/2017/05/14/03/45/gui-2311261_960_720.png',
                    title:'Pozycjonowanie stron internetowych',
                    content:`Skoro już posiadasz własną stronę internetową, to pora być widocznym w internetcie. Zadanie realizujące właśnie to założenie nazywa się pozycjonowaniem, bądź też SEO. Jest to proces długotrwały, odwdzięczający się rozpoznawalnością w sieci, co równoznaczne jest z potencjalnym pozyskaniem nowych klientów.`,
                    path:'/oferty/pozycjonowanie-stron',
                },
                // ana:{
                //     image:'https://cdn.pixabay.com/photo/2018/08/08/21/48/interface-3593269_960_720.png',
                //     title:'Analityka stron internetowych',
                //     content:`Chcesz zmodyfikować stronę, ale nie wiesz w jakim kierunku powinna pójść modernizacja serwisu? Dzięki realizowanej bezpłatnej analityce stron dowiesz się, które elementy powinny być realizowane priorytetowo`,
                //     path:'/oferty/analityka-stron',
                // },
                // opt:{
                //     image:'https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png',
                //     title:'Optymalizacja stron internetowych',
                //     content:`Potrzebujesz modernizacji Twojej strony internetowej w postaci odświeżenia wyglądu, dodania nowej funkcjonalności lub rozwiązania problemu? Te wszystkie czynności można zawrzeć jednym słowem - optymalizacja.`,
                //     path:'/oferty/optymalizacja-stron',
                // }
            }
        },
        blog:{
            title:'Blog',
            content:`Blog jest miejscem, w którym dzielę się nieustannie zdobywaną przez siebie wiedzą. Pasjonuję się wszystkim co jest związane ze strona interntowymi, marketingiem w sieci oraz historią. Można na pierwszy rzut oka stwierdzić, że te dziedziny są strasznie mylnego - to wszystko łączy się w jednolitą całość.`,
            path:'/blog',
            button:'Sprawdź wszystkie artykuły'
        },
        projects:{
            title:'Projekty',
            content:`Tworzeniem stron oraz aplikacji internetowych zajmuję się już od 2016 roku. Natomiast na poziom komercyjny wkroczyłem na przełomie 2020/2021 roku, kiedy to zacząłem zbierać pierwsze zamówienia. Dlaczego projekty są tak istotne? Niezależnie od tego, czy to realizacja prywatna lub komercyjna, to projekty prezentują rozwój developera.`,
            path:'/projekty',
            button:'Sprawdź wszystkie prace'
        },
        whyMe:{
            title:'Dlaczego warto mnie wybrać?',
            content:`Z racji tego, że dopiero rozpycham się w tej branży zależy mi na zyskiwaniu świadomości oraz zdobywaniu zaufania klientów poprzez realizację usług na jak najwyższym poziomie. Moje strony internetowe cechują się wykorzystaniem najlepszych narzędzi na rynku oraz niepowtarzalnym wyglądem. Natomiast strony internetowe, które pozycjonuję są wsparte moim pełnym zaangażowaniem. Wszystkie realizowane przeze mnie usługi wykonuję i będę wykonywał uczciwie z jak najwyższym standardem.`,
            path:'/oferty/obslugiwane-lokalizacje',
            button:'Sprawdź obsługiwane lokalizacje'
        }
    }
}
