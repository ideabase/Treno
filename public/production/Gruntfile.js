
module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
        'assets/css/style.css': 'assets/sass/style.scss'
        }
      }
    },
    shell: {
      patternlab: {
        command: "php lab/core/console -gp"
      }
    },
    watch: {
      css: {
				files: '**/sass/*.scss',
				tasks: ['sass'],
        options: {
          livereload: true,
        },
			},
      html: {
        files: ['lab/source/_patterns/**/*.mustache', 'lab/source/_patterns/**/*.md',  'lab/source/**/*.json'],
        tasks: ['shell:patternlab'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Tasks
  grunt.registerTask('default', ['watch', 'shell:patternlab']);
};
