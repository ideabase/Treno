<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  '*' => array(
	       'extraAllowedFileExtensions' => 'eps',
         'siteUrl' => 'https://trenokent.com/production',
         'enableCsrfProtection' => true,
         'omitScriptNameInUrls' => true,
         'cpTrigger' => 'admin',
         'enableCsrfProtection' => true,
         'environmentVariables' => array(
           'basePath' => '',
           'baseUrl'  => 'https://trenokent.com/production',
        )
	),
	'treno.web' => array(
	    'devMode' => true,
      'siteUrl' => 'http://treno.web/production',
      'environmentVariables' => array(
        'basePath' => '',
        'baseUrl'  => 'http://treno.web/production',
      )
	)
);
