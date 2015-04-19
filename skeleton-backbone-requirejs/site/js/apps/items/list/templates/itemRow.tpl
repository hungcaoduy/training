<td><!-- <img src="<%= image %>"> --></td>
<td><%= title %></td>
<td><%= $.format.date(new Date(effectiveDate), 'MMMM yyyy') %></td>
<td><%= description %></td>
<td><% _.each(keywords, function(keyobj)  {%>
<%= keyobj.keyword %> <% }); %></td>
<td>
    <a href="#items/<%- _id %>" class="btn btn-small js-show"><i class="icon-eye-open"></i>Show</a>
    <a href="#items/<%- _id %>"/edit" class="btn btn-small js-edit"><i class="icon-pencil"></i>Edit</a>
    <button class=" btn btn-small js-delete"><i class="icon-remove"></i>Delete </button>
</td>

