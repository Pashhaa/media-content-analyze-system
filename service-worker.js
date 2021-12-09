/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "e746d769a19fec4713e125951692baf3"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.8824f6df.css",
    "revision": "e94ec1a50dfb576425e2c8fd1670a243"
  },
  {
    "url": "assets/img/er-diagram.438c2b9a.png",
    "revision": "438c2b9a0165f31daa658f34ebd56202"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e50a5206.js",
    "revision": "6f27c3532be60e76bca8e5465568abd1"
  },
  {
    "url": "assets/js/11.00b6eec7.js",
    "revision": "cd6fce83d58f50592245b8edb4991be6"
  },
  {
    "url": "assets/js/12.8351e743.js",
    "revision": "3d2e4cd7c4ce357bf03d77ce9b3fc1ec"
  },
  {
    "url": "assets/js/13.6b4a3ce8.js",
    "revision": "ff602871a9dd9eac5035869fcaa21901"
  },
  {
    "url": "assets/js/14.2545c1ad.js",
    "revision": "c47e00178e234471f42ccc2546285565"
  },
  {
    "url": "assets/js/15.d7ce4283.js",
    "revision": "ec17f013afab59fb5dc48e426ca6c2b6"
  },
  {
    "url": "assets/js/16.9962b22a.js",
    "revision": "457fd8ca0310da661a5c7e7484bb600e"
  },
  {
    "url": "assets/js/17.792370d3.js",
    "revision": "619895115fc8ea86a2d804f9d65160b5"
  },
  {
    "url": "assets/js/18.0848fa7b.js",
    "revision": "c9fabb871bf082473e9466c33d9a0deb"
  },
  {
    "url": "assets/js/19.d924ab11.js",
    "revision": "00e10809624584ab5e6eeda00f433196"
  },
  {
    "url": "assets/js/2.5a777aaf.js",
    "revision": "f57e9f1755d4ab96c82e5556eb5a84f9"
  },
  {
    "url": "assets/js/20.ec03967e.js",
    "revision": "3c21c8bb38bfd774f1f6198656a6f0af"
  },
  {
    "url": "assets/js/21.1501a0d0.js",
    "revision": "599b306d1fddd33b840f3f3d50868b44"
  },
  {
    "url": "assets/js/22.7ebfdf73.js",
    "revision": "1009645eec118f145527a20e294c37d3"
  },
  {
    "url": "assets/js/23.c7f93536.js",
    "revision": "8b1d55827b216963c7b37283fbb8d7bb"
  },
  {
    "url": "assets/js/24.e2bcfbb2.js",
    "revision": "bf44d861634fd20fd35461ffea65f694"
  },
  {
    "url": "assets/js/25.b4fc713b.js",
    "revision": "832aa43d26919d25fcea2d78a7d8d4a4"
  },
  {
    "url": "assets/js/27.93013a3f.js",
    "revision": "dc6e9b575909a753f0d4c53e52c95223"
  },
  {
    "url": "assets/js/3.3d08d86c.js",
    "revision": "cc362cb24068987426e9655bdb12b30a"
  },
  {
    "url": "assets/js/4.4c193c95.js",
    "revision": "20f92a95ac69fb7c48e63b470c35d475"
  },
  {
    "url": "assets/js/5.33f10a2a.js",
    "revision": "901a99cdf3abb60d02f05b13e45f36b2"
  },
  {
    "url": "assets/js/6.6d8c3d51.js",
    "revision": "5666693a1497354d7117ebbb34cc592d"
  },
  {
    "url": "assets/js/7.9617083c.js",
    "revision": "bb0c8e37415a02abe60360941ab6ec31"
  },
  {
    "url": "assets/js/8.53a1b2bd.js",
    "revision": "08bfe2392b3540f002e470b59276c162"
  },
  {
    "url": "assets/js/9.6d73ecd3.js",
    "revision": "e5c2ac5dcd8c3022a731095ecd85a5b1"
  },
  {
    "url": "assets/js/app.4d79a796.js",
    "revision": "ac1c2c6ba3f8d38462cd030875f63b6c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7fc12f320f6a5f0ec7852e5793de0630"
  },
  {
    "url": "design/index.html",
    "revision": "999b590177bf016a7759ad8dd2dfdef9"
  },
  {
    "url": "index.html",
    "revision": "97b1c153ae6e6342654f56279a2f3b65"
  },
  {
    "url": "intro/index.html",
    "revision": "799d925935277bec9f5d93ab608a2883"
  },
  {
    "url": "intro/test.html",
    "revision": "ebb74afa27e873c733596b1ad4a0536d"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "0fdc1c6f769f3d9b4a253ba6f0723771"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "537f3773ad99c180130485dbd2052cb2"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e747826cb225b0adcec0fb0bca3b3c18"
  },
  {
    "url": "software/index.html",
    "revision": "4e163c8f2bbfdafaf87e555d4b7e25ac"
  },
  {
    "url": "test/index.html",
    "revision": "7edf1d5a109f56ce8943fb147c497aa7"
  },
  {
    "url": "use cases/index.html",
    "revision": "13733fbe5226e8794161a78f12969c5e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
