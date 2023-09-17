import type { Locale } from '@/i18n.config'
import 'server-only'

//just import the current path locale!
const dictionaries = {
  en: (path: string) => import(`@/lang/en/${path}.ts`).then(locale => locale.default),
  pt: (path: string) => import(`@/lang/pt/${path}.ts`).then(locale => locale.default)
}

export const getDictionary = async (locale: Locale, path: string): Promise<any> => {
  const  translation = await dictionaries[locale](path);
  return translation;
}