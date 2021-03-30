module.exports = (migration) => {
	const seoConfig = migration
		.createContentType('seoConfig')
		.name('SEO Config')
		.description('')
		.displayField('title')
	seoConfig
		.createField('title')
		.name('title')
		.type('Symbol')
		.localized(false)
		.required(true)
		.validations([])
		.disabled(false)
		.omitted(false)
	seoConfig
		.createField('description')
		.name('description')
		.type('Symbol')
		.localized(false)
		.required(true)
		.validations([])
		.disabled(false)
		.omitted(false)
	seoConfig
		.createField('siteName')
		.name('siteName')
		.type('Symbol')
		.localized(false)
		.required(true)
		.validations([])
		.disabled(false)
		.omitted(false)
	seoConfig
		.createField('siteUrl')
		.name('siteUrl')
		.type('Symbol')
		.localized(false)
		.required(false)
		.validations([])
		.disabled(false)
		.omitted(false)

	seoConfig
		.createField('twitterUser')
		.name('twitterUser')
		.type('Symbol')
		.localized(false)
		.required(true)
		.validations([
			{
				regexp: {
					pattern: '@(\\w){1,15}$',
					flags: null,
				},
			},
		])
		.disabled(false)
		.omitted(false)

	seoConfig
		.createField('favicon')
		.name('favicon')
		.type('Link')
		.localized(false)
		.required(true)
		.validations([
			{
				linkMimetypeGroup: ['image'],
			},
		])
		.disabled(false)
		.omitted(false)
		.linkType('Asset')

	seoConfig
		.createField('image')
		.name('image')
		.type('Link')
		.localized(false)
		.required(true)
		.validations([
			{
				linkMimetypeGroup: ['image'],
			},
		])
		.disabled(false)
		.omitted(false)
		.linkType('Asset')

	seoConfig.changeFieldControl('title', 'builtin', 'singleLine', {})
	seoConfig.changeFieldControl('description', 'builtin', 'singleLine', {})
	seoConfig.changeFieldControl('siteName', 'builtin', 'singleLine', {})
	seoConfig.changeFieldControl('siteUrl', 'builtin', 'urlEditor', {})
	seoConfig.changeFieldControl('twitterUser', 'builtin', 'singleLine', {})
	seoConfig.changeFieldControl('favicon', 'builtin', 'assetLinkEditor', {})
	seoConfig.changeFieldControl('image', 'builtin', 'assetLinkEditor', {})
	const page = migration
		.createContentType('page')
		.name('Page')
		.description('')
		.displayField('urlSlug')

	page
		.createField('urlSlug')
		.name('URL Slug')
		.type('Symbol')
		.localized(false)
		.required(true)
		.validations([
			{
				unique: true,
			},
			{
				regexp: {
					pattern:
            '(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$',
					flags: null,
				},
			},
		])
		.disabled(false)
		.omitted(false)

	page
		.createField('seoConfig')
		.name('SEO Config')
		.type('Link')
		.localized(false)
		.required(true)
		.validations([
			{
				linkContentType: ['seoConfig'],
			},
		])
		.disabled(false)
		.omitted(false)
		.linkType('Entry')

	page
		.createField('pageBlocks')
		.name('Page Blocks')
		.type('Array')
		.localized(false)
		.required(false)
		.validations([])
		.disabled(false)
		.omitted(false)
		.items({
			type: 'Link',

			validations: [
				{
					linkContentType: ['componentRichText'],
				},
			],

			linkType: 'Entry',
		})

	page.changeFieldControl('urlSlug', 'builtin', 'slugEditor', {})
	page.changeFieldControl('seoConfig', 'builtin', 'entryLinkEditor', {})
	page.changeFieldControl('pageBlocks', 'builtin', 'entryLinksEditor', {})
	const componentRichText = migration
		.createContentType('componentRichText')
		.name('Component: Rich Text')
		.description('')

	componentRichText
		.createField('content')
		.name('Content')
		.type('RichText')
		.localized(false)
		.required(true)
		.validations([
			{
				enabledMarks: ['bold', 'italic', 'underline'],
				message: 'Only bold, italic, and underline marks are allowed',
			},
			{
				enabledNodeTypes: [
					'heading-1',
					'heading-2',
					'heading-3',
					'heading-4',
					'heading-5',
					'heading-6',
					'ordered-list',
					'unordered-list',
					'hr',
					'blockquote',
					'embedded-asset-block',
					'hyperlink',
					'entry-hyperlink',
					'asset-hyperlink',
				],

				message:
          'Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, asset, link to Url, link to entry, and link to asset nodes are allowed',
			},
			{
				nodes: {},
			},
		])
		.disabled(false)
		.omitted(false)

	componentRichText.changeFieldControl(
		'content',
		'builtin',
		'richTextEditor',
		{},
	)
}
