/* #PRODUIRE{fond=javascript/porte_plume_start.js,lang=fr,hash=1a7420cc2a415f43dbe59f18f1a631ee}
   md5:e00abe61b24bfecc445e569a5cc284fc */



barre_outils_edition = {"nameSpace":"edition","previewAutoRefresh":false,"onEnter":{"keepDefault":false,"selectionType":"return","replaceWith":"\n"}
,"onShiftEnter":{"keepDefault":false,"replaceWith":"\n_ "}
,"onCtrlEnter":{"keepDefault":false,"replaceWith":"\n\n"}
,"markupSet":[{"name":"Transformer en {{{intertitre}}}","key":"H","className":"outil_header1","openWith":"\n{{{","closeWith":"}}}\n","selectionType":"line","dropMenu":[{"id":"intertitre","name":"Transformer en {{{intertitre}}}","className":"outil_intertitre1","openWith":"\n{{{","closeWith":"}}}\n","display":true,"selectionType":"line"}
,{"id":"intertitre2","name":"Transformer en {{{**intertitre niveau deux}}}","className":"outil_intertitre2","openWith":"\n{{{**","closeWith":"}}}\n","display":true,"selectionType":"line"}
,{"id":"intertitre3","name":"Transformer en {{{***intertitre niveau trois}}}","className":"outil_intertitre3","openWith":"\n{{{***","closeWith":"}}}\n","display":true,"selectionType":"line"}
,{"id":"alignerdroite","name":"[/Aligne à droite/] le paragraphe","className":"outil_alignerdroite","openWith":"\n[/","closeWith":"/]\n","display":true,"selectionType":"line"}
,{"id":"alignergauche","name":"[!Aligne à gauche !] le paragraphe","className":"outil_alignergauche","openWith":"\n[!","closeWith":"!]\n","display":true,"lang":["ar","fa"]
,"selectionType":"line"}
,{"id":"cadretexte","name":"[(Encadrer)] le paragraphe","className":"outil_cadretexte","openWith":"\n[(","closeWith":")]\n","display":true,"selectionType":"line"}
,{"id":"barre_cadre","name":"Placer dans une <cadre>zone de saisie de texte</cadre>","className":"outil_barre_cadre","openWith":"\n<cadre>","closeWith":"</cadre>\n","display":true,"selectionType":"line"}
]
}
,{"name":"Mettre en {{gras}}","key":"B","className":"outil_bold","replaceWith":function(h){ return espace_si_accolade(h, '{{', '}}');},"selectionType":"word","dropMenu":[{"id":"italic","name":"Mettre en {italique}","key":"I","className":"outil_italic","replaceWith":function(h){ return espace_si_accolade(h, '{', '}');},"display":true,"selectionType":"word"}
,{"id":"petitescapitales","name":"Mettre le texte en <sc>petites capitales</sc>","className":"outil_petitescapitales","openWith":"<sc>","closeWith":"</sc>","display":true,"selectionType":"word"}
,{"id":"stroke_through_et","name":"<del>Barrer</del> le texte","className":"outil_stroke_through_et","openWith":"<del>","closeWith":"</del>","display":true,"selectionType":"word"}
,{"id":"miseenevidence","name":"Mettre le texte en [*évidence*]","className":"outil_miseenevidence","openWith":"[*","closeWith":"*]","display":true,"selectionType":"word"}
,{"id":"miseenevidence2","name":"Mettre le texte en [**évidence*] (2e couleur)","className":"outil_miseenevidence2","openWith":"[**","closeWith":"*]","display":true,"selectionType":"word"}
,{"id":"exposant","name":"Mettre le texte en <sup>exposant</sup>","className":"outil_exposant","openWith":"<sup>","closeWith":"</sup>","display":true,"selectionType":"word"}
,{"id":"indice","name":"Mettre le texte en <sub>indice</sub>","className":"outil_indice","openWith":"<sub>","closeWith":"</sub>","display":true,"selectionType":"word"}
,{"id":"barre_code","name":"Mettre en forme un <code>code informatique</code>","className":"outil_barre_code","openWith":"<code>","closeWith":"</code>","display":true,"selectionType":"word"}
]
}
,{"name":"Colorer le texte","className":"cs_couleur_texte","replaceWith":"","dropMenu":[{"id":"couleur_texte_noir","name":"Texte noir","className":"couleur_texte_noir","openWith":"[noir]","closeWith":"[/noir]","selectionType":"word","display":true}
,{"id":"couleur_texte_rouge","name":"Texte rouge","className":"couleur_texte_rouge","openWith":"[rouge]","closeWith":"[/rouge]","selectionType":"word","display":true}
,{"id":"couleur_texte_marron","name":"Texte marron","className":"couleur_texte_marron","openWith":"[marron]","closeWith":"[/marron]","selectionType":"word","display":true}
,{"id":"couleur_texte_vert","name":"Texte vert","className":"couleur_texte_vert","openWith":"[vert]","closeWith":"[/vert]","selectionType":"word","display":true}
,{"id":"couleur_texte_vert_olive","name":"Texte vert olive","className":"couleur_texte_vert_olive","openWith":"[vert olive]","closeWith":"[/vert olive]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_marine","name":"Texte bleu marine","className":"couleur_texte_bleu_marine","openWith":"[bleu marine]","closeWith":"[/bleu marine]","selectionType":"word","display":true}
,{"id":"couleur_texte_violet","name":"Texte violet","className":"couleur_texte_violet","openWith":"[violet]","closeWith":"[/violet]","selectionType":"word","display":true}
,{"id":"couleur_texte_gris","name":"Texte gris","className":"couleur_texte_gris","openWith":"[gris]","closeWith":"[/gris]","selectionType":"word","display":true}
,{"id":"couleur_texte_argent","name":"Texte argent","className":"couleur_texte_argent","openWith":"[argent]","closeWith":"[/argent]","selectionType":"word","display":true}
,{"id":"couleur_texte_vert_clair","name":"Texte vert clair","className":"couleur_texte_vert_clair","openWith":"[vert clair]","closeWith":"[/vert clair]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu","name":"Texte bleu","className":"couleur_texte_bleu","openWith":"[bleu]","closeWith":"[/bleu]","selectionType":"word","display":true}
,{"id":"couleur_texte_fuchia","name":"Texte fuchia","className":"couleur_texte_fuchia","openWith":"[fuchia]","closeWith":"[/fuchia]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_clair","name":"Texte bleu clair","className":"couleur_texte_bleu_clair","openWith":"[bleu clair]","closeWith":"[/bleu clair]","selectionType":"word","display":true}
,{"id":"couleur_texte_blanc","name":"Texte blanc","className":"couleur_texte_blanc","openWith":"[blanc]","closeWith":"[/blanc]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_azur","name":"Texte bleu azur","className":"couleur_texte_bleu_azur","openWith":"[bleu azur]","closeWith":"[/bleu azur]","selectionType":"word","display":true}
,{"id":"couleur_texte_beige","name":"Texte beige","className":"couleur_texte_beige","openWith":"[beige]","closeWith":"[/beige]","selectionType":"word","display":true}
,{"id":"couleur_texte_brun","name":"Texte brun","className":"couleur_texte_brun","openWith":"[brun]","closeWith":"[/brun]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_violet","name":"Texte bleu violet","className":"couleur_texte_bleu_violet","openWith":"[bleu violet]","closeWith":"[/bleu violet]","selectionType":"word","display":true}
,{"id":"couleur_texte_brun_clair","name":"Texte brun clair","className":"couleur_texte_brun_clair","openWith":"[brun clair]","closeWith":"[/brun clair]","selectionType":"word","display":true}
,{"id":"couleur_texte_rose_clair","name":"Texte rose clair","className":"couleur_texte_rose_clair","openWith":"[rose clair]","closeWith":"[/rose clair]","selectionType":"word","display":true}
,{"id":"couleur_texte_vert_fonce","name":"Texte vert fonce","className":"couleur_texte_vert_fonce","openWith":"[vert fonce]","closeWith":"[/vert fonce]","selectionType":"word","display":true}
,{"id":"couleur_texte_orange_fonce","name":"Texte orange fonce","className":"couleur_texte_orange_fonce","openWith":"[orange fonce]","closeWith":"[/orange fonce]","selectionType":"word","display":true}
,{"id":"couleur_texte_mauve_fonce","name":"Texte mauve fonce","className":"couleur_texte_mauve_fonce","openWith":"[mauve fonce]","closeWith":"[/mauve fonce]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_ciel","name":"Texte bleu ciel","className":"couleur_texte_bleu_ciel","openWith":"[bleu ciel]","closeWith":"[/bleu ciel]","selectionType":"word","display":true}
,{"id":"couleur_texte_or","name":"Texte or","className":"couleur_texte_or","openWith":"[or]","closeWith":"[/or]","selectionType":"word","display":true}
,{"id":"couleur_texte_ivoire","name":"Texte ivoire","className":"couleur_texte_ivoire","openWith":"[ivoire]","closeWith":"[/ivoire]","selectionType":"word","display":true}
,{"id":"couleur_texte_orange","name":"Texte orange","className":"couleur_texte_orange","openWith":"[orange]","closeWith":"[/orange]","selectionType":"word","display":true}
,{"id":"couleur_texte_lavande","name":"Texte lavande","className":"couleur_texte_lavande","openWith":"[lavande]","closeWith":"[/lavande]","selectionType":"word","display":true}
,{"id":"couleur_texte_rose","name":"Texte rose","className":"couleur_texte_rose","openWith":"[rose]","closeWith":"[/rose]","selectionType":"word","display":true}
,{"id":"couleur_texte_prune","name":"Texte prune","className":"couleur_texte_prune","openWith":"[prune]","closeWith":"[/prune]","selectionType":"word","display":true}
,{"id":"couleur_texte_saumon","name":"Texte saumon","className":"couleur_texte_saumon","openWith":"[saumon]","closeWith":"[/saumon]","selectionType":"word","display":true}
,{"id":"couleur_texte_neige","name":"Texte neige","className":"couleur_texte_neige","openWith":"[neige]","closeWith":"[/neige]","selectionType":"word","display":true}
,{"id":"couleur_texte_turquoise","name":"Texte turquoise","className":"couleur_texte_turquoise","openWith":"[turquoise]","closeWith":"[/turquoise]","selectionType":"word","display":true}
,{"id":"couleur_texte_jaune_paille","name":"Texte jaune paille","className":"couleur_texte_jaune_paille","openWith":"[jaune paille]","closeWith":"[/jaune paille]","selectionType":"word","display":true}
,{"id":"couleur_texte_jaune","name":"Texte jaune","className":"couleur_texte_jaune","openWith":"[jaune]","closeWith":"[/jaune]","selectionType":"word","display":true}
]
}
,{"name":"Colorer le fond","className":"cs_couleur_fond","replaceWith":"","dropMenu":[{"id":"couleur_fond_noir","name":"Fond noir","className":"couleur_fond_noir","openWith":"[fond noir]","closeWith":"[/fond noir]","selectionType":"word","display":true}
,{"id":"couleur_fond_rouge","name":"Fond rouge","className":"couleur_fond_rouge","openWith":"[fond rouge]","closeWith":"[/fond rouge]","selectionType":"word","display":true}
,{"id":"couleur_fond_marron","name":"Fond marron","className":"couleur_fond_marron","openWith":"[fond marron]","closeWith":"[/fond marron]","selectionType":"word","display":true}
,{"id":"couleur_fond_vert","name":"Fond vert","className":"couleur_fond_vert","openWith":"[fond vert]","closeWith":"[/fond vert]","selectionType":"word","display":true}
,{"id":"couleur_fond_vert_olive","name":"Fond vert olive","className":"couleur_fond_vert_olive","openWith":"[fond vert olive]","closeWith":"[/fond vert olive]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_marine","name":"Fond bleu marine","className":"couleur_fond_bleu_marine","openWith":"[fond bleu marine]","closeWith":"[/fond bleu marine]","selectionType":"word","display":true}
,{"id":"couleur_fond_violet","name":"Fond violet","className":"couleur_fond_violet","openWith":"[fond violet]","closeWith":"[/fond violet]","selectionType":"word","display":true}
,{"id":"couleur_fond_gris","name":"Fond gris","className":"couleur_fond_gris","openWith":"[fond gris]","closeWith":"[/fond gris]","selectionType":"word","display":true}
,{"id":"couleur_fond_argent","name":"Fond argent","className":"couleur_fond_argent","openWith":"[fond argent]","closeWith":"[/fond argent]","selectionType":"word","display":true}
,{"id":"couleur_fond_vert_clair","name":"Fond vert clair","className":"couleur_fond_vert_clair","openWith":"[fond vert clair]","closeWith":"[/fond vert clair]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu","name":"Fond bleu","className":"couleur_fond_bleu","openWith":"[fond bleu]","closeWith":"[/fond bleu]","selectionType":"word","display":true}
,{"id":"couleur_fond_fuchia","name":"Fond fuchia","className":"couleur_fond_fuchia","openWith":"[fond fuchia]","closeWith":"[/fond fuchia]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_clair","name":"Fond bleu clair","className":"couleur_fond_bleu_clair","openWith":"[fond bleu clair]","closeWith":"[/fond bleu clair]","selectionType":"word","display":true}
,{"id":"couleur_fond_blanc","name":"Fond blanc","className":"couleur_fond_blanc","openWith":"[fond blanc]","closeWith":"[/fond blanc]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_azur","name":"Fond bleu azur","className":"couleur_fond_bleu_azur","openWith":"[fond bleu azur]","closeWith":"[/fond bleu azur]","selectionType":"word","display":true}
,{"id":"couleur_fond_beige","name":"Fond beige","className":"couleur_fond_beige","openWith":"[fond beige]","closeWith":"[/fond beige]","selectionType":"word","display":true}
,{"id":"couleur_fond_brun","name":"Fond brun","className":"couleur_fond_brun","openWith":"[fond brun]","closeWith":"[/fond brun]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_violet","name":"Fond bleu violet","className":"couleur_fond_bleu_violet","openWith":"[fond bleu violet]","closeWith":"[/fond bleu violet]","selectionType":"word","display":true}
,{"id":"couleur_fond_brun_clair","name":"Fond brun clair","className":"couleur_fond_brun_clair","openWith":"[fond brun clair]","closeWith":"[/fond brun clair]","selectionType":"word","display":true}
,{"id":"couleur_fond_rose_clair","name":"Fond rose clair","className":"couleur_fond_rose_clair","openWith":"[fond rose clair]","closeWith":"[/fond rose clair]","selectionType":"word","display":true}
,{"id":"couleur_fond_vert_fonce","name":"Fond vert fonce","className":"couleur_fond_vert_fonce","openWith":"[fond vert fonce]","closeWith":"[/fond vert fonce]","selectionType":"word","display":true}
,{"id":"couleur_fond_orange_fonce","name":"Fond orange fonce","className":"couleur_fond_orange_fonce","openWith":"[fond orange fonce]","closeWith":"[/fond orange fonce]","selectionType":"word","display":true}
,{"id":"couleur_fond_mauve_fonce","name":"Fond mauve fonce","className":"couleur_fond_mauve_fonce","openWith":"[fond mauve fonce]","closeWith":"[/fond mauve fonce]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_ciel","name":"Fond bleu ciel","className":"couleur_fond_bleu_ciel","openWith":"[fond bleu ciel]","closeWith":"[/fond bleu ciel]","selectionType":"word","display":true}
,{"id":"couleur_fond_or","name":"Fond or","className":"couleur_fond_or","openWith":"[fond or]","closeWith":"[/fond or]","selectionType":"word","display":true}
,{"id":"couleur_fond_ivoire","name":"Fond ivoire","className":"couleur_fond_ivoire","openWith":"[fond ivoire]","closeWith":"[/fond ivoire]","selectionType":"word","display":true}
,{"id":"couleur_fond_orange","name":"Fond orange","className":"couleur_fond_orange","openWith":"[fond orange]","closeWith":"[/fond orange]","selectionType":"word","display":true}
,{"id":"couleur_fond_lavande","name":"Fond lavande","className":"couleur_fond_lavande","openWith":"[fond lavande]","closeWith":"[/fond lavande]","selectionType":"word","display":true}
,{"id":"couleur_fond_rose","name":"Fond rose","className":"couleur_fond_rose","openWith":"[fond rose]","closeWith":"[/fond rose]","selectionType":"word","display":true}
,{"id":"couleur_fond_prune","name":"Fond prune","className":"couleur_fond_prune","openWith":"[fond prune]","closeWith":"[/fond prune]","selectionType":"word","display":true}
,{"id":"couleur_fond_saumon","name":"Fond saumon","className":"couleur_fond_saumon","openWith":"[fond saumon]","closeWith":"[/fond saumon]","selectionType":"word","display":true}
,{"id":"couleur_fond_neige","name":"Fond neige","className":"couleur_fond_neige","openWith":"[fond neige]","closeWith":"[/fond neige]","selectionType":"word","display":true}
,{"id":"couleur_fond_turquoise","name":"Fond turquoise","className":"couleur_fond_turquoise","openWith":"[fond turquoise]","closeWith":"[/fond turquoise]","selectionType":"word","display":true}
,{"id":"couleur_fond_jaune_paille","name":"Fond jaune paille","className":"couleur_fond_jaune_paille","openWith":"[fond jaune paille]","closeWith":"[/fond jaune paille]","selectionType":"word","display":true}
,{"id":"couleur_fond_jaune","name":"Fond jaune","className":"couleur_fond_jaune","openWith":"[fond jaune]","closeWith":"[/fond jaune]","selectionType":"word","display":true}
]
}
,{"name":"Appliquer au texte une « décoration » personnalisée","className":"cs_decoration_drop","replaceWith":"","dropMenu":[{"id":"decoration_sc","name":"Décoration « span.sc »","className":"decoration_sc","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'sc', 'span', '<sc/>'); },"display":true}
,{"id":"decoration_souligne","name":"Décoration « span.souligne »","className":"decoration_souligne","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'souligne', 'span', '<souligne/>'); },"display":true}
,{"id":"decoration_barre","name":"Décoration « span.barre »","className":"decoration_barre","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'barre', 'span', '<barre/>'); },"display":true}
,{"id":"decoration_dessus","name":"Décoration « span.dessus »","className":"decoration_dessus","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'dessus', 'span', '<dessus/>'); },"display":true}
,{"id":"decoration_clignote","name":"Décoration « span.clignote »","className":"decoration_clignote","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'clignote', 'span', '<clignote/>'); },"display":true}
,{"id":"decoration_surfluo","name":"Décoration « span.surfluo »","className":"decoration_surfluo","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'surfluo', 'span', '<surfluo/>'); },"display":true}
,{"id":"decoration_surgris","name":"Décoration « span.surgris »","className":"decoration_surgris","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'surgris', 'span', '<surgris/>'); },"display":true}
]
}
,{"name":"Mettre en liste","className":"outil_liste_ul separateur_avant","replaceWith":function(h){ return outil_liste(h, '*');},"selectionType":"line","forceMultiline":true,"dropMenu":[{"id":"liste_ol","name":"Mettre en liste numérotée","className":"outil_liste_ol","replaceWith":function(h){ return outil_liste(h, '#');},"display":true,"selectionType":"line","forceMultiline":true}
,{"id":"desindenter","name":"Désindenter une liste","className":"outil_desindenter","replaceWith":function(h){return outil_desindenter(h);},"display":true,"selectionType":"line","forceMultiline":true}
,{"id":"indenter","name":"Indenter une liste","className":"outil_indenter","replaceWith":function(h){return outil_indenter(h);},"display":true,"selectionType":"line","forceMultiline":true}
]
}
,{"name":"Transformer en [lien hypertexte->http://...]","key":"L","className":"outil_link separateur separateur_apres sepLink","openWith":"[","closeWith":"->[![Veuillez indiquer l’adresse de votre lien (vous pouvez indiquer une adresse Internet sous la forme http://www.monsite.com, une adresse courriel, ou simplement indiquer le numéro d’un article de ce site.]!]]","dropMenu":[{"id":"notes","name":"Transformer en [[Note de bas de page]]","className":"outil_notes","openWith":"[[","closeWith":"]]","display":true,"selectionType":"word"}
]
}
,{"name":"Insérer/modifier (le sélectionner avant) un tableau","className":"outil_barre_tableau separateur_avant","replaceWith":function(markitup) { zone_selection = markitup.textarea; window.open("?exec=tableau_edit", "","scrollbars=yes,resizable=yes,width=700,height=600") },"selectionType":"line"}
,{"name":"<quote>Citer un message</quote>","key":"Q","className":"outil_quote separateur separateur_apres sepGuillemets","openWith":"<quote>","closeWith":"</quote>","selectionType":"word","dropMenu":[{"id":"barre_poesie","name":"Mettre en forme comme une <poesie>poésie</poesie>","className":"outil_barre_poesie","openWith":"\n<poesie>\n","closeWith":"\n</poesie>\n","display":true,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets","openWith":"«","closeWith":"»","lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_simples","openWith":"“","closeWith":"”","display":true,"lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_de","openWith":"„","closeWith":"“","lang":["bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_de_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_de_simples","openWith":"&sbquo;","closeWith":"‘","display":true,"lang":["bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_simples separateur_avant","openWith":"“","closeWith":"”","lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_autres_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_uniques","openWith":"‘","closeWith":"’","display":true,"lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Insérer des caractères spécifiques","className":"outil_caracteres separateur separateur_apres sepCaracteres","dropMenu":[{"id":"A_grave","name":"Insérer un À","className":"outil_a_maj_grave","replaceWith":"À","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"E_aigu","name":"Insérer un É","className":"outil_e_maj_aigu","replaceWith":"É","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"E_grave","name":"Insérer un È","className":"outil_e_maj_grave","replaceWith":"È","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"aelig","name":"Insérer un æ","className":"outil_aelig","replaceWith":"æ","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"AElig","name":"Insérer un Æ","className":"outil_aelig_maj","replaceWith":"Æ","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"oe","name":"Insérer un œ","className":"outil_oe","replaceWith":"œ","display":true,"lang":["fr"]
}
,{"id":"OE","name":"Insérer un Œ","className":"outil_oe_maj","replaceWith":"Œ","display":true,"lang":["fr"]
}
,{"id":"Ccedil","name":"Insérer un Ç","className":"outil_ccedil_maj","replaceWith":"Ç","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"uppercase","name":"Passer en majuscules","className":"outil_uppercase","replaceWith":function(markitup) { return markitup.selection.toUpperCase() },"display":true,"lang":["fr","en"]
}
,{"id":"lowercase","name":"Passer en minuscules","className":"outil_lowercase","replaceWith":function(markitup) { return markitup.selection.toLowerCase() },"display":true,"lang":["fr","en"]
}
]
}
,{"name":"Utiliser un outil du Couteau Suisse","className":"couteau_suisse_drop","replaceWith":"","dropMenu":[{"id":"decoupe_pages","name":"Insérer un séparateur de page ou d’onglet","className":"decoupe_pages","replaceWith":"\n++++\n","display":true}
,{"id":"decoupe_onglets","name":"Insérer un système d’onglet","className":"decoupe_onglets","replaceWith":"\n<onglets>Titre 1\n\nPlacez votre texte ici\n\n++++Titre 2\n\nPlacez votre texte ici\n\n++++Titre 3\n\nPlacez votre texte ici\n\n</onglets>\n","display":true}
,{"id":"blocs_bloc","name":"Insérer un bloc replié","className":"blocs_bloc","replaceWith":"\n<bloc>Un titre\n\nPlacez votre texte ici\n</bloc>\n","display":true}
,{"id":"blocs_visible","name":"Insérer un bloc déplié","className":"blocs_visible","replaceWith":"\n<visible>Un titre\n\nPlacez votre texte ici\n</visible>\n","display":true}
]
}
,{"name":"Insérer un chaton dans votre texte","className":"cs_chatons_drop","replaceWith":"","dropMenu":[{"id":"chaton_euh","name":"Insérer le chaton « :euh »","className":"chaton_euh","replaceWith":":euh","display":true}
,{"id":"chaton_grr","name":"Insérer le chaton « :grr »","className":"chaton_grr","replaceWith":":grr","display":true}
,{"id":"chaton_lol","name":"Insérer le chaton « :lol »","className":"chaton_lol","replaceWith":":lol","display":true}
,{"id":"chaton_mdr","name":"Insérer le chaton « :mdr »","className":"chaton_mdr","replaceWith":":mdr","display":true}
,{"id":"chaton_oups","name":"Insérer le chaton « :oups »","className":"chaton_oups","replaceWith":":oups","display":true}
]
}
,{"name":"Insérer une frimousse ","className":"cs_smileys_drop","replaceWith":"","dropMenu":[{"id":"smiley_pleure_de_rire","name":"Insérer une frimousse :’-))","className":"smiley_pleure_de_rire","replaceWith":":’-))","display":true}
,{"id":"smiley_triste","name":"Insérer une frimousse :’-(","className":"smiley_triste","replaceWith":":’-(","display":true}
,{"id":"smiley_mort_de_rire","name":"Insérer une frimousse :-))","className":"smiley_mort_de_rire","replaceWith":":-))","display":true}
,{"id":"smiley_en_colere","name":"Insérer une frimousse :-((","className":"smiley_en_colere","replaceWith":":-((","display":true}
,{"id":"smiley_clin_d-oeil","name":"Insérer une frimousse ;-)","className":"smiley_clin_d-oeil","replaceWith":";-)","display":true}
,{"id":"smiley_sourire","name":"Insérer une frimousse :-)","className":"smiley_sourire","replaceWith":":-)","display":true}
,{"id":"smiley_pas_content","name":"Insérer une frimousse :-(","className":"smiley_pas_content","replaceWith":":-(","display":true}
,{"id":"smiley_diable","name":"Insérer une frimousse :->","className":"smiley_diable","replaceWith":":->","display":true}
,{"id":"smiley_rouge","name":"Insérer une frimousse |-)","className":"smiley_rouge","replaceWith":"|-)","display":true}
,{"id":"smiley_rigolo","name":"Insérer une frimousse :o)","className":"smiley_rigolo","replaceWith":":o)","display":true}
,{"id":"smiley_lunettes","name":"Insérer une frimousse B-)","className":"smiley_lunettes","replaceWith":"B-)","display":true}
,{"id":"smiley_tire_la_langue","name":"Insérer une frimousse :-P","className":"smiley_tire_la_langue","replaceWith":":-P","display":true}
,{"id":"smiley_bof","name":"Insérer une frimousse :-|","className":"smiley_bof","replaceWith":":-|","display":true}
,{"id":"smiley_mouais","name":"Insérer une frimousse :-/","className":"smiley_mouais","replaceWith":":-/","display":true}
,{"id":"smiley_surpris","name":"Insérer une frimousse :-O","className":"smiley_surpris","replaceWith":":-O","display":true}
]
}
,{"name":"Insérer un filet de séparation","className":"cs_filets_drop","replaceWith":"","dropMenu":[{"id":"filet_0","name":"Insérer un filet de style « 0 »","className":"filet_0","replaceWith":"\n__0__\n","display":true}
,{"id":"filet_1","name":"Insérer un filet de style « 1 »","className":"filet_1","replaceWith":"\n__1__\n","display":true}
,{"id":"filet_2","name":"Insérer un filet de style « 2 »","className":"filet_2","replaceWith":"\n__2__\n","display":true}
,{"id":"filet_3","name":"Insérer un filet de style « 3 »","className":"filet_3","replaceWith":"\n__3__\n","display":true}
,{"id":"filet_4","name":"Insérer un filet de style « 4 »","className":"filet_4","replaceWith":"\n__4__\n","display":true}
,{"id":"filet_5","name":"Insérer un filet de style « 5 »","className":"filet_5","replaceWith":"\n__5__\n","display":true}
,{"id":"filet_6","name":"Insérer un filet de style « 6 »","className":"filet_6","replaceWith":"\n__6__\n","display":true}
,{"id":"filet_7","name":"Insérer un filet de style « 7 »","className":"filet_7","replaceWith":"\n__7__\n","display":true}
,{"id":"filet_degrade_png","name":"Insérer un filet de style « degrade »","className":"filet_degrade_png","replaceWith":"\n__degrade.png__\n","display":true}
,{"id":"filet_ornement_png","name":"Insérer un filet de style « ornement »","className":"filet_ornement_png","replaceWith":"\n__ornement.png__\n","display":true}
]
}
]
}


 
				// remplace ou cree -* ou -** ou -# ou -##
				function outil_liste(h, c) {
					if ((s = h.selection) && (r = s.match(/^-([*#]+) (.*)$/)))	 {
						r[1] = r[1].replace(/[#*]/g, c);
						s = '-'+r[1]+' '+r[2];
					} else {
						s = '-' + c + ' '+s;
					}
					return s;
				}

				// indente des -* ou -#
				function outil_indenter(h) {
					if (s = h.selection) {
						if (s.substr(0,2)=='-*') {
							s = '-**' + s.substr(2);
						} else if (s.substr(0,2)=='-#') {
							s = '-##' + s.substr(2);
						} else {
							s = '-* ' + s;
						}
					}
					return s;
				}

				// desindente des -* ou -** ou -# ou -##
				function outil_desindenter(h){
					if (s = h.selection) {
						if (s.substr(0,3)=='-**') {
							s = '-*' + s.substr(3);
						} else if (s.substr(0,3)=='-* ') {
							s = s.substr(3);
						} else if (s.substr(0,3)=='-##') {
							s = '-#' + s.substr(3);
						} else if (s.substr(0,3)=='-# ') {
							s = s.substr(3);
						}
					}
					return s;
				}

				// ajouter un espace avant, apres un {qqc} pour ne pas que
				// gras {{}} suivi de italique {} donnent {{{}}}, mais { {{}} }
				function espace_si_accolade(h, openWith, closeWith){
					if (s = h.selection) {
						// accolade dans la selection
						if (s.charAt(0)=='{') {
							return openWith + ' ' + s + ' ' + closeWith;
						}
						// accolade avant la selection
						else if (c = h.textarea.selectionStart) {
							if (h.textarea.value.charAt(c-1) == '{') {
								return ' ' + openWith + s + closeWith + ' ';
							}
						}
					}
					return openWith + s + closeWith;
				}
				
function outil_decoration(sel, racc, balise, defaut) {
			if(sel) {
				r='<'+racc+'>'+sel+'</'+racc+'>';
				return balise=='span'?r.replace(/(\n\n|\r\n\r\n|\r\r)/g,'</'+racc+'>$1<'+racc+'>'):r;
			}
			return defaut;
		}


barre_outils_forum = {"nameSpace":"forum","previewAutoRefresh":false,"onEnter":{"keepDefault":false,"selectionType":"return","replaceWith":"\n"}
,"onShiftEnter":{"keepDefault":false,"replaceWith":"\n_ "}
,"onCtrlEnter":{"keepDefault":false,"replaceWith":"\n\n"}
,"markupSet":[{"name":"Mettre en {{gras}}","key":"B","className":"outil_bold","replaceWith":function(h){ return espace_si_accolade(h, '{{', '}}');},"selectionType":"word"}
,{"name":"Mettre en {italique}","key":"I","className":"outil_italic","replaceWith":function(h){ return espace_si_accolade(h, '{', '}');},"selectionType":"word"}
,{"name":"Colorer le texte","className":"cs_couleur_texte","replaceWith":"","dropMenu":[{"id":"couleur_texte_noir","name":"Texte noir","className":"couleur_texte_noir","openWith":"[noir]","closeWith":"[/noir]","selectionType":"word","display":true}
,{"id":"couleur_texte_rouge","name":"Texte rouge","className":"couleur_texte_rouge","openWith":"[rouge]","closeWith":"[/rouge]","selectionType":"word","display":true}
,{"id":"couleur_texte_marron","name":"Texte marron","className":"couleur_texte_marron","openWith":"[marron]","closeWith":"[/marron]","selectionType":"word","display":true}
,{"id":"couleur_texte_vert","name":"Texte vert","className":"couleur_texte_vert","openWith":"[vert]","closeWith":"[/vert]","selectionType":"word","display":true}
,{"id":"couleur_texte_vert_olive","name":"Texte vert olive","className":"couleur_texte_vert_olive","openWith":"[vert olive]","closeWith":"[/vert olive]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_marine","name":"Texte bleu marine","className":"couleur_texte_bleu_marine","openWith":"[bleu marine]","closeWith":"[/bleu marine]","selectionType":"word","display":true}
,{"id":"couleur_texte_violet","name":"Texte violet","className":"couleur_texte_violet","openWith":"[violet]","closeWith":"[/violet]","selectionType":"word","display":true}
,{"id":"couleur_texte_gris","name":"Texte gris","className":"couleur_texte_gris","openWith":"[gris]","closeWith":"[/gris]","selectionType":"word","display":true}
,{"id":"couleur_texte_argent","name":"Texte argent","className":"couleur_texte_argent","openWith":"[argent]","closeWith":"[/argent]","selectionType":"word","display":true}
,{"id":"couleur_texte_vert_clair","name":"Texte vert clair","className":"couleur_texte_vert_clair","openWith":"[vert clair]","closeWith":"[/vert clair]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu","name":"Texte bleu","className":"couleur_texte_bleu","openWith":"[bleu]","closeWith":"[/bleu]","selectionType":"word","display":true}
,{"id":"couleur_texte_fuchia","name":"Texte fuchia","className":"couleur_texte_fuchia","openWith":"[fuchia]","closeWith":"[/fuchia]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_clair","name":"Texte bleu clair","className":"couleur_texte_bleu_clair","openWith":"[bleu clair]","closeWith":"[/bleu clair]","selectionType":"word","display":true}
,{"id":"couleur_texte_blanc","name":"Texte blanc","className":"couleur_texte_blanc","openWith":"[blanc]","closeWith":"[/blanc]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_azur","name":"Texte bleu azur","className":"couleur_texte_bleu_azur","openWith":"[bleu azur]","closeWith":"[/bleu azur]","selectionType":"word","display":true}
,{"id":"couleur_texte_beige","name":"Texte beige","className":"couleur_texte_beige","openWith":"[beige]","closeWith":"[/beige]","selectionType":"word","display":true}
,{"id":"couleur_texte_brun","name":"Texte brun","className":"couleur_texte_brun","openWith":"[brun]","closeWith":"[/brun]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_violet","name":"Texte bleu violet","className":"couleur_texte_bleu_violet","openWith":"[bleu violet]","closeWith":"[/bleu violet]","selectionType":"word","display":true}
,{"id":"couleur_texte_brun_clair","name":"Texte brun clair","className":"couleur_texte_brun_clair","openWith":"[brun clair]","closeWith":"[/brun clair]","selectionType":"word","display":true}
,{"id":"couleur_texte_rose_clair","name":"Texte rose clair","className":"couleur_texte_rose_clair","openWith":"[rose clair]","closeWith":"[/rose clair]","selectionType":"word","display":true}
,{"id":"couleur_texte_vert_fonce","name":"Texte vert fonce","className":"couleur_texte_vert_fonce","openWith":"[vert fonce]","closeWith":"[/vert fonce]","selectionType":"word","display":true}
,{"id":"couleur_texte_orange_fonce","name":"Texte orange fonce","className":"couleur_texte_orange_fonce","openWith":"[orange fonce]","closeWith":"[/orange fonce]","selectionType":"word","display":true}
,{"id":"couleur_texte_mauve_fonce","name":"Texte mauve fonce","className":"couleur_texte_mauve_fonce","openWith":"[mauve fonce]","closeWith":"[/mauve fonce]","selectionType":"word","display":true}
,{"id":"couleur_texte_bleu_ciel","name":"Texte bleu ciel","className":"couleur_texte_bleu_ciel","openWith":"[bleu ciel]","closeWith":"[/bleu ciel]","selectionType":"word","display":true}
,{"id":"couleur_texte_or","name":"Texte or","className":"couleur_texte_or","openWith":"[or]","closeWith":"[/or]","selectionType":"word","display":true}
,{"id":"couleur_texte_ivoire","name":"Texte ivoire","className":"couleur_texte_ivoire","openWith":"[ivoire]","closeWith":"[/ivoire]","selectionType":"word","display":true}
,{"id":"couleur_texte_orange","name":"Texte orange","className":"couleur_texte_orange","openWith":"[orange]","closeWith":"[/orange]","selectionType":"word","display":true}
,{"id":"couleur_texte_lavande","name":"Texte lavande","className":"couleur_texte_lavande","openWith":"[lavande]","closeWith":"[/lavande]","selectionType":"word","display":true}
,{"id":"couleur_texte_rose","name":"Texte rose","className":"couleur_texte_rose","openWith":"[rose]","closeWith":"[/rose]","selectionType":"word","display":true}
,{"id":"couleur_texte_prune","name":"Texte prune","className":"couleur_texte_prune","openWith":"[prune]","closeWith":"[/prune]","selectionType":"word","display":true}
,{"id":"couleur_texte_saumon","name":"Texte saumon","className":"couleur_texte_saumon","openWith":"[saumon]","closeWith":"[/saumon]","selectionType":"word","display":true}
,{"id":"couleur_texte_neige","name":"Texte neige","className":"couleur_texte_neige","openWith":"[neige]","closeWith":"[/neige]","selectionType":"word","display":true}
,{"id":"couleur_texte_turquoise","name":"Texte turquoise","className":"couleur_texte_turquoise","openWith":"[turquoise]","closeWith":"[/turquoise]","selectionType":"word","display":true}
,{"id":"couleur_texte_jaune_paille","name":"Texte jaune paille","className":"couleur_texte_jaune_paille","openWith":"[jaune paille]","closeWith":"[/jaune paille]","selectionType":"word","display":true}
,{"id":"couleur_texte_jaune","name":"Texte jaune","className":"couleur_texte_jaune","openWith":"[jaune]","closeWith":"[/jaune]","selectionType":"word","display":true}
]
}
,{"name":"Colorer le fond","className":"cs_couleur_fond","replaceWith":"","dropMenu":[{"id":"couleur_fond_noir","name":"Fond noir","className":"couleur_fond_noir","openWith":"[fond noir]","closeWith":"[/fond noir]","selectionType":"word","display":true}
,{"id":"couleur_fond_rouge","name":"Fond rouge","className":"couleur_fond_rouge","openWith":"[fond rouge]","closeWith":"[/fond rouge]","selectionType":"word","display":true}
,{"id":"couleur_fond_marron","name":"Fond marron","className":"couleur_fond_marron","openWith":"[fond marron]","closeWith":"[/fond marron]","selectionType":"word","display":true}
,{"id":"couleur_fond_vert","name":"Fond vert","className":"couleur_fond_vert","openWith":"[fond vert]","closeWith":"[/fond vert]","selectionType":"word","display":true}
,{"id":"couleur_fond_vert_olive","name":"Fond vert olive","className":"couleur_fond_vert_olive","openWith":"[fond vert olive]","closeWith":"[/fond vert olive]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_marine","name":"Fond bleu marine","className":"couleur_fond_bleu_marine","openWith":"[fond bleu marine]","closeWith":"[/fond bleu marine]","selectionType":"word","display":true}
,{"id":"couleur_fond_violet","name":"Fond violet","className":"couleur_fond_violet","openWith":"[fond violet]","closeWith":"[/fond violet]","selectionType":"word","display":true}
,{"id":"couleur_fond_gris","name":"Fond gris","className":"couleur_fond_gris","openWith":"[fond gris]","closeWith":"[/fond gris]","selectionType":"word","display":true}
,{"id":"couleur_fond_argent","name":"Fond argent","className":"couleur_fond_argent","openWith":"[fond argent]","closeWith":"[/fond argent]","selectionType":"word","display":true}
,{"id":"couleur_fond_vert_clair","name":"Fond vert clair","className":"couleur_fond_vert_clair","openWith":"[fond vert clair]","closeWith":"[/fond vert clair]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu","name":"Fond bleu","className":"couleur_fond_bleu","openWith":"[fond bleu]","closeWith":"[/fond bleu]","selectionType":"word","display":true}
,{"id":"couleur_fond_fuchia","name":"Fond fuchia","className":"couleur_fond_fuchia","openWith":"[fond fuchia]","closeWith":"[/fond fuchia]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_clair","name":"Fond bleu clair","className":"couleur_fond_bleu_clair","openWith":"[fond bleu clair]","closeWith":"[/fond bleu clair]","selectionType":"word","display":true}
,{"id":"couleur_fond_blanc","name":"Fond blanc","className":"couleur_fond_blanc","openWith":"[fond blanc]","closeWith":"[/fond blanc]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_azur","name":"Fond bleu azur","className":"couleur_fond_bleu_azur","openWith":"[fond bleu azur]","closeWith":"[/fond bleu azur]","selectionType":"word","display":true}
,{"id":"couleur_fond_beige","name":"Fond beige","className":"couleur_fond_beige","openWith":"[fond beige]","closeWith":"[/fond beige]","selectionType":"word","display":true}
,{"id":"couleur_fond_brun","name":"Fond brun","className":"couleur_fond_brun","openWith":"[fond brun]","closeWith":"[/fond brun]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_violet","name":"Fond bleu violet","className":"couleur_fond_bleu_violet","openWith":"[fond bleu violet]","closeWith":"[/fond bleu violet]","selectionType":"word","display":true}
,{"id":"couleur_fond_brun_clair","name":"Fond brun clair","className":"couleur_fond_brun_clair","openWith":"[fond brun clair]","closeWith":"[/fond brun clair]","selectionType":"word","display":true}
,{"id":"couleur_fond_rose_clair","name":"Fond rose clair","className":"couleur_fond_rose_clair","openWith":"[fond rose clair]","closeWith":"[/fond rose clair]","selectionType":"word","display":true}
,{"id":"couleur_fond_vert_fonce","name":"Fond vert fonce","className":"couleur_fond_vert_fonce","openWith":"[fond vert fonce]","closeWith":"[/fond vert fonce]","selectionType":"word","display":true}
,{"id":"couleur_fond_orange_fonce","name":"Fond orange fonce","className":"couleur_fond_orange_fonce","openWith":"[fond orange fonce]","closeWith":"[/fond orange fonce]","selectionType":"word","display":true}
,{"id":"couleur_fond_mauve_fonce","name":"Fond mauve fonce","className":"couleur_fond_mauve_fonce","openWith":"[fond mauve fonce]","closeWith":"[/fond mauve fonce]","selectionType":"word","display":true}
,{"id":"couleur_fond_bleu_ciel","name":"Fond bleu ciel","className":"couleur_fond_bleu_ciel","openWith":"[fond bleu ciel]","closeWith":"[/fond bleu ciel]","selectionType":"word","display":true}
,{"id":"couleur_fond_or","name":"Fond or","className":"couleur_fond_or","openWith":"[fond or]","closeWith":"[/fond or]","selectionType":"word","display":true}
,{"id":"couleur_fond_ivoire","name":"Fond ivoire","className":"couleur_fond_ivoire","openWith":"[fond ivoire]","closeWith":"[/fond ivoire]","selectionType":"word","display":true}
,{"id":"couleur_fond_orange","name":"Fond orange","className":"couleur_fond_orange","openWith":"[fond orange]","closeWith":"[/fond orange]","selectionType":"word","display":true}
,{"id":"couleur_fond_lavande","name":"Fond lavande","className":"couleur_fond_lavande","openWith":"[fond lavande]","closeWith":"[/fond lavande]","selectionType":"word","display":true}
,{"id":"couleur_fond_rose","name":"Fond rose","className":"couleur_fond_rose","openWith":"[fond rose]","closeWith":"[/fond rose]","selectionType":"word","display":true}
,{"id":"couleur_fond_prune","name":"Fond prune","className":"couleur_fond_prune","openWith":"[fond prune]","closeWith":"[/fond prune]","selectionType":"word","display":true}
,{"id":"couleur_fond_saumon","name":"Fond saumon","className":"couleur_fond_saumon","openWith":"[fond saumon]","closeWith":"[/fond saumon]","selectionType":"word","display":true}
,{"id":"couleur_fond_neige","name":"Fond neige","className":"couleur_fond_neige","openWith":"[fond neige]","closeWith":"[/fond neige]","selectionType":"word","display":true}
,{"id":"couleur_fond_turquoise","name":"Fond turquoise","className":"couleur_fond_turquoise","openWith":"[fond turquoise]","closeWith":"[/fond turquoise]","selectionType":"word","display":true}
,{"id":"couleur_fond_jaune_paille","name":"Fond jaune paille","className":"couleur_fond_jaune_paille","openWith":"[fond jaune paille]","closeWith":"[/fond jaune paille]","selectionType":"word","display":true}
,{"id":"couleur_fond_jaune","name":"Fond jaune","className":"couleur_fond_jaune","openWith":"[fond jaune]","closeWith":"[/fond jaune]","selectionType":"word","display":true}
]
}
,{"name":"Appliquer au texte une « décoration » personnalisée","className":"cs_decoration_drop separateur_avant","replaceWith":"","dropMenu":[{"id":"decoration_sc","name":"Décoration « span.sc »","className":"decoration_sc","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'sc', 'span', '<sc/>'); },"display":true}
,{"id":"decoration_souligne","name":"Décoration « span.souligne »","className":"decoration_souligne","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'souligne', 'span', '<souligne/>'); },"display":true}
,{"id":"decoration_barre","name":"Décoration « span.barre »","className":"decoration_barre","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'barre', 'span', '<barre/>'); },"display":true}
,{"id":"decoration_dessus","name":"Décoration « span.dessus »","className":"decoration_dessus","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'dessus', 'span', '<dessus/>'); },"display":true}
,{"id":"decoration_clignote","name":"Décoration « span.clignote »","className":"decoration_clignote","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'clignote', 'span', '<clignote/>'); },"display":true}
,{"id":"decoration_surfluo","name":"Décoration « span.surfluo »","className":"decoration_surfluo","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'surfluo', 'span', '<surfluo/>'); },"display":true}
,{"id":"decoration_surgris","name":"Décoration « span.surgris »","className":"decoration_surgris","selectionType":"word","replaceWith":function(h){ return outil_decoration(h.selection, 'surgris', 'span', '<surgris/>'); },"display":true}
]
}
,{"name":"Transformer en [lien hypertexte->http://...]","key":"L","className":"outil_link separateur separateur_apres sepLink separateur_avant","openWith":"[","closeWith":"->[![Veuillez indiquer l’adresse de votre lien (vous pouvez indiquer une adresse Internet sous la forme http://www.monsite.com, une adresse courriel, ou simplement indiquer le numéro d’un article de ce site.]!]]"}
,{"name":"<quote>Citer un message</quote>","key":"Q","className":"outil_quote separateur separateur_apres sepGuillemets","openWith":"\n<quote>","closeWith":"</quote>\n","selectionType":"word"}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets","openWith":"«","closeWith":"»","lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_simples","openWith":"“","closeWith":"”","display":true,"lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_de","openWith":"„","closeWith":"“","lang":["bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_de_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_de_simples","openWith":"&sbquo;","closeWith":"‘","display":true,"lang":["bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_simples separateur_avant","openWith":"“","closeWith":"”","lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_autres_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_uniques","openWith":"‘","closeWith":"’","display":true,"lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Utiliser un outil du Couteau Suisse","className":"couteau_suisse_drop separateur separateur_apres sepCaracteres","replaceWith":"","dropMenu":[{"id":"decoupe_onglets","name":"Insérer un système d’onglet","className":"decoupe_onglets","replaceWith":"\n<onglets>Titre 1\n\nPlacez votre texte ici\n\n++++Titre 2\n\nPlacez votre texte ici\n\n++++Titre 3\n\nPlacez votre texte ici\n\n</onglets>\n","display":true}
,{"id":"blocs_bloc","name":"Insérer un bloc replié","className":"blocs_bloc","replaceWith":"\n<bloc>Un titre\n\nPlacez votre texte ici\n</bloc>\n","display":true}
,{"id":"blocs_visible","name":"Insérer un bloc déplié","className":"blocs_visible","replaceWith":"\n<visible>Un titre\n\nPlacez votre texte ici\n</visible>\n","display":true}
]
}
,{"name":"Insérer un chaton dans votre texte","className":"cs_chatons_drop","replaceWith":"","dropMenu":[{"id":"chaton_euh","name":"Insérer le chaton « :euh »","className":"chaton_euh","replaceWith":":euh","display":true}
,{"id":"chaton_grr","name":"Insérer le chaton « :grr »","className":"chaton_grr","replaceWith":":grr","display":true}
,{"id":"chaton_lol","name":"Insérer le chaton « :lol »","className":"chaton_lol","replaceWith":":lol","display":true}
,{"id":"chaton_mdr","name":"Insérer le chaton « :mdr »","className":"chaton_mdr","replaceWith":":mdr","display":true}
,{"id":"chaton_oups","name":"Insérer le chaton « :oups »","className":"chaton_oups","replaceWith":":oups","display":true}
]
}
,{"name":"Insérer une frimousse ","className":"cs_smileys_drop","replaceWith":"","dropMenu":[{"id":"smiley_pleure_de_rire","name":"Insérer une frimousse :’-))","className":"smiley_pleure_de_rire","replaceWith":":’-))","display":true}
,{"id":"smiley_triste","name":"Insérer une frimousse :’-(","className":"smiley_triste","replaceWith":":’-(","display":true}
,{"id":"smiley_mort_de_rire","name":"Insérer une frimousse :-))","className":"smiley_mort_de_rire","replaceWith":":-))","display":true}
,{"id":"smiley_en_colere","name":"Insérer une frimousse :-((","className":"smiley_en_colere","replaceWith":":-((","display":true}
,{"id":"smiley_clin_d-oeil","name":"Insérer une frimousse ;-)","className":"smiley_clin_d-oeil","replaceWith":";-)","display":true}
,{"id":"smiley_sourire","name":"Insérer une frimousse :-)","className":"smiley_sourire","replaceWith":":-)","display":true}
,{"id":"smiley_pas_content","name":"Insérer une frimousse :-(","className":"smiley_pas_content","replaceWith":":-(","display":true}
,{"id":"smiley_diable","name":"Insérer une frimousse :->","className":"smiley_diable","replaceWith":":->","display":true}
,{"id":"smiley_rouge","name":"Insérer une frimousse |-)","className":"smiley_rouge","replaceWith":"|-)","display":true}
,{"id":"smiley_rigolo","name":"Insérer une frimousse :o)","className":"smiley_rigolo","replaceWith":":o)","display":true}
,{"id":"smiley_lunettes","name":"Insérer une frimousse B-)","className":"smiley_lunettes","replaceWith":"B-)","display":true}
,{"id":"smiley_tire_la_langue","name":"Insérer une frimousse :-P","className":"smiley_tire_la_langue","replaceWith":":-P","display":true}
,{"id":"smiley_bof","name":"Insérer une frimousse :-|","className":"smiley_bof","replaceWith":":-|","display":true}
,{"id":"smiley_mouais","name":"Insérer une frimousse :-/","className":"smiley_mouais","replaceWith":":-/","display":true}
,{"id":"smiley_surpris","name":"Insérer une frimousse :-O","className":"smiley_surpris","replaceWith":":-O","display":true}
]
}
,{"name":"Insérer un filet de séparation","className":"cs_filets_drop","replaceWith":"","dropMenu":[{"id":"filet_0","name":"Insérer un filet de style « 0 »","className":"filet_0","replaceWith":"\n__0__\n","display":true}
,{"id":"filet_1","name":"Insérer un filet de style « 1 »","className":"filet_1","replaceWith":"\n__1__\n","display":true}
,{"id":"filet_2","name":"Insérer un filet de style « 2 »","className":"filet_2","replaceWith":"\n__2__\n","display":true}
,{"id":"filet_3","name":"Insérer un filet de style « 3 »","className":"filet_3","replaceWith":"\n__3__\n","display":true}
,{"id":"filet_4","name":"Insérer un filet de style « 4 »","className":"filet_4","replaceWith":"\n__4__\n","display":true}
,{"id":"filet_5","name":"Insérer un filet de style « 5 »","className":"filet_5","replaceWith":"\n__5__\n","display":true}
,{"id":"filet_6","name":"Insérer un filet de style « 6 »","className":"filet_6","replaceWith":"\n__6__\n","display":true}
,{"id":"filet_7","name":"Insérer un filet de style « 7 »","className":"filet_7","replaceWith":"\n__7__\n","display":true}
,{"id":"filet_degrade_png","name":"Insérer un filet de style « degrade »","className":"filet_degrade_png","replaceWith":"\n__degrade.png__\n","display":true}
,{"id":"filet_ornement_png","name":"Insérer un filet de style « ornement »","className":"filet_ornement_png","replaceWith":"\n__ornement.png__\n","display":true}
]
}
]
}


 
				// remplace ou cree -* ou -** ou -# ou -##
				function outil_liste(h, c) {
					if ((s = h.selection) && (r = s.match(/^-([*#]+) (.*)$/)))	 {
						r[1] = r[1].replace(/[#*]/g, c);
						s = '-'+r[1]+' '+r[2];
					} else {
						s = '-' + c + ' '+s;
					}
					return s;
				}

				// indente des -* ou -#
				function outil_indenter(h) {
					if (s = h.selection) {
						if (s.substr(0,2)=='-*') {
							s = '-**' + s.substr(2);
						} else if (s.substr(0,2)=='-#') {
							s = '-##' + s.substr(2);
						} else {
							s = '-* ' + s;
						}
					}
					return s;
				}

				// desindente des -* ou -** ou -# ou -##
				function outil_desindenter(h){
					if (s = h.selection) {
						if (s.substr(0,3)=='-**') {
							s = '-*' + s.substr(3);
						} else if (s.substr(0,3)=='-* ') {
							s = s.substr(3);
						} else if (s.substr(0,3)=='-##') {
							s = '-#' + s.substr(3);
						} else if (s.substr(0,3)=='-# ') {
							s = s.substr(3);
						}
					}
					return s;
				}

				// ajouter un espace avant, apres un {qqc} pour ne pas que
				// gras {{}} suivi de italique {} donnent {{{}}}, mais { {{}} }
				function espace_si_accolade(h, openWith, closeWith){
					if (s = h.selection) {
						// accolade dans la selection
						if (s.charAt(0)=='{') {
							return openWith + ' ' + s + ' ' + closeWith;
						}
						// accolade avant la selection
						else if (c = h.textarea.selectionStart) {
							if (h.textarea.value.charAt(c-1) == '{') {
								return ' ' + openWith + s + closeWith + ' ';
							}
						}
					}
					return openWith + s + closeWith;
				}
				
function outil_decoration(sel, racc, balise, defaut) {
			if(sel) {
				r='<'+racc+'>'+sel+'</'+racc+'>';
				return balise=='span'?r.replace(/(\n\n|\r\n\r\n|\r\r)/g,'</'+racc+'>$1<'+racc+'>'):r;
			}
			return defaut;
		}


barre_outils_vide = {"nameSpace":"vide","previewAutoRefresh":false,"markupSet":[]
}


 
function outil_decoration(sel, racc, balise, defaut) {
			if(sel) {
				r='<'+racc+'>'+sel+'</'+racc+'>';
				return balise=='span'?r.replace(/(\n\n|\r\n\r\n|\r\r)/g,'</'+racc+'>$1<'+racc+'>'):r;
			}
			return defaut;
		}



;(function($){

// 2 fonctions pour appeler le porte plume reutilisables pour d'autres plugins
// on envoie dedans la selection jquery qui doit etre effectuee
// ce qui evite des appels direct a markitup, aucazou on change de lib un jour
$.fn.barre_outils = function(nom, settings) {
	options = {
		lang:'fr'
	};
	$.extend(options, settings);

	return $(this)
		.not('.markItUpEditor, .no_barre')
		.markItUp(eval('barre_outils_' + nom), {lang:options.lang})
		.parent().find('.markItUpButton a').attr('tabindex', -1) // ne pas tabuler les boutons
		.end(); 
};

$.fn.barre_previsualisation = function(settings) {
	options = {
		previewParserPath:"index.php?action=porte_plume_previsu", // ici une url relative pour prive/public
		textEditer:"Modifier",
		textVoir:"Voir"
	};
	$.extend(options, settings);

	return $(this)
		.not('.pp_previsualisation, .no_previsualisation')
		.previsu_spip(options)
		.parent().find('.markItUpTabs a').attr('tabindex', -1) // ne pas tabuler les onglets
		.end();
};

$(window).on('load', function(){
	// ajoute les barres d'outils markitup
	function barrebouilles(){
		// fonction generique appliquee aux classes CSS :
		// inserer_barre_forum, inserer_barre_edition, inserer_previsualisation
		$('.formulaire_spip textarea.inserer_barre_forum').barre_outils('forum');
		$('.formulaire_spip textarea.inserer_barre_edition').barre_outils('edition');
		$('.formulaire_spip textarea.inserer_previsualisation').barre_previsualisation();
		// fonction specifique aux formulaires de SPIP :
		// barre de forum
		$('textarea.textarea_forum').barre_outils('forum');
		 
		$('.formulaire_forum textarea[name=texte]').barre_outils('forum');
		// barre d'edition et onglets de previsualisation
		$('.formulaire_spip textarea[name=texte]')
			.barre_outils('edition').end()
			.barre_previsualisation();
	}
	barrebouilles();
	onAjaxLoad(barrebouilles);

});
})(jQuery);
