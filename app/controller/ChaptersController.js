Ext.define('HisnulMuslim.controller.ChaptersController', {
    extend: 'Ext.app.Controller',

    requires: [
        'HisnulMuslim.model.Dua',
        'HisnulMuslim.model.Chapter',
        'HisnulMuslim.view.ChaptersList'
    ],

    config: {
        control: {
            'chapterslist': {
                itemtap: 'onViewChapter'
            }
        }
        //TODO listen to tap and push chaptersView to show duas list, each with transliteration etc
    },

    onViewChapter: function(view, index, target, record) {
        // Push to ChaptersPanel a newly instantiated ChapterContent panel with duaas under given chapter id
        console.log("onViewChapter(" + index + " " + record.get("title") + ") called in controller");

        record.duas().each(function(dua){
            console.debug("Dua meaning: " + dua.get('meaning'));
        });

        view.getParent().push({
            title: record.get('title'),

            //TODO list all items in ChaptersModel, filtered by record id or record title
            styleHtmlContent: true,
            html: '<h1>ha</h1>'
        });        

    }

});
