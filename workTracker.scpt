var app = Application.currentApplication()
app.includeStandardAdditions = true

var response = app.displayDialog("What are you working on?", {
    defaultAnswer: "",
    withIcon: "note",
    buttons: ["Cancel", "Continue"],
    defaultButton: "Continue",
	givingUpAfter: 60//sec
})

var path = Path("/Users/ishani.gupta/dev/TrackerApp/work.txt")
var filestring = path.toString()
var date = new Date();
var wwork = "\n"+ date +" : "+response.textReturned
writeTextToFile(wwork,filestring,false)

function writeTextToFile(text, file, overwriteExistingContent) {
    try {
        var fileString = file.toString()
        var openedFile = app.openForAccess(Path(fileString), { writePermission: true })

        if (overwriteExistingContent) {
            app.setEof(openedFile, { to: 0 })
        }

        // Always append with newline
        var safeText = text + "\n";

        // Shift +1 so we don't overwrite last char
        app.write(safeText, { to: openedFile, startingAt: app.getEof(openedFile) + 1 })

        app.closeAccess(openedFile)
        return true
    } catch (error) {
        try { app.closeAccess(file) } catch (e) {}
        return false
    }
}
