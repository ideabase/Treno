# IdeaBase New Website Setup Instructions

## GitHub Instructions

* Install Tower https://www.git-tower.com/mac/ (or use command line if you want)
* Log in with GitHub credentials and clone the repository

## MAMP

* Install MAMP Pro http://mamp.info
* Under ports - click the button to Set server ports to 80, 81, etc...
* Set up a new host directory (aka something.web) and point to the "public" or "html" folder
* Set up a local database, if using a CMS
* Set the default password for MySQL to "root"
* Start Servers

## Command Line Instructions

* Install Node.js for your OS https://nodejs.org/en/download/
* Open the command line interface
* Type "sudo gem install sass" and enter
* Type "sudo npm install -g grunt-cli" and enter
* Type "sudo npm install" and enter
* Navigate to the directory where your project is located (the public or html folder)
* Type "grunt" and hit enter. (If criticalcss task gets stuck, MAMP probably isn't running)

Grunt will do the following:

* Compile all sass in compressed format
* Autoprefix CSS
* Combine and compress all JavaScript files
* Autobuild the Pattern Lab files (if needed)
* Autorefresh the browser when HTML or CSS files are updated
