//Ext.create('Ext.data.Store', {
//    requires:[
//        'HisnulMuslim.model.Chapter'
//    ],
//    id: 'HisnulMuslim.store.ChaptersStore',
//    model: 'HisnulMuslim.model.Chapter',
//    sorters: 'id',
//    data: [
//        {
//            id: '1',
//            title: 'When waking up'
//        },
//        {
//            id: '5',
//            title: 'When wearing a garment'
//        }
//    ]
//});
//

Ext.create('Ext.data.Store', {
    requires: [
        'HisnulMuslim.model.Dua'
    ],
    id: 'HisnulMuslim.store.DuasStore',
    model: 'HisnulMuslim.model.Dua',
    sorterts: 'chapter',
    grouper: 'chapter',
    
    /* Add duas here for now, to import as json file later */
    data: [
        {
            id: '1', chapter: 'When waking up', theme: 'Cleanliness',
             arabic: 'الحَمْـدُ لِلّهِ الّذي أَحْـيانا بَعْـدَ ما أَماتَـنا وَإليه النُّـشور', 
             meaning: 'All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.',
             transliteration: 'Al-hamdu li-l-lâhi l-ladhî ahyânâ bacda mâ amâtanâ wa ilayhi n-nushûr.',
             audio: 'audio/1.mp3'
        },
        
        {
            id: '5', chapter: 'When wearing a garment', theme: 'Cleanliness',
            arabic: 'الحمدُ للهِ الّذي كَساني هذا (الثّوب) وَرَزَقَنيه مِنْ غَـيـْرِ حَولٍ مِنّي وَلا قـوّة', 
            meaning: 'All Praise is for Allah who has clothed me with this garment and provided it for me, with no power nor might from myself.',
            transliteration: 'Al hamdu li-l-lâhi l-ladhî kasânî hadhâ th-thawbawa razaqanîhi min ghayri hawlin minnî wa lâ quwwatin.',
            audio: 'audio/5.mp3'}
        ]
});

Ext.define("HisnulMuslim.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        // 'HisnulMuslim.store.DuasStore',
        'Ext.TitleBar',
        'Ext.dataview.List',
        'HisnulMuslim.view.ChaptersView'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Chapters',
                iconCls: 'bookmarks',
                layout: 'fit',
                items: [
                    { xtype: 'chaptersview' }
                ]
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
                        store: 'HisnulMuslim.store.DuasStore',
                        grouped: 'true',
                        itemTpl: '<div align="right"><strong>{arabic}</strong></div>'
                    }                
                ]
            }
        ]
    }
});
