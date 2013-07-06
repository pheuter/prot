module.exports = function(grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      compass: {
        files: [
          'styles/**/*.scss'
        ],
        tasks: ['compass:server']
      }
    },

    compass: {
      options: {
        config: '.config.rb'
      },
      server: {
        options: {
          outputStyle: 'expanded',
          debugInfo: true
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        }
      }
    }
  });

  grunt.registerTask('build', [
    'compass:dist'
  ]);

  grunt.registerTask('default', ['build']);
};