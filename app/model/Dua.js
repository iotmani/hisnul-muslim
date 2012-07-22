Ext.define('HisnulMuslim.model.Dua', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'chapter', 'theme', 'arabic', 'meaning', 
                 'transliteration', 'audio'
                ],
        belongsTo: 'Chapter'
    }
    
});