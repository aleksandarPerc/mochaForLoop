module.exports = {
	TEST_CONFIGS_FOLDER: 'testConfigs',
	TITLE_MAX_CHAR: 255,
	TITLE_MIN_CHAR: 5,
	META_CHAR_VALUE: 'utf-8',
	META_DESCRIPTION_MIN_CHAR: 55,
	META_DESCRIPTION_MAX_CHAR: 255,
	ASSETS_EXTENSION_REGEX: /\.(gif|jpe?g|tiff|png|webp|bmp|wav|mpeg|mp4|aac?p|ogg|webm|opgg)/i,
	ASSETS_SRC_ATTRIBUTES: ['src', 'srcSet'
	],
	ASSETS_CDN_STRICT_CHECK: false, // checks if all attributes have images on CDN or at least one 
	MAIN_CSS_MAX_SIZE: 500,
	LIGHTHOUSE_MAX_TESTS: 2,
	LIGHTHOUSE_DEFAULT_CATEGORIES: ['performance', 'accessibility', 'seo', 'best-practices'
	],
	IMG_MIN_ALT_VALUE_LENGTH: 3
}