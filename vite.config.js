import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub 저장소 이름 (필요시 변경)
const REPO_NAME = 'HCI25-Amuse-oeil'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Netlify 배포 시: '/' (기본값)
  // GitHub Pages 배포 시: '/저장소이름/'
  // NETLIFY 환경 변수가 있으면 Netlify, 없으면 GitHub Pages로 판단
  base: process.env.NETLIFY === 'true' || process.env.VITE_USE_CUSTOM_DOMAIN === 'true'
    ? '/'
    : (process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/'),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
