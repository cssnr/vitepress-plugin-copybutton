import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/CopyButton.vue'),
            name: 'CopyButton',
            fileName: (format) => `CopyButton.${format}.js`,
        },
        cssCodeSplit: true,
        rollupOptions: {
            external: ['vue', 'vitepress'],
            output: {
                globals: {
                    vue: 'Vue',
                    vitepress: 'VitePress',
                },
            },
        },
    },
})
