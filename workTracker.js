var app = Application.currentApplication()
app.includeStandardAdditions = true
 
var response = app.displayDialog("What's are you working on?", {
    defaultAnswer: "",
    withIcon: "note",
    buttons: ["Cancel", "Continue"],
    defaultButton: "Continue",
	givingUpAfter: 60//sec
})

//app.displayDialog("Hello, " + (response.textReturned) + ".")
var path = Path("work.txt") //TODO: Add Path of your file here
var filestring = path.toString()
var date = new Date();
var wwork = "\n"+ date +" : "+response.textReturned
writeTextToFile(wwork,filestring,false)

function writeTextToFile(text, file, overwriteExistingContent) {
    try {
 
        // Convert the file to a string
        var fileString = file.toString()
 
        // Open the file for writing
        var openedFile = app.openForAccess(Path(fileString), { writePermission: true })
 
        // Clear the file if content should be overwritten
        if (overwriteExistingContent) {
            app.setEof(openedFile, { to: 0 })
        }
 
        // Write the new content to the file
        app.write(text, { to: openedFile, startingAt: app.getEof(openedFile) })
 
        // Close the file
        app.closeAccess(openedFile)
 
        // Return a boolean indicating that writing was successful
        return true
    }
    catch(error) {
 
        try {
            // Close the file
            app.closeAccess(file)
        }
        catch(error) {
            // Report the error is closing failed
            console.log(`Couldn't close file: ${error}`)
        }
 
        // Return a boolean indicating that writing was successful
        return false
    }
}
