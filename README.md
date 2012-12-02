Hisnul-Muslim
=============
Mobile application based on Hisnul Muslim duaas book.

Built using Sencha Touch supports iOS/Android/Chrome/Safari.

Instructions
------------
If you have a web-server, place this project inside and open index.html

Alternatively, make sure all other instances of Chrome are closed before.
Open in Chrome (or safari, i.e. webkit only) with the following parameters:
--disable-web-security --allow-file-access-from-files
Open the index.html page

- - - - 

Plan
====

Release
--------
*   0.9 (polishing features):
    - Bookmarks, local storage
    - Startup screen while loading HisnulMuslim
*   0.8 (improve performance and searching):
    - Settings tab: Filter (checkboxes) for displaying what info per Dua: Arabic, transliteration, sound, english
      - Persistent in local storage
    - Add full search of meaning/chapters
      - Use following guidelines:
            //    //TODO make this search, or include search form within chapters view
            //    title: 'Duas',
            //    iconCls: 'search',
            //    layout: 'fit',
            //    //TODO make this navigationview also? search takes to found items, back to search

      - Let user select including arabic/transliteration, though a bit pointless for most users
    - Experiment with keeping chapters list and chapters content in separate jSON files to speed up navigation. Test on iPod or Chrome Profiler
    - create duas list view if not already done (via another tap), set data, show it if not already shown (see kiva controller)
    - Move store data to json file
    - remove global parts
    - Add better load screen, splash screen instead? splash and then loading screen?
    - Add Themes of duaas for cross-ref
*   0.7 (get it published): < -------- You are here
    + Add full json content and possibly media too
    + Consider splitting json content with new lines where necessary, replace with <br /> when used
    + Fix "Abou..." shortening of titles (apple.css needed .x-innerhtml padding: 0 from .3em)
    - Did transliteration just break ?
    - Add missing information
    - Better separation between Arabic, English and Transliteration, currently only last has title
    - Add chapter name filter above list, must scroll up to find it
    - Native packaging, do on windows
    - Icon
    - Publish on Android Market, ask Mohammed to publish on AppStore
*   0.6 (finish main functionality):   < ---- done so far and below
    + Remove Search tab
    + Format selected chapter's duas in a list
    + Add a ChapterContent view or adjust duasList
        + Instantiate duas list view in controller (and add to viewport: Ext.Viewport.add(panel);) and push
            + see kiva/app/controller/Loans.js +50
        + Stuck at not being able to access associations despite being in data structure
          + Attempt to bring model and code from working dummySencha version
          + Bring it to app.js: launch()
    + Add pushing navigationview to view duas attached
    + Add About page instead of Search
    + separate list view files,
    + navview, 
    + use separate model file
    + separate store file
    + move to GIT, 
*   0.5 has working duas list display after adding 'fit' to tab item layout

Todo
-----
  - Getting error when packaging the apk:
    -> Must use OSX or Windows for packaging due to bug in Sencha.
    > ~/Dropbox/Projects/Hisnul/hisnul-muslim/sdk$ sencha package ../packagerModified.json 
    [ERROR] The current working directory (/home/compass/Dropbox/Projects/Hisnul/hisnul-muslim/sdk) is not a recognized Sencha SDK or application folder
    sh: 1: stbuild: not found
  - Model: separate chapters from duas content apart from their ids?
    - Search only uses duas
    - Cross referencing uses duas
    - However it's quite light to navigate from chapters to them and complex to add one by one for main screen
  - Views

        main tabs panel {
          chapters tab
              nav.view:
                  filter search on top?
                  List chapters (separate file)
                  > List duas in selected chapter (separate file)
                  Use Carousel to flick through? (in case short chapter)
          bookmarks tab (separate file)
          Search tab (separate file)
          Settings
          About tab
        }

View
----
Chapters list:
    - Use pagination for long list?
    - Use accordeon if small chapters?
Chapter content view:
    - Go to next/prev chapter without returning to list
    - Arabic on top formatted
    - Fast scrolling via chapter no
About
    - Smaller space between lines in About, title must fit one line and join "Hisnul-Muslim"
    - Add brief instructions and then git-hub for contributions info, can briefly mention HisnulMuslim.com and TrinidadMuslims as links
Other
    - Cross referencing using dua themes
    + Home tab: list of chapters, then html of all duas in it once one is picked
    - Themes tab: tags, a dua should support more than one tag so many-to-many really
    - Search, select radio button of what Dua field to search (meaning, transliteration or arabic; themes?)
    - UI skin in settings?

Resources
---------
*   Fiddle link: http://www.senchafiddle.com/#VEPum
  
*   audio obtained from swf executable found by Tehmur, high quality and slow pronounciation
*   All text from: http://www.hisnulmuslim.com/index-page-liste-lang-en.html
*    - resource of hisnulmuslim.com has missing pages, so must get/type from elsewhere e.g. 1st link
*   Themes from: http://aa.trinimuslims.com/f20/hisn-al-muslim-text-translation-transliterations-audio-5390/
  
*   Grouped list kitchen sink: http://dev.sencha.com/deploy/touch/examples/production/kitchensink/#demo/list
*   First app guide has list e.g.: http://docs.sencha.com/touch/2-0/#!/guide/first_app


Note from Sencha
=================
Please don't forget to add sencha touch CSS and JavaScript files to the app folder.
Put sencha-touch.css inside resources/css/ and put sencha-touch-all-debug.js inside resources/libs/

