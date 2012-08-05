Ext.define('HisnulMuslim.store.ChaptersStore', {
    extend: 'Ext.data.Store',
    xtype: 'chaptersstore',

    requires:[
        'HisnulMuslim.model.Chapter'
    ],

    config: {
        model: 'HisnulMuslim.model.Chapter',
        sorters: 'id',
        data:[
            {
                id: '1',
                title: 'When waking up',
                duas: [
                    {
                         id: '1', chapter: 'When waking up', theme: 'Cleanliness',
                         arabic: 'الحَمْـدُ لِلّهِ الّذي أَحْـيانا بَعْـدَ ما أَماتَـنا وَإليه النُّـشور', 
                         meaning: 'All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.',
                         transliteration: 'Al-hamdu li-l-lâhi l-ladhî ahyânâ bacda mâ amâtanâ wa ilayhi n-nushûr.',
                         audio: 'audio/1.mp3'
                    },
                    {
                        id: '2', chapter: 'When waking up', theme: 'Cleanliness', //TODO right theme
                        arabic: 'لا إلهَ إلاّ اللّهُ وَحْـدَهُ لا شَـريكَ له، لهُ المُلـكُ ولهُ الحَمـد، وهوَ على كلّ شيءٍ قدير، سُـبْحانَ اللهِ، والحمْـدُ لله ، ولا إلهَ إلاّ اللهُ واللهُ أكبَر، وَلا حَولَ وَلا قوّة إلاّ باللّهِ العليّ العظيم , رَبِّ اغْفرْ لي',
                        meaning: 'None has the right to be worshipped except Allah, alone without associate, to Him belongs sovereignty and praise and He is over all things wholly capable. How perfect Allah is, and all praise is for Allah, and none has the right to be worshipped except Allah, Allah is the greatest and there is no power nor might except with Allah, The Most High, The Supreme. O my Lord forgive me.',
                        transliteration: 'Lâ ilâha illâ l-lâhu wahdahu lâ sharîka lahu, lahu-l-mulku wa lahu lhamdu, wa huwa calâ kulli shay’in qadîr. Subhâna l-lâhi, wa-l-hamdu li-l-lâhi, wa lâ ilâha illa l-lâhu, wa l-lâhu akbaru, wa lâ hawla wa lâ quwwata illa bi-l-lâhi-l-caliyyi-l-cazîm. Rabbi ghfir lî.',
                        audio: 'audio/2.mp3'
                    },
                    {
                        id: '3', chapter: 'When waking up', theme: 'Cleanliness', //TODO right theme
                        arabic: 'الحمدُ للهِ الذي عافاني في جَسَدي وَرَدّ عَليّ روحي وَأَذِنَ لي بِذِكْرِه',
                        meaning: 'All praise is for Allah who restored to me my health and returned my soul and has allowed me to remember Him.',
                        transliteration: 'Al hamdu li-l-lâhi l-ladhî câfânî fî jasadî wa radda calayya rûhî, wa adhina lî bi-dhikrihi.',
                        audio: 'audio/3.mp3'
                    },
                    {
                        id: '4', chapter: 'When waking up', theme: 'Cleanliness', //TODO right theme
                        arabic: "إِنَّ فِي خَلْقِ السَّمَوَاتِ وَالأَرْضِ وَاخْتِلاَفِ اللَّيْلِ وَالنَّهَارِ لآيَاتٍ لأُوْلِي الألْبَابِ {190} الَّذِينَ يَذْكُرُونَ اللهَ قِيَامًا وَقُعُودًا وَعَلَىَ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَوَاتِ وَالأَرْضِ رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ {191} رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ {192} رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلإِيمَانِ أَنْ ءامِنُواْ بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ {193} رَبَّنَا وَءاتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَادَ {194} فَاسْتَجَابَ لَهُمْ رَبُّهُمْ أَنِّي لاَ أُضِيعُ عَمَلَ عَامِلٍ مِّنكُم مِّن ذَكَرٍ أَوْ أُنثَى بَعْضُكُم مِّن بَعْضٍ فَالَّذِينَ هَاجَرُواْ وَأُخْرِجُواْ مِن دِيَارِهِمْ وَأُوذُواْ فِي سَبِيلِي وَقَاتَلُواْ وَقُتِلُواْ لأُكَفِّرَنَّ عَنْهُمْ سَيِّئَاتِهِمْ وَلأُدْخِلَنَّهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الأَنْهَارُ ثَوَابًا مِّن عِندِ اللهِ وَاللهُ عِندَهُ حُسْنُ الثَّوَابِ {195} لاَ يَغُرَّنَّكَ تَقَلُّبُ الَّذِينَ كَفَرُواْ فِي الْبِلاَدِ {196} مَتَاعٌ قَلِيلٌ ثُمَّ مَأْوَاهُمْ جَهَنَّمُ وَبِئْسَ الْمِهَادُ {197} لَكِنِ الَّذِينَ اتَّقَوْاْ رَبَّهُمْ لَهُمْ جَنَّاتٌ تَجْرِي مِن تَحْتِهَا الأَنْهَارُ خَالِدِينَ فِيهَا نُزُلاً مِّنْ عِندِ اللهِ وَمَا عِندَ اللهِ خَيْرٌ لِّلأَبْرَارِ {198} وَإِنَّ مِنْ أَهْلِ الْكِتَابِ لَمَن يُؤْمِنُ بِاللهِ وَمَا أُنزِلَ إِلَيْكُمْ وَمَآ أُنزِلَ إِلَيْهِمْ خَاشِعِينَ للهِ لاَ يَشْتَرُونَ بِآيَاتِ اللهِ ثَمَنًا قَلِيلاً أُوْلَئِكَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ إِنَّ اللهَ سَرِيعُ الْحِسَابِ {199} يَا أَيُّهَا الَّذِينَ ءامَنُواْ اصْبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَاتَّقُواْ اللهَ لَعَلَّكُمْ تُفْلِحُونَ {200}",
                        meaning: 'From Verse III,190 till the end of the chapter "Al Imran".',

                        transliteration: ' Inna fî khalqi s-samâwâti wa-l-ardi wa khtilâfi l-layli wa n-nahâri la-âyâtin li-ûli-l-albâb. Al-ladhîna yadhkurûna l-lâha qiyâman wa qucûdan wa calâ junûbihim, wa yatafakkarûna fî khalqi s-samâwâti wa-l-ardi, rabbanâ ! mâ khalaqta hâdhâ bâtilan subhânaka fa-qinâ cadhâba n-nâr.\r\n'+
                            'Rabbanâ ! Innaka man tudkhili n-nâra fa-qad akhzaytahu wa mâ li-zâlimîna min ansâr.\r\n' +
                            'Rabbanâ ! Innanâ samicnâ munâdiyan yunâdî li-l-îmâni an âminû bi-rabbikum fa-âmannâ.\r\n' +
                            "Rabbanâ ! Fa-ghfir lanâ dhunûbanâ wa kaffir cannâ sayyi'âtinâ wa tawaffanâ maca-l-abrâr.\r\n" +
                            'Rabbanâ ! Wa âtinâ mâ wacadtanâ calâ rusulika wa lâ tukhzinâ yawma-l-qiyâmati, innaka lâ tukhlifu-l-mîcâd.\r\n' +
                            "Fa-stajâba lahum rabbuhum annî lâ udîcu camala câmilin minkum m-min dhakarin aw unthâ, bacdukum min bacdin, fa-l-ladhîna hâjarû wa ukhrijû min diyârihim wa ûdhû fî sabîlî wa qâtalû wa qutilû, la-ukaffiranna canhum sayyi'âtihim wa la-udkhilannahum jannâtin tajrî min tahtihâ-l-anhâru, thawâban min cindi l-lâhi, wa l-lâhu cindahu husnu-ththawâb.\r\n" +
                            "Lâ yaghurrannaka taqallubu l-ladhîna kafarû fî-l-bilâd, matâc qalîlun, thumma ma'wâhum jahannamu wa bi'sa-l-mihâd.\r\n" +
                            "Lâkini l-ladhîna t-taqaw rabbahum lahum jannâtun tajrî min tahâ-l-anhâru khâlidîna fîhâ, nuzulan m-min cindi l-lâhi wa mâ cinda l-lâhi khayrun li-l-abrâr.\r\n" +
                            "Wa inna min ahli-l-kitâbi la-man yu'minu bi-l-lâhi wa mâ unzila ilaykum wa mâ unzila ilayhim, khâshicîna li-l-lâhi, lâ yashtarûna bi-âyâti l-lâhi thamanan qalîlan. Uwlâ-ika lahum ajruhum cinda rabbihim, inna l-l^haa sarîc-l-hisâb.\r\n" +
                            "Yâ ayyuhâ l-ladhîna âmanû-sbirû wa sâbirû wa râbitû wa t-taqû l-lâha lacallakum tuflihûn.",
                        audio: 'audio/4.mp3'
                    },
                    {
                        id: '5', chapter: 'When wearing a garment', theme: 'Cleanliness',
                        arabic: 'الحمدُ للهِ الّذي كَساني هذا (الثّوب) وَرَزَقَنيه مِنْ غَـيـْرِ حَولٍ مِنّي وَلا قـوّة', 
                        meaning: 'All Praise is for Allah who has clothed me with this garment and provided it for me, with no power nor might from myself.',
                        transliteration: 'Al hamdu li-l-lâhi l-ladhî kasânî hadhâ th-thawbawa razaqanîhi min ghayri hawlin minnî wa lâ quwwatin.',
                        audio: 'audio/5.mp3'
                    }
                ] 
            },
            {
                id: '5',
                title: 'When wearing a garment',
                duas: [
                    {
                        id: '5', chapter: 'When wearing a garment', theme: 'Cleanliness',
                        arabic: '¿¿¿¿¿ ¿¿¿ ¿¿¿¿ ¿¿¿¿¿ ¿¿¿ (¿¿¿¿¿) ¿¿¿¿¿¿¿ ¿¿ ¿¿¿¿¿ ¿¿¿ ¿¿¿ ¿¿¿ ¿¿¿¿', //TODO
                        meaning: 'All Praise is for Allah who has clothed me with this garment and provided it for me, with no power nor might from myself.',
                        transliteration: 'Al hamdu li-l-lâhi l-ladhî kasânî hadhâ th-thawbawa razaqanîhi min ghayri hawlin minnî wa lâ quwwatin.',
                        audio: 'audio/5.mp3'
                    }
                ]
            }
        ]

    }
});
