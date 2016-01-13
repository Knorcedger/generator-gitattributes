'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	writing: function() {
		this.fs.copyTpl(
			this.templatePath('gitattributes'),
			this.destinationPath('.gitattributes')
		);
	}
});
