import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { IntSeo } from "./interface";

const Seo = ({canonical,description,image,robots,title,typePage='website'}:IntSeo) => {
    const {locale} = useRouter();
    const [langs,setLangs] = useState('');
    useEffect(() => {
        if(locale == 'pl'){
            setLangs('pt fr en es de')
        }else if(locale == 'pt'){
            setLangs('pl fr en es de')
        }else if(locale == 'fr'){
            setLangs('pl pt en es de')
        }else if(locale == 'en'){
            setLangs('pl pt fr es de')
        }else if(locale == 'es'){
            setLangs('pl pt fr en de')
        }else if(locale == 'de'){
            setLangs('pl pt fr en es')
        }else{
            setLangs('pl pt fr en es de')
        }
    },[locale])
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && 
                <>
                    <link rel="canonical" href={canonical}/>
                    <meta property="og:url" content={canonical} />
                </>
            }
            {robots && <meta name="robots" content={robots}/> }
            <meta property="og:type" content={typePage} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            <meta property="og:site_name" content="RadWEB"/>

            <meta name="og:locale" content={locale}/>
            <meta name="og:locale:alternate" content={langs}/>
        </Head>
    )
}
export default Seo;