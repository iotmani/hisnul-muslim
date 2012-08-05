Ext.define('HisnulMuslim.view.About', {
    extend: 'Ext.Panel',
    xtype: 'about',

    config: {
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
});
