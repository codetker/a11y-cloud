/*
Copyright (2024) Bytedance Ltd. and/or its affiliates
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/** @type {import('jest').Config} */
module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(less|css)$': 'jest-less-loader',
  },
  testEnvironment: 'jsdom',
  globals: {
    window: {
      navigator: {
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        platform: 'MacIntel',
      },
      markSocket: {},
      location: {
        href: 'URL_ADDRESS',
        reload: () => {
          // do nothing
        },
        search: '?test=1',
        host: 'localhost',
      },
      a11yElectronApi: {
        ip: 'IP_ADDRESS',
      },
      open: () => {
        // do nothing
      },
      history: {
        pushState: () => {
          // do nothing
        },
        replaceState: () => {
          // do nothing
        },
      },
      dispatchEvent: () => {
        // do nothing
      },
      addEventListener: () => {
        // do nothing
      },
      removeEventListener: () => {
        // do nothing
      },
      requestIdleCallback: () => {
        // do nothing
      },
      getComputedStyle: () => ({
        position: '1',
      }),
      fetch: false,
      localStorage: {
        getItem: () => {},
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
      },
      console: {
        log: () => {
          // do nothing
        },
        warn: () => {
          // do nothing
        },
        error: () => {
          // do nothing
        },
      },
    },
  },
};
