Ext.define('HisnulMuslim.view.DuasList', {
    extend: 'Ext.List',
    xtype: 'duaslist',
    requires: [
        'HisnulMuslim.model.Chapter'
    ],

    config: {
        xtype: 'list',
        chapter: null,
        itemTpl: 
        [
            '<div align="right"><big>{arabic}</big></div>',
            '{meaning}<br />',
            '<b>Transliteration: </b><br />{transliteration}'
        ].join('')
    },

    updateChapter: function(newChapter) {
        this.setStore(newChapter.duas());
        console.log("passed chapter:" + newChapter.get('title'));
        this.title = newChapter.get('title'); //TODO too late, need to update parent navigation view?
        //TODO How to set navigationview title? this.getParent().title(newChapter.get('title'));
    }

});
