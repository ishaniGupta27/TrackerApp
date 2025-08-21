# TrackerApp

**Description:**  
TrackerApp is a simple macOS automation script to help you track what you are working on throughout your day. The app prompts you every hour with a dialog asking what task you’re currently focusing on, then logs your input with a timestamp to a local text file for easy review later.

---

## Features

- Hourly prompts asking “What are you working on?”
- Saves responses with timestamps to a configurable log file
- Lightweight and easy to customize or extend
- Uses macOS JavaScript for Automation (JXA) for native integration

---

## How to Test

1. **Prepare your script:**  
   Save your script as `workTracker.scpt`.

2. **Run manually via Terminal:**  

`osascript -l JavaScript workTracker.scpt`

This command executes the script, showing the prompt immediately.

3. **Verify output:**  
- Check the log file (default path in the script) for your entry.  
- Entries are prepended with a timestamp of when you responded.

4. **Optional: Automate hourly prompt**  
Use `launchd` or `crontab` to schedule the script to run every hour.


Feel free to customize the script’s prompt, log file location, or scheduling mechanism to fit your workflow.
