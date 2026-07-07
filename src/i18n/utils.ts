import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  let pathname = url.pathname;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length) || '/';
  }
  const [, lang] = pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function url(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Prevent double base if path already starts with base
  if (base && cleanPath.startsWith(`${base}/`)) {
    return cleanPath;
  }
  return `${base}${cleanPath}`;
}

export function getRouteFromUrl(url: URL, targetLang: string): string {
  let pathname = url.pathname;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  
  if (base && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length) || '/';
  }
  
  const parts = pathname.split('/').filter(Boolean);
  
  if (parts[0] === 'en' || parts[0] === 'tr') {
    parts.shift();
  }

  const routeTranslations: Record<string, Record<string, string>> = {
    tr: {
      'about': 'hakkimizda',
      'contact': 'iletisim',
      'articles': 'makaleler',
      'team': 'ekip',
    },
    en: {
      'hakkimizda': 'about',
      'iletisim': 'contact',
      'makaleler': 'articles',
      'ekip': 'team',
    }
  };

  if (parts.length > 0) {
    if ((parts[0] === 'makaleler' || parts[0] === 'articles') && parts.length > 1) {
      parts.length = 1;
    }
    
    if (routeTranslations[targetLang]?.[parts[0]]) {
      parts[0] = routeTranslations[targetLang][parts[0]];
    }
  }
  
  const rest = parts.join('/');
  let targetPath = '';
  
  if (targetLang === 'en') {
    targetPath = rest ? `/en/${rest}` : '/en/';
  } else {
    targetPath = rest ? `/${rest}` : '/';
  }
  
  return `${base}${targetPath}`;
}
