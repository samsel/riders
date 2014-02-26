module.exports = function (grunt) {
  grunt.initConfig({
      shell: {                    
          build: {                 
              options: {                       
                  stdout: true
              },
              command: 'zip -r -9 build/riders.nw *'
          },
          kill: {                 
              options: {                       
                  stdout: true
              },
              command: "kill `ps -e | grep riders | awk '{print $1}'`"
          },
          open: {                 
              options: {                       
                  stdout: true
              },
              command: 'open build/riders.nw'
          }           
      }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('default', ['shell']);
};

