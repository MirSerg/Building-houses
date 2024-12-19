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
    // imagemin: {
    //   dynamic: {
    //     files: [{
    //       expand: true,
    //       // cwd: '<%= config.app %>/images',
    //       cwd: 'images',
    //       src: ['**/*.{png,PNG,jpg,JPG}'],
    //       dest: 'images/build/'
    //     }]
    //   }
    // },
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
    replace: {
      dist: {
        options: {
          patterns: [
            {
              // ../../images
              match: /\.\.\/\.\.\//g,
              replacement: '../'
            }
          ]
        },
        files: [
          {
            expand: true, flatten: true, src: ['dist/style.min.css'], dest: 'dist/'
          },
          {
            expand: true, flatten: true, src: ['dist/style.css'], dest: 'dist/',
          }
        ],
      }
    },
    watch: {
      css: {
        files: 'src/styles/*.less',
        // tasks: ['less', 'imagemin', 'cssmin', 'replace']
        tasks: ['less', 'cssmin', 'replace']
      }
    }
  });
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.registerTask('default', ['less', 'imagemin', 'cssmin', 'replace']);
  grunt.registerTask('default', ['less', 'cssmin', 'replace']);
};
