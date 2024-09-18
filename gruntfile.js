module.exports = function (grunt) {
  
  // Project configuration.
  grunt.initConfig({
    less: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          'dist/style.css': 'src/styles/styles.less'
        }]
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/style.min.css': ['dist/style.css']
        }
      }
    },
    watch: {
      css: {
        files: 'src/styles/*.less',
        tasks:['less','cssmin']
      }
    }
  });
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['less', 'cssmin']);
  
};
