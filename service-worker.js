/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/bootstrap.css","7c5c7ae42b4345b60e0c7b11f1ef38cb"],["css/elements-adjustment.css","3e1539a6cf45871e07804bef8675deba"],["css/main.css","3dc28dee6220b5ad257e4f400d29e99f"],["css/theme-mode-custom.css","4946591394723d715bb21ce1aa5d7e6c"],["favicons/android-chrome-192x192.png","3c20583a4e332510d5c091f13d3545c2"],["favicons/android-chrome-512x512.png","95e920c6a75e44ce2579c0fcb3a49109"],["favicons/apple-touch-icon.png","4dd00710780ea5f5d72517a4cb4b5913"],["favicons/browserconfig.xml","4c4cbadca63e1d403e2722ee95aeb4d2"],["favicons/favicon-16x16.png","285a4cfb3c365a94de9b1fe6528a4d7d"],["favicons/favicon-32x32.png","d788240b36733beb99fbdd7e9b39848f"],["favicons/favicon.ico","08ec15c5b8c884b085bc451f91aa48cd"],["favicons/mstile-150x150.png","460e288f09bef79c3336a1b487ed442f"],["fonts/fontawesome-5/css/all.css","063b183245c83c16a7f8fb8d025ceb24"],["fonts/fontawesome-5/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["fonts/fontawesome-5/webfonts/fa-brands-400.svg","d1f95353a09c7afd544e9ae2bc8f5af7"],["fonts/fontawesome-5/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["fonts/fontawesome-5/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["fonts/fontawesome-5/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["fonts/fontawesome-5/webfonts/fa-brands-400d41d.eot","03783c5172ee1ad128c576bf88fac168"],["fonts/fontawesome-5/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["fonts/fontawesome-5/webfonts/fa-regular-400.svg","6c6a5fad8ed5136b92d0ead30b2328d3"],["fonts/fontawesome-5/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["fonts/fontawesome-5/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["fonts/fontawesome-5/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["fonts/fontawesome-5/webfonts/fa-regular-400d41d.eot","fc9c63c8224fb341fc933641cbdd12ef"],["fonts/fontawesome-5/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["fonts/fontawesome-5/webfonts/fa-solid-900.svg","0ffddc07ec1115efbe1833a0023a711e"],["fonts/fontawesome-5/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["fonts/fontawesome-5/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["fonts/fontawesome-5/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["fonts/fontawesome-5/webfonts/fa-solid-900d41d.eot","ef3df98419d143d9617fe163bf4edc0b"],["fonts/icon-font/css/style.css","b0f6ee97c9f3cc0d35579a21e5f42f63"],["fonts/icon-font/fonts/Grayic.eot","9acb3b2e5f5a4f0faa14576bd662fb21"],["fonts/icon-font/fonts/Grayic.svg","660d390c77f7d3975d827a0b1a4ae986"],["fonts/icon-font/fonts/Grayic.ttf","6995525af153a14d4681be146a1bf9f0"],["fonts/icon-font/fonts/Grayic.woff","fae52f633cb4a4768725d65b4e0e7777"],["fonts/icon-font/fonts/Grayic.woff2","2b5eaaf3a8597d0f9bd90baefc3967e9"],["fonts/typography-font/CircularStd-Bold.eot","c367c8c28b3e5cf2fb1a8e972624ae23"],["fonts/typography-font/CircularStd-Bold.ttf","b21525a9497949c3fdef65e444c50c0e"],["fonts/typography-font/CircularStd-Bold.woff","889a0a13db9a6f30f35ac814d051c19a"],["fonts/typography-font/CircularStd-Bold.woff2","bd1f8d249a06ca6bf3137388f88dd6f4"],["fonts/typography-font/CircularStd-BoldItalic.eot","69a270063ce8a67b0c798a1329bff78a"],["fonts/typography-font/CircularStd-BoldItalic.ttf","aabccd8319d7e5c84d6582eb656cb46c"],["fonts/typography-font/CircularStd-BoldItalic.woff","2674d5d15cd1eb906b37ef059dbd40cc"],["fonts/typography-font/CircularStd-BoldItalic.woff2","0a852f969c60640837ddccb5981e2e59"],["fonts/typography-font/CircularStd-BoldItalicd41d.eot","69a270063ce8a67b0c798a1329bff78a"],["fonts/typography-font/CircularStd-Boldd41d.eot","c367c8c28b3e5cf2fb1a8e972624ae23"],["fonts/typography-font/CircularStd-Book.eot","4b9ac24507934f24aa069f835eb5bfc7"],["fonts/typography-font/CircularStd-Book.ttf","df11411b6232f336b5cf95340c5f680a"],["fonts/typography-font/CircularStd-Book.woff","bdf1b46150e090d85242d0164630c571"],["fonts/typography-font/CircularStd-Book.woff2","7afc3a2bea1a382fd30eaf0df7ebf24d"],["fonts/typography-font/CircularStd-BookItalic.eot","3f27ffce82b90a3aa66525a5d3541067"],["fonts/typography-font/CircularStd-BookItalic.ttf","fadd5e268e4afe54a78fa771333f1b2c"],["fonts/typography-font/CircularStd-BookItalic.woff","eaf232b20ba89ed24c3179a6fff913bf"],["fonts/typography-font/CircularStd-BookItalic.woff2","30813d791f2b837ff3a675ca691821c5"],["fonts/typography-font/CircularStd-BookItalicd41d.eot","3f27ffce82b90a3aa66525a5d3541067"],["fonts/typography-font/CircularStd-Bookd41d.eot","4b9ac24507934f24aa069f835eb5bfc7"],["fonts/typography-font/CircularStd-Medium.eot","11855f048840990bedeb4935307626bd"],["fonts/typography-font/CircularStd-Medium.ttf","5fb80a48fa4e35d52c78bf940cb3d3f5"],["fonts/typography-font/CircularStd-Medium.woff","b5440221732b8403fa039efb02bc7d1a"],["fonts/typography-font/CircularStd-Medium.woff2","7a92b9df5d06d93638a10caddff48da5"],["fonts/typography-font/CircularStd-Mediumd41d.eot","11855f048840990bedeb4935307626bd"],["fonts/typography-font/typo.css","93121217bb37e29bc485652c174d9186"],["image/TextLogo.png","e33c4fb5cadfbf653a689fd9de4753a6"],["image/icon.png","78d0653e4653bb5b04b964ea5ce62fa4"],["image/patterns/pattern-1.png","55e89841008caee75d137219123f1cd2"],["image/patterns/pattern-2.png","7fd49e74843a3a37e983f508c8a85145"],["image/patterns/pattern-3.png","2955e7d75b1e13935f6b410ef3b2137f"],["image/patterns/pattern-4.png","8263160699f4d9a09419f6536a57e66a"],["image/patterns/pattern-5.png","c9d2b3c06ea62bc1172bfc75e38dcd27"],["image/patterns/pattern-6.png","b08d4ab24a4e9091f6bbaa5cb010e41e"],["image/patterns/pattern-7.png","9aaeede4423ebd61bf00f3520b8f5381"],["image/previews/code1.png","f6c4e4f78cb61fe658aeb46863747e1f"],["image/previews/code2.png","69aca36bd641f10a35b956908177ec93"],["image/previews/code3.png","71fc350495b3f888deac17201b13a9c0"],["image/previews/dropShadow.png","5c877ae3c470a1a9b233ea77f0f83fdf"],["image/previews/preview.png","da4c295b3656a6244e536aadc266edba"],["image/previews/preview2.png","ca24b87ee429168e486b858880c51cfd"],["image/previews/preview3.png","b19f51d576757fb47854d9ee9faef0b9"],["image/previews/source.png","f9161a311a98d3c1fd22812d07636052"],["image/svg/desk-drawer.svg","4ef12371d5171339e89ee963fa486e81"],["image/svg/feature8-icon1.svg","05438f7442a5042442eef88b11ef09e3"],["image/svg/feature8-icon2.svg","18aad131850aa56129bc2bf4482c4744"],["image/svg/feature8-icon3.svg","68a5cbd47261d25ce7db539d76b2a5e3"],["image/svg/l1-feature-icon1.svg","37fca295f2534b4d17fe61c21b91ef49"],["image/svg/l1-feature-icon2.svg","6baf0c23e9d1deaa00541ddf8e2fe2f3"],["image/svg/l1-feature-icon3.svg","fbf9f903ecbf31bb1f49d252816a48e5"],["image/svg/l4-feature-icon1.svg","a6999505c3b51c8b6448ec4e542c3f93"],["image/svg/l4-feature-icon2.svg","4d2dfbc784f6dbcf37ce5de62ac8df90"],["image/svg/l4-feature-icon3.svg","ccdb7aad33881feffe7ecccdf13359fe"],["image/svg/l5-feature-icon1.svg","0e699a8c35bcb695e986c696c506929b"],["image/svg/l5-feature-icon2.svg","92198347823a84548a9f9d9422c2d019"],["image/svg/l5-feature-icon3.svg","22501bcd44c866787b36465ed356d16e"],["image/svg/l5-feature-icon4.svg","bff92b7879555b4438c8afcf72902182"],["image/svg/l6-feature-icon1.svg","f1f5fc4deeb3203b39a73cde095e7b5e"],["image/svg/l6-feature-icon2.svg","054252472b7509e5a728d9b433c5b412"],["image/svg/l6-feature-icon3.svg","1c138a4bb2825ba6fc871b0e408d0775"],["image/svg/l6-feature-icon4.svg","2b60baa65b6170ed3af10723f18feb6b"],["image/svg/l6-feature-icon5.svg","1701b66eae34d35b59c9cc9e090b2689"],["image/svg/l6-feature-icon6.svg","ad29e58c5cdb3554f260946fe218741e"],["image/svg/l6-footer-wave-dark.svg","e74045b894aea9731ff1290e2fee0da1"],["image/svg/l6-footer-wave.svg","5ad4a082d14af7c84467bb1cec2e6a73"],["image/svg/l6-hero-wave-dark.svg","cf4265a08628a6975eb444b2e1fc9cde"],["image/svg/l6-hero-wave.svg","5710451a8952103ce2108409a97860bc"],["image/svg/l6-how-timeline.svg","0f107dda4d8ed87941a7760677d4611d"],["image/svg/l6-video-wave-dark.svg","3a881f1b2eff7b892274101e4eba54dd"],["image/svg/l6-video-wave.svg","590b4a3068193a1c422c136ae7ab8ff5"],["image/svg/mug.svg","3afc5c0868fd0152d69e094199ec2629"],["image/svg/quote-image.svg","fe10a372a12cc221a4922a1eacc2b441"],["image/svg/wifi.svg","91188087ec07e13721e9fe73fcc071b7"],["index.html","15218517544604b9ecc4027d1757b4aa"],["js/custom.js","21a0f968a353bcce95f2c7ebf796f1a9"],["js/vendor.min.js","68a851083e00f0dd94e2fd7dba7190f5"],["plugins/aos/aos.min.css","e1fecd5cadee75d3685a3bef011f3cf5"],["plugins/aos/aos.min.js","f41050661b3c1469bf5201810300364b"],["plugins/counter-up/jquery.counterup.min.js","4f0e0b047f2ed8512d5119b31432bdcf"],["plugins/counter-up/jquery.waypoints.min.js","cebc34dedef229a98275955df75e20e5"],["plugins/date-picker/css/gijgo.min.css","c6e365833e9acbe46e4943a2d4b7a39e"],["plugins/date-picker/fonts/gijgo-materialba15.eot","8f81d3fa7191d3fd313b64937575ed9a"],["plugins/date-picker/fonts/gijgo-materialba15.svg","bd89dca8623c2408ba6fb5f241a80503"],["plugins/date-picker/fonts/gijgo-materialba15.ttf","4d36e0a9d36c5d6e08e625243f65a894"],["plugins/date-picker/fonts/gijgo-materialba15.woff","21013818a12bcb1d8a6fe81fd7ac3aa8"],["plugins/date-picker/js/gijgo.min.js","261c5b91fdec568ff41e3e6dbb95a397"],["plugins/fancybox/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["plugins/fancybox/jquery.fancybox.min.js","003e7d1be42767dacd59bd516082e9e1"],["plugins/nice-select/jquery.nice-select.min.js","4e2def5093eb4c4281624db4a5aa8f9c"],["plugins/nice-select/nice-select.min.css","5c4ad7ca5c96443964ccf89ae28519a4"],["plugins/prism-js/prism.css","78e07b5019d16bc2476247ef0838a6ce"],["plugins/prism-js/prism.js","e798b3382c999f7b7e026809ee5f9b00"],["plugins/slick/slick.min.css","5b76ab080b3753b2278781a26e8a9b14"],["plugins/slick/slick.min.js","777da4aaf5b960636dec0fd4e50ba489"],["plugins/theme-mode-switcher/gr-theme-mode-switcher.js","a93df8b437df22413268c891dc1348d4"],["plugins/theme-mode-switcher/switcher-panel.css","9ad7c9d6fe77256486bcb2b166af54a7"],["plugins/tilt/tilt.jquery.html","2a4fdabbdd3a1517c51e4ccf91989656"],["site.webmanifest","274ce0dfb6ea7f9d18edaa8f4433a3e3"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







