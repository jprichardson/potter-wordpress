Node.js - pottercms-wordpress
================

Command line tool to export your WordPress blog to a [Potter](http://pottercms.com) blog or a static Markdown blog.


Why?
----

I don't want to use WordPress anymore. You can use this tool to export your WordPress blog to static Markdown files.



Installation
------------

    npm install pottercms-wordpress



Requirements
------------

You must have `pandoc` installed. You can download it here: http://code.google.com/p/pandoc/downloads/list



Usage
------

This command will create the directory `/tmp/procbits/articles` with all of the WordPress articles and comments for http://procbits.com

    potter-wordpress -h https://procbits.com -u MY_USER_NAME -p MY_PASSWORD --dir /tmp/procbits --exclude-drafts

**Note:** You must specifiy the username and password. This is a requirement of WordPress XML-RPC. See the `parameters` on http://codex.wordpress.org/XML-RPC_WordPress_API/Posts for an example. The reason is that this command can retreive unpublished posts as well.

Output:

```
procbits/
└── articles
    ├── 2009
    │   ├── 03
    │   │   ├── apache-virtual-hosting.md
    │   │   ├── deploying-a-rails-application-on-ubuntu-804-lts-with-phusion-passenger-and-sql-server-2005.comments.json
    │   │   └── deploying-a-rails-application-on-ubuntu-804-lts-with-phusion-passenger-and-sql-server-2005.md
    │   ├── 04
    │   │   ├── backup-a-mysql-database-on-ubuntu.md
    │   │   └── convert-innodb-tables-to-myisam.md
    │   ├── 07
    │   │   └── read-file-contents-blobs-in-gwt-and-gears.md
    │   └── 09
    │       ├── sqlite-bulk-insert.comments.json
    │       └── sqlite-bulk-insert.md
    ├── 2010
    │   ├── 01
    │   │   └── handy-c-xml-serialization-methods.md
    │   ├── 08
    │   │   ├── adding-a-close-event-when-the-user-closes-the-browser-in-gwt.md
    │   │   ├── benchmarking-c-apps-algorithms.md
    │   │   ├── hosted-wordpress-syntax-highlighting.md
    │   │   ├── levenshtein-in-ruby-1-9.md
    │   │   ├── storyboard-animations-in-wpf.md
    │   │   ├── traversal-of-gwt-tree.comments.json
    │   │   └── traversal-of-gwt-tree.md
    │   ├── 09
    │   │   ├── c-yield.md
    │   │   ├── linkedlist-always-slower-than-a-list-in-c.comments.json
    │   │   ├── linkedlist-always-slower-than-a-list-in-c.md
    │   │   ├── mongoid-utc-times.md
    │   │   ├── rvm-is-a-must-for-the-rubyist.md
    │   │   ├── three-ways-to-sort-a-list-of-objects-with-datetime-in-c.comments.json
    │   │   └── three-ways-to-sort-a-list-of-objects-with-datetime-in-c.md
    │   ├── 10
    │   │   ├── convert-a-csv-to-xml-using-c.comments.json
    │   │   ├── convert-a-csv-to-xml-using-c.md
    │   │   ├── silverlight-4-and-comactivex-integration.md
    │   │   └── using-linq-with-csv-files.md
    │   ├── 11
    │   │   ├── get-all-progid-on-system-for-com-automation.md
    │   │   ├── grep-for-two-or-more-expressions.md
    │   │   └── iterate-over-files-in-bash.md
    │   └── 12
    │       ├── forcing-single-instance-for-wpf.md
    │       └── including-more-than-one-resourcedictionary-in-your-xaml.md
    ├── 2011
    │   ├── 01
    │   │   ├── feedzirra-and-rails-3.comments.json
    │   │   ├── feedzirra-and-rails-3.md
    │   │   └── memcached-alternative-for-c-net.md
    │   ├── 02
    │   │   ├── streamwriter-share-read-access-in-another-process.md
    │   │   ├── wpf-application-exception-handling.comments.json
    │   │   └── wpf-application-exception-handling.md
    │   ├── 03
    │   │   ├── datagrid-not-found-in-silverlight-4.comments.json
    │   │   ├── datagrid-not-found-in-silverlight-4.md
    │   │   ├── migrating-from-tunnelblick-on-os-x-to-openvpn-gui-client-on-windows.comments.json
    │   │   └── migrating-from-tunnelblick-on-os-x-to-openvpn-gui-client-on-windows.md
    │   ├── 04
    │   │   ├── locate-and-updatedb-on-os-x-snow-leopard.md
    │   │   ├── quick-json-serializationdeserialization-in-c.comments.json
    │   │   └── quick-json-serializationdeserialization-in-c.md
    │   ├── 05
    │   │   ├── installing-mongodb-1-8-1-on-ubuntu-10-04-lts.comments.json
    │   │   ├── installing-mongodb-1-8-1-on-ubuntu-10-04-lts.md
    │   │   └── linear-regression-in-c-sharp-least-squares.md
    │   ├── 07
    │   │   ├── disable-sprockets-for-rails-in-development-mode.md
    │   │   ├── missing-dockpanel-add-dockpanel-for-silverlight-4-or-silverlight-5.md
    │   │   ├── open-a-new-tab-in-terminal-app-in-the-same-directory-on-mac-os-x.comments.json
    │   │   ├── open-a-new-tab-in-terminal-app-in-the-same-directory-on-mac-os-x.md
    │   │   └── printing-to-a-postscript-file-from-delphic-builder.md
    │   ├── 08
    │   │   ├── fridaythe13th-the-best-json-parser-for-silverlight-and-net.comments.json
    │   │   ├── fridaythe13th-the-best-json-parser-for-silverlight-and-net.md
    │   │   ├── using-mongoid-with-rspec.comments.json
    │   │   └── using-mongoid-with-rspec.md
    │   ├── 10
    │   │   ├── a-for-loop-conversion-from-javascript-to-coffeescript.md
    │   │   ├── a-node-js-experiment-thinking-asynchronously-recursion-calculate-file-size-directory.comments.json
    │   │   ├── a-node-js-experiment-thinking-asynchronously-recursion-calculate-file-size-directory.md
    │   │   ├── automating-generation-ios-push-notification-certificates.comments.json
    │   │   ├── automating-generation-ios-push-notification-certificates.md
    │   │   ├── automating-the-mac-os-x-keychain-app-with-ruby.comments.json
    │   │   ├── automating-the-mac-os-x-keychain-app-with-ruby.md
    │   │   └── modifying-node_path-for-node-jsnpmnvm.md
    │   ├── 11
    │   │   ├── buzz-a-node-js-command-line-program-to-keep-your-app-running-indefinitely-like-the-program-forever.md
    │   │   ├── synchronous-file-copy-in-node-js.comments.json
    │   │   ├── synchronous-file-copy-in-node-js.md
    │   │   ├── using-ocmock-with-mac-os-x-lion-xcode-4-to-mock-and-unit-test-cocoa-desktop-apps.comments.json
    │   │   └── using-ocmock-with-mac-os-x-lion-xcode-4-to-mock-and-unit-test-cocoa-desktop-apps.md
    │   └── 12
    │       └── node-js-exec-like-ruby-exec-and-writing-a-node-js-native-add-on-module.md
    └── 2012
        ├── 01
        │   ├── comparing-two-javascript-objects.md
        │   └── installing-node-js-on-ubuntu-10-4-lts.md
        ├── 03
        │   ├── submittingposting-files-and-fields-to-an-http-form-using-c-net.comments.json
        │   └── submittingposting-files-and-fields-to-an-http-form-using-c-net.md
        ├── 04
        │   └── quick-and-dirty-screen-scraping-with-node-js-using-request-and-cheerio.md
        ├── 05
        │   ├── thinking-asynchronously-in-coffeescriptjavascript-loops-and-callbacks.md
        │   ├── why-do-all-the-great-node-js-developers-hate-coffeescript.comments.json
        │   └── why-do-all-the-great-node-js-developers-hate-coffeescript.md
        ├── 06
        │   ├── nextflow-sane-coffeescript-flow-control.comments.json
        │   └── nextflow-sane-coffeescript-flow-control.md
        └── 08
            ├── batchflow-easily-batch-process-collections-sequentially-or-in-parallel-in-javascriptnode-js.md
            ├── like-unix-expect-automate-command-line-programs-in-node-js-with-suppose.comments.json
            └── like-unix-expect-automate-command-line-programs-in-node-js-with-suppose.md
```

Let's look at the output of one of them...

```markdown
<!--
author: JP
publish: Fri Aug 03 2012 16:09:40 GMT-0500 (CDT)
status: publish
type: post
link: https://procbits.wordpress.com/2012/08/03/like-unix-expect-automate-command-line-programs-in-node-js-with-suppose/
tags: JavaScript, Node.js
-->

Like Unix Expect: Automate Command Line Programs in Node.js with Suppose
========================================================================

Have you ever heard of the command line program
[expect](http://en.wikipedia.org/wiki/Expect)? Basically, expect allows
you to automate command line programs.
[suppose](https://github.com/jprichardson/node-suppose) is a
programmable Node.js module that allows the same behavior.

Why would you do this? Maybe you want to automate a ssh session? Or,
maybe you want to test the external interface of on of your Node.js
```





License
-------

(MIT License)

Copyright 2012, JP Richardson  <jprichardson@gmail.com>


