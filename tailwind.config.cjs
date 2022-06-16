const { resolveProjectReferencePath } = require("typescript");

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
				"auto-fit": "repeat(auto-fit, minmax(300px, 1fr))"
			}
		}
	},

	plugins: []
};

module.exports = config;
