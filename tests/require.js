require('../commonjs.js').then(_=>_.fetchquire('README.md')).then(_=>console.log((new TextDecoder()).decode(_)));
