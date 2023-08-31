import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = <string[]>['en', 'br'];
export const defaultLocale = <string>'en';

function getLocale(request: Request): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage) {
    headers.set(
      'accept-language',
      acceptLanguage.replaceAll('_', '-')
    );
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({
    headers: headersObject,
  }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request) ?? defaultLocale;
  console.log(locale);
  
  const pathname = request.nextUrl.pathname;

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

  return NextResponse.rewrite(newUrl);
}