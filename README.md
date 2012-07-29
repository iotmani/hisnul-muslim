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
*   0.8:
    - Add full search of meaning/chapters
      * Let user select including arabic/transliteration, though a bit pointless for most users
    - Move store data to json file
    - remove global parts
    - Add better load screen, splash screen instead?
    - Add Themes of duaas for cross-ref
*   0.7:
    - Add full json content and possibly media too
    - Add chapter search on navigation bar
    - Native packaging
    - Publish on Android Market, ask Mohammed to publish on AppStore
*   0.6:  < -------- You are here
    - Add pushing navigationview to view duas attached
        - Add a ChapterContent view or adjust duasList
        - Stuck at getting controller to grab taps
            Good sencha examples, e.g. Contacts
    - Add About page instead of Search
    + separate list view files, 
    + navview, 
    + use separate model file
    + separate store file
    + move to GIT, 
*   0.5 has working duas list display after adding 'fit' to tab item layout

Todo
-----
-   clicking on title pushes duas view for that title
-   Remove tabs panel for now?
      Views
          main tabs panel {
              chapters tab
                  (no titlebar)
                  nav.view:
                      List chapters (separate file)
                      > List duas in selected chapter (separate file)
              bookmarks tab (separate file)
              search tab (separate file)
              About tab
          }
      Controller
          Main (only one can control all)
-   How to add json chapters file with duas within? as object?

View
----
-   Home tab: list of chapters, then html of all duas in it once one is picked
-   Themes tab: tags, a dua should support more than one tag so many-to-many really
-   Search, select checkboxes of what Dua fields to search
-   Skin?

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
