const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
(async () => {
  let content = await jsdoc2md.render({
    files: [
      'index.js',
      'config.js',
      'Routing.js',
      'RouteHandler.js',
      'RequestContext.js',
      'ResponseContext.js'
    ],
    configure: './jsdoc.config.js'
  });
  fs.writeFileSync('reference.md', content);
})();
