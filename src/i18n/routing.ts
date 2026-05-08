import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['ar'],
    defaultLocale: 'ar',
    localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
    ar: 'العربية',
};
