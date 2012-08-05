Ext.define("HisnulMuslim.view.Main", {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'HisnulMuslim.view.ChaptersList',
        'HisnulMuslim.view.About',
        'HisnulMuslim.store.DuasStore',
        'Ext.navigation.View'
    ],

    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Chapters',
                iconCls: 'bookmarks',
                layout: 'fit',
                items: {
                    xtype: 'navigationview',
                    id: 'ChaptersNavigationView',
                    items: {xtype: 'chapterslist'},
                    onItemDisclosure: function(record, item, index, e) {
                        console.debug("list tapped disclosure navview");
                        //TODO move to navigationview:
                        //record.push({
                        //    title: 'Second',
                        //    html: '<h1>ha</h1>'
                        //});
                    }
                }
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
                        store: 'DuasStore',
                        grouped: 'true',
                        itemTpl: '<div align="right"><strong>{arabic}</strong></div>'
                    }
                ]
            },
            {
                xtype: 'about'
            }
        ]
    }
});
