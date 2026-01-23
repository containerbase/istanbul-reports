/* global window */
import 'highlight.js/styles/googlecode.css';
import './hljs.css';

import hljs from 'highlight.js/lib/core';
import ts from 'highlight.js/lib/languages/typescript';
import mergeHTMLPlugin from './mergeHTMLPlugin.js';

// https://github.com/highlightjs/highlight.js/issues/2889
hljs.addPlugin(mergeHTMLPlugin);
hljs.configure({ cssSelector: 'pre.prettyprint', ignoreUnescapedHTML: true });

// Then register the languages you need
hljs.registerLanguage('typescript', ts);
Object.assign(window, {
  prettyPrint: () => {
    document.querySelectorAll<HTMLElement>('pre.prettyprint').forEach((el) => {
      el.classList.remove('lang-js');
      el.classList.add('lang-ts');
      hljs.highlightElement(el);
    });
  },
});
