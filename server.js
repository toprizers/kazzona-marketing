const path = require('path');
const fs = require('fs');
const dir = path.join(__dirname);
const http = require('http');

// 1. CLEAR NEXT.JS DATA CACHE
try {
  const cacheDir = path.join(__dirname, '.next', 'cache');
  if (fs.existsSync(cacheDir)) {
    fs.rmSync(cacheDir, { recursive: true, force: true });
    console.log('✅ CLEAR CACHE SUCCESS');
  }
} catch (e) {}

// 2. CLEAR NEXT.JS FULL ROUTE CACHE (Static/ISR files for dynamic routes)
try {
  function clearRouteCache(directory) {
    if (!fs.existsSync(directory)) return;
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const fullPath = path.join(directory, file);
      if (fs.statSync(fullPath).isDirectory()) {
        clearRouteCache(fullPath);
      } else {
        // Delete .html, .rsc, .meta files that are likely cached dynamic routes
        // (We avoid deleting layout.html or hardcoded static pages if possible, 
        // but Next.js will just regenerate them on demand if deleted!)
        if (file.endsWith('.html') || file.endsWith('.rsc') || file.endsWith('.meta')) {
          fs.unlinkSync(fullPath);
          console.log('🗑️ Deleted cached route file:', file);
        }
      }
    }
  }
  const appServerDir = path.join(__dirname, '.next', 'server', 'app');
  if (fs.existsSync(appServerDir)) {
    clearRouteCache(appServerDir);
    console.log('✅ FULL ROUTE CACHE CLEARED!');
  }
} catch (e) {
  console.log('Route cache clear error:', e);
}

// 3. FORCE ABSOLUTE PATH AT RUNTIME
const absoluteDbPath = path.join(__dirname, 'prisma', 'dev.db');
process.env.DATABASE_URL = `file:${absoluteDbPath}`;

process.env.NODE_ENV = 'production';
process.env.UV_THREADPOOL_SIZE = '2';
process.env.NEXT_PRIVATE_WORKER_THREADS = 'false';

const nextConfig = {"env":{},"webpack":null,"typescript":{"ignoreBuildErrors":false},"typedRoutes":false,"distDir":"./.next","cleanDistDir":true,"assetPrefix":"","cacheMaxMemorySize":52428800,"configOrigin":"next.config.ts","useFileSystemPublicRoutes":true,"generateEtags":true,"pageExtensions":["tsx","ts","jsx","js"],"poweredByHeader":true,"compress":true,"images":{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","loaderFile":"","domains":[],"disableStaticImages":false,"minimumCacheTTL":14400,"formats":["image/webp"],"maximumRedirects":3,"maximumResponseBody":50000000,"dangerouslyAllowLocalIP":false,"dangerouslyAllowSVG":false,"contentSecurityPolicy":"script-src 'none'; frame-src 'none'; sandbox;","contentDispositionType":"attachment","localPatterns":[{"pathname":"**","search":""}],"remotePatterns":[],"qualities":[75],"unoptimized":false,"customCacheHandler":false},"devIndicators":{"position":"bottom-left"},"onDemandEntries":{"maxInactiveAge":60000,"pagesBufferLength":5},"basePath":"","sassOptions":{},"trailingSlash":false,"i18n":null,"productionBrowserSourceMaps":false,"excludeDefaultMomentLocales":true,"reactProductionProfiling":false,"reactStrictMode":null,"reactMaxHeadersLength":6000,"httpAgentOptions":{"keepAlive":true},"logging":{"serverFunctions":true,"browserToTerminal":"warn"},"compiler":{},"expireTime":31536000,"staticPageGenerationTimeout":60,"output":"standalone","cacheComponents":false,"cacheHandlers":{},"experimental":{"appNewScrollHandler":false,"useSkewCookie":false,"cssChunking":true,"multiZoneDraftMode":false,"appNavFailHandling":false,"prerenderEarlyExit":true,"serverMinification":true,"linkNoTouchStart":false,"caseSensitiveRoutes":false,"cachedNavigations":false,"partialFallbacks":false,"dynamicOnHover":false,"varyParams":false,"prefetchInlining":false,"preloadEntriesOnStart":true,"clientRouterFilter":true,"clientRouterFilterRedirects":false,"fetchCacheKeyPrefix":"","proxyPrefetch":"flexible","optimisticClientCache":true,"manualClientBasePath":false,"cpus":7,"memoryBasedWorkersCount":false,"imgOptTimeoutInSeconds":7,"imgOptMaxInputPixels":268402689,"isrFlushToDisk":true,"workerThreads":false,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"externalDir":false,"disableOptimizedLoading":false,"gzipSize":true,"craCompat":false,"esmExternals":true,"fullySpecified":false,"swcTraceProfiling":false,"forceSwcTransforms":false,"largePageDataBytes":128000,"typedEnv":false,"parallelServerCompiles":false,"parallelServerBuildTraces":false,"ppr":false,"authInterrupts":false,"webpackMemoryOptimizations":false,"optimizeServerReact":true,"strictRouteTypes":false,"viewTransition":false,"removeUncaughtErrorAndRejectionListeners":false,"validateRSCRequestHeaders":false,"staleTimes":{"dynamic":0,"static":300},"reactDebugChannel":true,"serverComponentsHmrCache":true,"staticGenerationMaxConcurrency":8,"staticGenerationMinPagesPerWorker":25,"transitionIndicator":false,"gestureTransition":false,"inlineCss":false,"useCache":false,"globalNotFound":false,"browserDebugInfoInTerminal":"warn","lockDistDir":true,"proxyClientMaxBodySize":10485760,"hideLogsAfterAbort":false,"mcpServer":true,"turbopackFileSystemCacheForDev":true,"turbopackFileSystemCacheForBuild":false,"turbopackInferModuleSideEffects":true,"turbopackPluginRuntimeStrategy":"childProcesses","trustHostHeader":false,"isExperimentalCompile":false},"htmlLimitedBots":"[\\w-]+-Google|Google-[\\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight","bundlePagesRouterDependencies":false,"configFileName":"next.config.ts","distDirRoot":".next"};

process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig);

const currentPort = parseInt(process.env.PORT, 10) || 3000;
let keepAliveTimeout = parseInt(process.env.KEEP_ALIVE_TIMEOUT, 10);

if (Number.isNaN(keepAliveTimeout) || !Number.isFinite(keepAliveTimeout) || keepAliveTimeout < 0) {
  keepAliveTimeout = undefined;
}

require('next');
const { startServer } = require('next/dist/server/lib/start-server');

const originalCreateServer = http.createServer;
http.createServer = function(requestListener) {
  return originalCreateServer(async (req, res) => {
    if (req.url && req.url.startsWith('/api/diagnostic-db')) {
      res.setHeader('Content-Type', 'application/json');
      try {
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient();
        const allPosts = await prisma.post.findMany({ select: { id: true, title: true } });
        const testId = req.url.split('id=')[1] || '';
        let uniqueResult = null;
        if (testId) {
          uniqueResult = await prisma.post.findUnique({ where: { id: testId } });
        }
        res.end(JSON.stringify({
          success: true,
          message: "Database diagnostic completed. Full Route Cache cleared.",
          dbPathUsed: process.env.DATABASE_URL,
          testIdSearched: testId,
          uniqueResultFound: !!uniqueResult
        }, null, 2));
      } catch (err) {
        res.end(JSON.stringify({ error: err.message }));
      }
      return;
    }
    return requestListener(req, res);
  });
};

startServer({
  dir,
  isDev: false,
  config: nextConfig,
  hostname: '0.0.0.0', 
  port: currentPort,
  allowRetry: false,
  keepAliveTimeout,
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
