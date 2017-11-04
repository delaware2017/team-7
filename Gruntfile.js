module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: '\n',
      },
      js: {
        src: [
          'node_modules/angular/angular.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/ui-router/release/*.min.js'],
        dest: 'app/lib/built.js',
      },
      css: {
          src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
          dest: 'app/lib/bs.css'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);

};
