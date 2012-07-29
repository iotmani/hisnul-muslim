Ext.define('HisnulMuslim.view.ChaptersList', {
    extend: 'Ext.List',
    xtype: 'chapterslist',

    requires: [
        'HisnulMuslim.store.ChaptersStore'
    ],

    config: {
            title: 'Select a chapter',
            itemTpl: '{id} {title}',
            store: 'ChaptersStore'
            //TODO tap on item, pushes new list of duas under given chapter as per association
    },

    //TODO why adding this makes list content disappear??
    //launch: function() {
    //    console.debug('initd ChaptersList');
    //},

    showshow: function() {
        console.debug('list item tapped');
    }
});
