module.exports = function(grunt) {

  // var processFunction(source, content) {
  //   return source + "<br>";
  // }

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    bake: {
        your_target: {
            options: {
                // Task-specific options go here
              // content: "app/content.json",
              // section: "en",
              // process: processFunction
            },

            files: {
                // files go here, like so:
                "index.html": "app/index.html",
                "catan-colonist-extension.html": "app/catan-colonist-extension.html",
                "flow-chat-js-demo.html": "app/flow-chat-js-demo.html",
                "barba-js-page-transitions-without-refresh.html" : "app/barba-js-page-transitions-without-refresh.html",
                "work-1.html": "app/work-1.html",
                "work-2.html": "app/work-2.html",
                "work-3.html": "app/work-3.html",
                "work-4.html": "app/work-4.html",
                // etc ...
            }
        },
    },
    
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'main.css': ['src/main.css']
        }
      }
    },
    watch: {
      bake: {
          files: [ "app/**"],
          tasks: "bake"
      },
      cssmin: {
          files: [ "src/**" ],
          tasks: "cssmin"
      }
    }

  });

  grunt.loadNpmTasks( "grunt-bake" );
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask("default", ["bake", "cssmin"]);

};