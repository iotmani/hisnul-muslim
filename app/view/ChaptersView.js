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

            //TODO  model, store: 'HisnulMuslim.store.ChaptersStore'
            model: 'HisnulMuslim.model.Chapter',
            data:[
                {
                    id: '1',
                    title: 'When waking up'
                },
                {
                    id: '5',
                    title: 'When wearing a garment'
                }
            ]

            //TODO tap on item, pushes new list of duas under given chapter as per association
        }]
    }
});
