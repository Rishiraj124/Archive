import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import withPWAInit from '@ducanh2912/next-pwa';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

const withPWA = withPWAInit({
  dest: 'public', //creates service workers in the destination
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false, // means dont disable the PWA on any environment
  workboxOptions: {
    disableDevLogs: true,
  },
});
/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
export default withPWA(nextConfig);
