/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: false
        }
    },
    images: {
        domains: [
            'cdn.pixabay.com'
        ]
    },
    output: 'standalone'
}

module.exports = nextConfig
