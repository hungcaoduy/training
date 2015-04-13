define(["app", "common/views", 
  'tpl!items/edit/templates/editItem.tpl'
  // 'tpl!items/new/templates/itemBlankForm.tpl'
  ], function(App, CommonViews, ItemFormTpl){
  App.module("ItemsApp.New.View", function(View, App, Backbone, Marionette, $, _){
    View.Item = CommonViews.Form.extend({
      title: "New Item",
      template: ItemFormTpl,
      onRender: function(){
        this.$(".js-submit").text("Create item");
      }
    });
  });

  return App.ItemsApp.New.View;
});
