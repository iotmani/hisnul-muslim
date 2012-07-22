Ext.define("HisnulMuslim.view.Main", {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'HisnulMuslim.view.ChaptersView',
        'HisnulMuslim.store.DuasStore'
    ],

    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Chapters',
                iconCls: 'bookmarks',
                layout: 'fit',
                items: [{ xtype: 'chaptersview' }]
            },
            {
                //TODO make this search, or include search form within chapters view
                title: 'Duas',
                iconCls: 'search',
                layout: 'fit',

                //TODO make this navigationview also? search takes to found items, back to search
                // Each tab has a titlebar and list for content
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'List of duas'
                    },
                    {
                        xtype: 'list',
                        store: {xtype: 'duasstore'},
                        grouped: 'true',
                        itemTpl: '<div align="right"><strong>{arabic}</strong></div>'
                    }                
                ]
            }
        ]
    }
});
