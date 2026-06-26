import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'raven-ace-demo'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${repoName}/` : '/',
  plugins: [react()],
  server: { port: 5173 }
}))
