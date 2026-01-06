/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                fundo: '#020617',
                texto: '#e5e7eb',
                textoSecundario: '#94a3b8',
                destaque: '#3b82f6',
            },
        },
        extend: {
            fontFamily: {
                texto: 'var(--fonte-texto)',
                titulos: 'var(--fonte-titulos)',
            },
        }
    },
    plugins: [
    ]
}