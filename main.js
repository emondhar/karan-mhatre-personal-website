
$(function() {

    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "sbafmnpbysg5",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "rD8L3xsIYP09JyNP1pqTVMJZ9lSdTG5a9tAdWlf3Qg4"
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

    client
      .getEntries({
        content_type: 'labs',
        order: 'sys.updatedAt'
      })
      .then(function(entries) {

        console.log(entries.items);

        entries.items.forEach(function(e) {

            console.log(e);
            
            template = $('<li><a href="' + e.fields.link + '" class="block-link"><h4>' + e.fields.title + '</h4><span>View ⟶</span></a></li>');
            $('#labs').append(template);


        });
      })

});