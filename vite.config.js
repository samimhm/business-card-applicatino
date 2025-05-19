import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: 'Applicatino Business Card',
        short_name: 'Applicatino Contact',
        start_url: '/',
        display: 'standalone',
        background_color: '#232228',
        theme_color: '#a78bfa',
        description: 'Salvează rapid contactul Applicatino SRL pe telefonul tău. Card digital de vizită modern, cu un singur click!',
        icons: [
          {
            src: '/logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',
      prompt: {
        message: 'Salveaza pe Ecran',
      },
    }),
  ],
  devServer: {
    port: 5000,
  },
})
