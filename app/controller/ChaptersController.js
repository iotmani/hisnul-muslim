Ext.define('HisnulMuslim.controller.ChaptersController', {
    extend: 'Ext.app.controller',

    config: {

        refs: {
            chaptersview: 'chapterslist'
        },

        control: {
            //TODO capitals?
            'chapterslist': {
                itemtap: 'onViewChapter',
            }
        }
        //TODO once moved title to its own file - refs: 'duasList'
        //TODO refs ChaptersView list
        //TODO listen to tap and push chaptersView to show duas list, each with transliteration etc
    },

    onViewChapter: function(view, index, target, record, e) {
        //TODO Push to ChaptersPanel a newly instantiated chapterContent panel with duaas under given chapter id
        console.log("onViewChapter() called");
        console.log("onViewChapter(" + id + ") called");
    }
});
