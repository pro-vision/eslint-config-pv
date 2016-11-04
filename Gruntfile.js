module.exports = function(grunt) {

  grunt.initConfig({

    eslint: {
      options: {
        configFile: ".eslintrc"
      },
      target: [
        "*.js",
        "rules/**/*.js"
      ]
    }
  });

  grunt.loadNpmTasks("grunt-eslint");

  grunt.registerTask("default", ["eslint"]);
};
