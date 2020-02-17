const merge = require('webpack-merge');

class NextJsWebpackOverride {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    Object.assign(compiler, {
      options: merge.smart(compiler.options, this.options),
    });
  }
}

module.exports = NextJsWebpackOverride;
