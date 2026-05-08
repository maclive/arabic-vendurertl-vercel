import {routing, type Locale} from './routing';

const OG_LOCALE_MAP: Record<Locale, string> = { ar: 'ar_SA' };
const INTL_LOCALE_MAP: Record<Locale, string> = { ar: 'ar-SA' };

export function toOgLocale(locale: string): string {
    return OG_LOCALE_MAP[locale as Locale] || 'ar_SA';
}

export function toIntlLocale(locale: string): string {
    return INTL_LOCALE_MAP[locale as Locale] || 'ar-SA';
}
