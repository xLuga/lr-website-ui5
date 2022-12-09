sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var GoalsBlock = BlockBase.extend("lr.de.website.blocks.ZieleBlock_gym_private", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "lr.de.website.blocks.ZieleBlock_gym_private",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "lr.de.website.blocks.ZieleBlock_gym_private",
					type: ViewType.XML
				}
			}
		}
	});
	return GoalsBlock;
});
