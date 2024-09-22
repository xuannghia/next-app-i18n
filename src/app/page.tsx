import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('common')
  return (
    <div className="container mx-auto w-full py-4">
      <h1 className="text-center text-xl font-bold">{t('title')}</h1>
      <div className="text-center">{t('description')}</div>
    </div>
  );
}
