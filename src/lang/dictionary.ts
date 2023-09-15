import 'server-only'
import type { Locale } from '@/i18n.config'

//just import the current path locale!
const dictionaries = {
  en: (path: string) => import(`./en/${path}`).then(module => module),
  pt: (path: string) => import(`./pt/${path}`).then(module => module)
}

export const getDictionary = async (locale: Locale, path: string): Promise<any> => {
  const module = await dictionaries[locale](path);
  return module;
}