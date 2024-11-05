import en from './translations.en.js';
import de from './translations.de.js';

const i18n = {
  translations: {
    en,
    de,
  },
  defaultLang: 'en',
  useBrowserDefault: true,
};

export function getAllLanguages() {
  return Object.keys(i18n.translations);
}

export function getDefaultLanguage() {
  let browserLang = "";

  if (i18n.useBrowserDefault &&
      typeof window !== "undefined" && window && window.navigator &&
      (window.navigator.languages || window.navigator.language)) {
    return ((window.navigator.languages && window.navigator.languages[0]) || window.navigator.language)
      .split("-")[0]
      .toLowerCase();
  }
  return i18n.defaultLang;
};

export function useTranslation(lang) {
  const translations = i18n.translations;

  return {
    // Based on https://github.com/martinkr/next-export-i18n/blob/main/module/src/hooks/use-translation.tsx
    /**
     * Returns the value stored for this given key (e.g. "i18n.ui.headline")  in the translation file.
     * The return value can be a string, a number, an array or an object.
     * In case there is no entry for this key, it returns the key.
     * @param key the key for looking up the translation
     * @param view the mustache view for interpolating the template string
     * @returns the value stored for this key, could be a string, a number, an array or an object
     */
    t: (key, view) => {
      let value = key.split('.').reduce(
          (previous, current) =>
            (previous && previous[current]) || null,
          translations[lang]
        );
      let translation = value || key;
      try {
        return Mustache.render(translation, view);
      } catch (e) {
        return translation;
      }
    },
    tURL: (url) => (url.startsWith('/') ? `/${lang}${url}` : `/${lang}/${url}`)
  };
}