import { LocaleUnion } from './../../typings/types';
export function isLocaleAccepted(locale:string):locale is LocaleUnion{
    return locale === 'pl' || locale === 'pt' || locale === 'fr' || locale === 'en' || locale === 'es' || locale === 'de';
}