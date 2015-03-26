<form id="addItem" action="#" class="form-horizontal">
    <div class="form-group">
        <label for="title" class="col-sm-4 control-label">Title: </label>
        <div class="col-sm-8">
            <span><%- title %></span>
        </div>
    </div>
    <div class="form-group">
        <label for="effectiveDate" class="col-sm-4 control-label">effective date: </label>
        <div class="col-sm-8">
            <span><%= $.format.date(new Date(effectiveDate), 'MM/dd/yyyy') %></span>
        </div>
    </div>
    <div class="form-group">
        <label for="description" class="col-sm-4 control-label">Description: </label>
        <div class="col-sm-8">
            <span><%- description %></span>
        </div>
    </div>
    <div class="form-group">
        <label for="image" class="col-sm-4 control-label">Image: </label>
        <div class="col-sm-8">

        </div>
    </div>
    <!-- <div class="form-group">
        <label for="keywords" class="col-sm-4 control-label">Keywords: </label>
        <div class="col-sm-8">
            <input id="keywords" type="text" class="form-control" value="<% _.each(keywords, function(keyobj)  {%>
    <%= keyobj.keyword %> <% }); %>" />
        </div>
    </div> -->
    <div class="form-group">
    </div>
    <!-- <a href="#" class="btn btn-small js-edit"><i class="icon-pencil"></i>Edit</a> -->
    <button class="btn btn-small js-edit"><i class="icon-pencil"></i>Edit</button>
</form>

