Ext.define('HisnulMuslim.store.ChaptersStore', {
    extend: 'Ext.data.Store',
    requires:[
        'HisnulMuslim.model.Chapter'
    ],
    config: {
        model: 'HisnulMuslim.model.Chapter',
        sorters: 'title',
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
