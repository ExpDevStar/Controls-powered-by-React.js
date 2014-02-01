module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      dev: {
        files: [ 'jsx/**/*.js', 'js/**/*.js' ],
        tasks: [ 'deploy' ]
      }
    },

    connect: {
      dev: {
        options: {
          port: 9000,
          livereload: true,
          base: '.',
          open: 'http://localhost:9000'
        }
      }
    }

  })

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  var target = grunt.option('target') || 'dev';

  grunt.registerTask('debug', ['deploy', 'connect', 'watch']);
  grunt.registerTask('deploy', []);
  grunt.registerTask('default', ['debug']);
}
