'use server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { headers } from "next/headers";
import { getSuggestedLocales } from './get-supported-locales';


export async function getLocaleFromHeaders() {
  const supportedLocales = await getSuggestedLocales()
  const acceptLanguage = headers().get("Accept-Language") || "";
  const languages = new Negotiator({  headers: { 'accept-language': acceptLanguage } }).languages()
  return match(languages, supportedLocales.locales, supportedLocales.defaultLocale)
}
