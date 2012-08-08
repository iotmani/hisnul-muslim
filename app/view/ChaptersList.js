Ext.define('HisnulMuslim.view.ChaptersList', {
    extend: 'Ext.List',
    xtype: 'chapterslist',

    requires: [
        'HisnulMuslim.store.ChaptersStore'
    ],

    config: {
        id: 'ChaptersListID',
        title: 'Select Chapter',
        itemTpl: '{id} {title}',
        store: 'ChaptersStore'
    }

});
