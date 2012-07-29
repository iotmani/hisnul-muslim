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
                        store: 'DuasStore',
                        grouped: 'true',
                        itemTpl: '<div align="right"><strong>{arabic}</strong></div>'
                    }
                ]
            },
            {
                title: 'About',
                iconCls: 'user',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'About'
                    },
                    {
                        xtype: 'panel',
                        //TODO scrollable: true,
                        html: [
                                '<p>Created by Islam Otmani',
                                ,
                                "The source-code available at:",
                                'https://github.com/iotmani/hisnul-muslim',
                                ,
                                "Please make Du'a if you found this app userful",
                                ,
                                'Resources used to make this app were obtained from the following sources:',
                                'http://aa.trinimuslims.com/f20/hisn-al-muslim-text-translation-transliterations-audio-5390/',
                                'http://www.hisnulmuslim.com/</p>'
                        ].join('<br />')
                    }
                ]
            }
        ]
    }
});
