Ext.define('HisnulMuslim.model.Chapter', {
    extend: 'Ext.data.Model',
    config:{
        fields: ['id', 'title'],
        hasMany: 'HisnulMuslim.model.Dua'
   }
});
