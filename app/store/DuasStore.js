Ext.create('Ext.data.Store', {
    requires: [
        'HisnulMuslim.model.Dua'
    ],
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
