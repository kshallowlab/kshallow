/**
 * `browserify`
 *
 * ---------------------------------------------------------------
 *
 * Browserify transform for Vue.js components, with scoped CSS and
 * component hot-reloading.
 *
 * For usage docs see:
 *   https://github.com/vuejs/vueify
 *
 */
module.exports = function(grunt) {
  var hmrServerIP = process.env.DOCKER_MACHINE_IP || 'localhost'

  grunt.config.set('browserify', {
    dev: {
      options: {
        watch : true,
        plugin: [
          ['browserify-hmr', { hostname : '0.0.0.0', url: '//' + hmrServerIP + ':3123' }]
        ],
        transform: ['vueify', ["babelify", { "presets": ["es2015"] }]],
        browserifyOptions: {
          debug: true
        },
        watchifyOptions: {
          poll: true
        }
      },
      files: [{
        expand: true,
        cwd: 'assets/js/',
        src: ['main.js'],
        dest: '.tmp/public/js/',
      }]
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};