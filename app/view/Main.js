Ext.define("HisnulMuslim.view.Main", {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'HisnulMuslim.view.ChaptersList',
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
                title: 'About',
                iconCls: 'user',
                scrollable: true,
                styleHtmlContent: true,
                items: {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'About'
                },

                html: [
                        '<center><h2>Hisnul Muslim Sencha</h2>Created by Islam Otmani.',
                        ,
                        "The source-code available at:",
                        '<a target="_blank" href="https://github.com/iotmani/hisnul-muslim">https://github.com/iotmani/hisnul-muslim</a>',
                        ,
                        "Please make Du'a if you found this app userful.",
                        ,
                        'Resources used to make this app were obtained from the following sources:',
                        '<a target="_blank" href="http://aa.trinimuslims.com/f20/hisn-al-muslim-text-translation-transliterations-audio-5390/">http://aa.trinimuslims.com/f20/hisn-al-muslim-text-translation-transliterations-audio-5390/</a>',
                        '<a target="_blank" href="http://www.hisnulmuslim.com/">http://www.hisnulmuslim.com/</a><center>'
                ].join('<br />')
            }
        ]
    }
});
