/**
 * Paths Configuration
 */
var paths = {
  dest    :     "./dist",
  src     :     "./assets",
  jsSrc   :     "./assets/js/**/[_]*.js",
  vendorSrc:    "./assets/vendor/**/*.js",
  cssSrc  :     "./assets/css/**/*.scss",
  imgSrc  :     "./assets/img/**/*",
  fontSrc :     "./assets/fonts/**/*",
  htmlSrc :     "**/*.html"
}

module.exports = {
  /**
   * SASS
   */
  sass: {
    src: paths.cssSrc,
    outputName: "main.css",
    dest: paths.dest + "/css"
  },

  /**
   * JAVASCRIPT
   */
  javascript: {
    custom: {
      src: paths.jsSrc,
      outputName: "main.js",
      dest: paths.dest + "/js"
    },
    vendor: {
      src: paths.vendorSrc,
      outputName: "vendor.js",
      dest: paths.dest + "/js"
    }
  },

  /**
   * WATCHER
   */
  watch: {
    jsSrc: paths.jsSrc,
    cssSrc: paths.cssSrc,
    imgSrc: paths.imgSrc,
    htmlSrc: paths.htmlSrc
  },

  /**
   * FONT
   */
  font: {
    src: [
      paths.fontSrc
    ],
    dest: paths.dest + "/fonts"
  },

  /**
   * IMAGES
   */
   img: {
     src: [
       paths.imgSrc
     ],
     dest: paths.dest + "/img"
   },

   /**
    * HTML
    */
    html: {
      src: [
        paths.htmlSrc
      ]
    }
};
