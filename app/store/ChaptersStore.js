Ext.define('HisnulMuslim.store.ChaptersStore', {
    extend: 'Ext.data.Store',
    xtype: 'chaptersstore',

    requires:[
        'HisnulMuslim.model.Chapter'
    ],

    config: {
        model: 'HisnulMuslim.model.Chapter',
        sorters: 'id',
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

    }
});
