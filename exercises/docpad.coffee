# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	templateData:
		site:
			title: "My Website"
	collections:
		pages: ->
			@getCollection("html").findAllLive({isPage:true},[{filename:1}]).on "add", (model) -> model.setMetaDefaults({layout:"default"})
		posts: ->
			@getCollection("html").findAllLive({layout:"default"},[{filename:1}])
}

# Export the DocPad Configuration
module.exports = docpadConfig