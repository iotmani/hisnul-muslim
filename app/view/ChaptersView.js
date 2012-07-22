Ext.define('HisnulMuslim.view.ChaptersView', {
    extend: 'Ext.NavigationView',
    requires: [
        'HisnulMuslim.store.ChaptersStore'
    ],
    xtype: 'chaptersview',

    config: {
        items: [{
            title: 'Select a chapter',
            xtype: 'list',
            itemTpl: '<div><strong>{title}</strong></div>',

            model: 'HisnulMuslim.model.Chapter',
            store: {xtype: 'chaptersstore'},

            //TODO tap on item, pushes new list of duas under given chapter as per association
        }]
    }
});
