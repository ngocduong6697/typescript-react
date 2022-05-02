import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 50%;
    font-family: 'Roboto';
    touch-action: manipulation;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    position: relative;
    min-height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border-top-width: 1px;
  }

  pre,
  code,
  kbd,
  samp {
    font-size: 1em;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    background-color: transparent;
  }

  abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline;
    text-decoration: underline dotted;
    border-bottom: none;
  }

  b,
  strong {
    font-weight: bold;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-size: 100%;
    font-family: inherit;
    line-height: 1.15;
  }

  button,
  input {
    overflow: visible;
  }

  textarea:focus, input:focus {
    outline: none;
  }

  .default__control--is-focused,
  .rounded__control--is-focused,
  .label-price__control--is-focused {
    border-color: black !important;
    box-shadow: 0 0 0 1px black !important;

    &:hover {
      border-color: black !important;
    }
  }

  button,
  select {
    text-transform: none;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    display: table;
    box-sizing: border-box;
    max-width: 100%;
    padding: 0;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none !important;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  body,
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    padding: 0;
    background: transparent;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0 !important;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    color: inherit;
    line-height: inherit;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  select::-ms-expand {
    display: none;
  }

  .Toastify__toast-container--top-center {
    top: 10%;
    width: auto;
  }

  .pac-container {
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);
    border: none;
    &:after {
      content: none;
    }
  }
  .not-scroll-body {
    height: 100%;
    overflow-y: hidden;
  }
`;
