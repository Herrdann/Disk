const allFolders = $(".directory-list li > ul");
allFolders.each(function() {

    const folderAndName = $(this).parent();
    folderAndName.addClass("folder");

    const backupOfThisFolder = $(this);
    $(this).remove();
    folderAndName.wrapInner("<a href='#' />");
    folderAndName.append(backupOfThisFolder);

    folderAndName.find("a").click(function(e) {
        $(this).siblings("ul").slideToggle("slow");
        e.preventDefault();
    });

});