module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      def: {
        options: {},
        files: {"css/flat-colors.css": "less/flat-colors.less"}
      },
      min: {
        options: {
          cleancss: true,
          compress: true,
          yuicompress: true,
        },
        files: {"css/flat-colors.min.css": "less/flat-colors.less"}
      }
    },
    watch: {
      styles: {
        files: ['less/flat-colors.less', 'less/variables.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
  grunt.registerTask('install', ['default']);
};