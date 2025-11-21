import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub 저장소 이름 (필요시 변경)
const REPO_NAME = 'HCI25-Amuse-oeil'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포 시: '/저장소이름/'
  // 커스텀 도메인 사용 시: '/'
  base: process.env.NODE_ENV === 'production' 
    ? (process.env.VITE_USE_CUSTOM_DOMAIN === 'true' ? '/' : `/${REPO_NAME}/`)
    : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
