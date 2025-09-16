/* global window */
import hljs from 'highlight.js/lib/core';
import ts from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/googlecode.css';

hljs.configure({cssSelector: 'pre.prettyprint'});
// Then register the languages you need
hljs.registerLanguage('typescript', ts);
Object.assign(window, {
  prettyPrint: () => {
    document.querySelectorAll<HTMLElement>('pre.prettyprint').forEach((el) => {
      el.classList.remove('lang-js')
      el.classList.add('lang-ts')
      hljs.highlightElement(el);
    });
  }
});
