import type { Locale } from '@/i18n.config'
import 'server-only'

//just import the current path locale!
const dictionaries = {
  en: (path: string) => import(`@/lang/en/${path}.ts`).then(module => module.default),
  pt: (path: string) => import(`@/lang/pt/${path}.ts`).then(module => module.default)
}

export const getDictionary = async (locale: Locale, path: string): Promise<any> => {
  const module = await dictionaries[locale](path);
  return module;
}