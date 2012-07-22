Ext.define('HisnulMuslim.store.ChaptersStore', {
    extend: 'Ext.data.Store',
    requires:[
        'HisnulMuslim.model.Chapter'
    ],
    xtype: 'chaptersstore',
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
