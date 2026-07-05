import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL, targetLang: string): string {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);
  
  if (parts[0] === 'en' || parts[0] === 'tr') {
    parts.shift();
  }
  
  const rest = parts.join('/');
  
  if (targetLang === 'en') {
    return rest ? `/en/${rest}` : '/en/';
  } else {
    return rest ? `/${rest}` : '/';
  }
}
