import {RiFacebookFill,RiInstagramLine,RiYoutubeFill,RiLinkedinFill} from 'react-icons/ri';
import {SiTiktok,SiGithub,SiTwitter} from 'react-icons/si';
export const footer = {
    pl:{
        disclaimer:'Programista stron i aplikacji internetowych, pozycjoner stron i sklepów internetowych.',
        contact:{
            title:'Kontakt',
            email:{
                name:'E-mail',
                href:'mailto:radoslaw.adamczyk2000@gmail.com',
                value:'radoslaw.adamczyk2000@gmail.com'
            },
            phone:{
                name:'Numer telefonu',
                href:'tel:+48794100-413',
                value:'+48 794-100-413'
            }
        },
        newsletter:{
            title:'Newsletter',
            content:'Zapisując się na newsletter zyskujesz codwutygodniową dawkę informacji nt. programowania, pozycjonowania i historii. Ponadto dowiesz się o najnowszych postach dodanych na stronie oraz obecnie realizowanych projektach. Zapisz się już teraz!',
            button:'Dołącz!',
            form:{
                firstName:{
                    label:'Imię',
                    inputId:'firstName',
                    inputName:'firstName'
                },
                eMail:{
                    label:'E-mail',
                    inputId:'Email',
                    inputName:'Email'
                },
            }
        },
    },
    head:{
        title:'RadWEB',
        subtitle:'Radosław Adamczyk'
    },
    map:`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57076.089976178075!2d16.899334984110414!3d52.09598649863037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfaadbf09f94aecf!2sRadWEB!5e0!3m2!1spl!2spl!4v1641832823323!5m2!1spl!2spl`,
    socials:[
        {
            icon:<RiFacebookFill/>,
            path:'https://www.facebook.com/RadWeb-Programowanie-i-SEO-103383665586914',
            title:'RadWEB - Programowanie i SEO | Facebook'
        },
        {
            icon:<RiInstagramLine/>,
            path:'https://www.instagram.com/radoslawadamczyk2000/',
            title:'@radoslawadamczyk | Instagram'
        },
        {
            icon:<RiYoutubeFill/>,
            path:'https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog',
            title:'RadWEB - Programowanie i SEO | YouTube'
        },
        {
            icon:<SiTiktok/>,
            path:'tiktok.com/@radadamczyk',
            title:'@radadamczyk | TikTok'
        },
        {
            icon:<SiGithub/>,
            path:'https://github.com/RadoslawAdamczyk2000',
            title:'RadoslawAdamczyk2000 | Github'
        },
        {
            icon:<RiLinkedinFill/>,
            path:'https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/',
            title:''
        },
        {
            icon:<SiTwitter/>,
            path:'https://twitter.com/rad_web2000',
            title:'rad_web2000 | Twitter'
        }
    ]
}