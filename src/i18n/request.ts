import { getLocaleMessages } from '@/utils/get-locale-messages';
import { getLocaleFromHeaders } from '@/utils/get-locale-from-headers';
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  const locale = await getLocaleFromHeaders()
  const messages = await getLocaleMessages(locale)
  return {
    locale,
    messages,
  };
});