const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  // IE
  const filesEs5 = [
    "./dist/argo-qr-elements/polyfills-es5.js",
    "./dist/argo-qr-elements/polyfill-webcomp-es5.js",
    "./dist/argo-qr-elements/main-es5.js",
  ];

  const filesEs2015 = [
    "./dist/argo-qr-elements/polyfills-es2015.js",
    "./dist/argo-qr-elements/polyfill-webcomp.js",
    "./dist/argo-qr-elements/main-es2015.js",
  ];

  await fs.ensureDir("angular-elements");

  await concat(filesEs5, "angular-elements/wc-elements-es5.js");
  await concat(filesEs2015, "angular-elements/wc-elements-es2015.js");

  await fs.copyFile(
    "./dist/argo-qr-elements/favicon.ico",
    "angular-elements/favicon.ico"
  );
})();
