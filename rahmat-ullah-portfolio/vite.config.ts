import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const DEFAULT_SITE_URL = 'https://www.your-domain.com'

/** Replaces __SITE_URL__ in index.html (canonical, Open Graph) with VITE_SITE_URL from .env. */
function siteUrlPlugin(siteUrl: string): Plugin {
  return {
    name: 'inject-site-url',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
  return { plugins: [react(), tailwindcss(), siteUrlPlugin(siteUrl)] }
})
