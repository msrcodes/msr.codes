/**
 * Helper function required for use with contentful-typescript-codegen
 * https://github.com/intercom/contentful-typescript-codegen
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const {createClient} = require('contentful-management')
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv-flow').config()

const {
	CONTENTFUL_MANAGEMENT_TOKEN: accessToken,
	CONTENTFUL_SPACE_ID: spaceId,
	CONTENTFUL_ENVIRONMENT: environment,
} = process.env

module.exports = () => {
	const client = createClient({accessToken})

	return client.getSpace(spaceId).then((space) => space.getEnvironment(environment))
}
