"use client"

import { useEffect } from 'react'

interface GoogleTranslateConfig {
  pageLanguage: string;
  includedLanguages: string;
  layout?: number;
  autoDisplay?: boolean;
}

interface GoogleTranslateElement {
  new (config: GoogleTranslateConfig, elementId: string): void;
  InlineLayout: {
    SIMPLE: number;
    HORIZONTAL: number;
    VERTICAL: number;
  };
}

interface GoogleTranslate {
  translate: {
    TranslateElement: GoogleTranslateElement;
  };
}

declare global {
  interface Window {
    google: GoogleTranslate;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const initTranslate = () => {
      window.googleTranslateElementInit = () => {
        const translateElement = new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,mr',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        )

        // Apply saved language preference if exists
        const savedLang = localStorage.getItem('preferredLanguage')
        if (savedLang) {
          const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
          if (select) {
            select.value = savedLang
            select.dispatchEvent(new Event('change'))
          }
        }

        return translateElement
      }

      const script = document.createElement('script')
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }

    // Initialize translation if not already initialized
    if (!window.google?.translate) {
      initTranslate()
    }

    return () => {
      // Cleanup
      const element = document.getElementById('google_translate_element')
      if (element) {
        element.innerHTML = ''
      }
      delete window.googleTranslateElementInit
    }
  }, [])

  return <div id="google_translate_element" style={{ display: 'none' }} />
}