#write out current crontab
crontab -l > mycron
#echo new cron into cron file
echo "0 9-22 * * 1-5 cd /Users/ishani.gupta/dev/TrackerApp && osascript workTracker.scpt" >> mycron
#install new cron file
crontab mycron
rm mycron
