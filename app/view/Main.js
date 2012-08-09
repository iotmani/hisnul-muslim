Ext.define("HisnulMuslim.view.Main", {
    extend: 'Ext.tab.Panel',

    requires: [
        'HisnulMuslim.view.ChaptersList',
        'HisnulMuslim.view.About',
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
                    items: {xtype: 'chapterslist'},
                }
            },
            {
                // About screen
                //TODO Change content to instructions then short about
                xtype: 'about'
            }
        ]
    }
});
