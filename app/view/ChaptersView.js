Ext.define('HisnulMuslim.view.ChaptersView', {
    extend: 'Ext.NavigationView',
    requires: [
        'HisnulMuslim.view.ChaptersList'
    ],

    xtype: 'chaptersview',
    config: {
            items: [{xtype: 'chapterslist'}]
        }

});
