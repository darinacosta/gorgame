module.exports = function(grunt) {

grunt.initConfig({
  clean: {
    webkit: ['webkitbuilds'],
    music:  ['build/assets/audio/*.mp3']
  },
  shell: {
    createIcons: {
        options: {
            stdout: true
        },
        command: 'iconutil -c icns assets/icon.iconset'
      },
      copyIcons: {
          options: {
              stdout: true
          },
          command: 'cp assets/icon.icns webkitbuilds/geographyofrobots/osx64/geographyofrobots.app/Contents/Resources/nw.icns'
      }
  },
  copy: {
    main: {
      files: [
        {expand: true, src: ['assets/**', '!assets/tileprojects/*',
                             '!assets/buttons/*', 'index.html', '0.bundle.js', 'bundle.js',
                             'package.json'],
         dest: 'build', filter: 'isFile'},
      ],
    },
  },
  karma: {
    unit: {
      options: {
        configFile: './karma.conf.js'
      }
    }
  },
  concat: {
    options: {
      stripBanners: true,
      separator: ';'
    },
    dist: {
      src: ['node_modules/phaser/build/phaser.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'src/services/app.js'
          ],
      dest: 'build/deps.js',
    },
  },
  execute: {
      target: {
          src: ['scripts/compileDialogue.js']
      }
  },
  'string-replace': {
    inline: {
      files: {
        'build/': 'index.html',
      },
      options: {
        replacements: [
          {
            pattern: '<script src="node_modules/phaser/build/phaser.min.js"></script>',
            replacement: '<script src="deps.js"></script>'
          },
          {
            pattern: '<script src="node_modules/jquery/dist/jquery.min.js"></script>',
            replacement: ''
          },
          {
            pattern: '<script src="src/services/app.js"></script>',
            replacement: ''
          }
        ]
      }
    }
  },
  uglify: {
    my_target: {
      files: {
        'build/deps.js': ['build/deps.js']
      }
    }
  },
  nwjs: {
    options: {
        fullscreen: true,
        platforms: ['osx64', 'win64'],
        buildDir: './webkitbuilds', // Where the build version of my NW.js app is saved
        macIcns: './assets/icon.icns',
    },
    src: ['./build/**/*'] // Your NW.js app
  },
  watch: {
    scripts: {
      files: ['**/*.js'],
      options: {
        //spawn: false,
      },
    },
  },
});

grunt.loadNpmTasks('grunt-nw-builder');
grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-string-replace');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-execute');
grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-karma');

grunt.registerTask('test', [ 'karma']);

grunt.registerTask('default', ['execute', 'copy', 'concat', 'uglify', 'string-replace']);
grunt.registerTask('dev', ['requirejs:dev', 'copy', 'concat', 'string-replace', 'watch']);
grunt.registerTask('webkit', ['execute', 'copy', 'clean:music', 'concat', 'string-replace', 'clean:webkit', 'nwjs']);

};
