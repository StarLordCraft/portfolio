import 'server-only'
import type { Locale } from '@/i18n.config'

//just import the current path locale!
const dictionaries = {
  en: (path: string) => import(`./en/${path}`).then(module => module.default),
  pt: (path: string) => import(`./pt/${path}`).then(module => module.default)
}

export const getDictionary = async (locale: Locale, path: string) => dictionaries[locale](path)