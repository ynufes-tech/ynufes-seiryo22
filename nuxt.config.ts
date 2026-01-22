export default defineNuxtConfig({
  srcDir: 'src/',
  dir: {
    public: 'public'
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false
        }
      }
    }
  },
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2026-01-23',
  nitro: {
    publicAssets: [
      {
        dir: 'public',
        baseURL: '/'
      }
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        amp: true
      },
      titleTemplate: (titleChunk) => {
        const baseTitle = '22清陵祭公式ホームページ 横浜国立大学大学祭';
        return titleChunk ? `${titleChunk} | ${baseTitle}` : baseTitle;
      },
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:image', content: '/image/OGP_IMAGE.webp' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: '@ynu_fes' },
        { property: 'twitter:image', content: '/image/twitter_ogp.jpg' },
        { name: 'thumbnail', content: '/image/twitter_ogp.jpg' },
        {
          name: 'keyword',
          content: '清陵祭,22清陵祭,大学祭,花笑み,横浜国立大学,横国,YNU,文化祭,YNUFES'
        }
      ],
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@500&family=Noto+Serif+JP:wght@500&display=swap'
        },
        { rel: 'icon', href: '/icon/favicon.ico' }
      ],
      bodyAttrs: {
        style: "margin:0; padding: 0; font-family: 'Noto Serif JP', serif;"
      }
    }
  },
  runtimeConfig: {
    public: {
      microcmsServiceDomain: 'ynufes-seiryo22',
      microcmsApiKey: '26191c4b25ad49f1a00e982735c5831e5ab5'
    }
  }
});
