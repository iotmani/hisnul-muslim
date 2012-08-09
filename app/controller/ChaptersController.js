Ext.define('HisnulMuslim.controller.ChaptersController', {
    extend: 'Ext.app.Controller',

    requires: [
        'HisnulMuslim.model.Dua',
        'HisnulMuslim.model.Chapter',
        'HisnulMuslim.view.ChaptersList',
        'HisnulMuslim.view.DuasList'
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

        record.duas().each(function(dua) {
            console.debug("Loaded dua id: " + dua.get('id'));
        });

        //TODO should only call setChapter(record) and not know rest about title here
        //      duasView.setChapter(record);
        this.view = Ext.create('HisnulMuslim.view.DuasList', {
            chapter: record,
            title: record.get('title')
        });

        view.getParent().push(this.view);

    }

});
