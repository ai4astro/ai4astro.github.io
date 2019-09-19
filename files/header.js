var cs_prive=window.location.pathname.match(/\/ecrire\/$/)!=null;
jQuery.fn.cs_todo=function(){return this.not('.cs_done').addClass('cs_done');};
// variable modifiable afin d'initialiser l'ouverture d'un onglet
if(typeof(onglet_actif)=='undefined') var onglet_actif = '';
// variable modifiable afin de choisir la balise utilisee pour les onglets
if(typeof(onglets_balise)=='undefined') var onglets_balise = 'h2';

// fonction pour montrer un contenu
jQuery.fn.montre_onglet = function( selector ) {
	// click sur un titre
	if(this.is('.onglets_titre')) {
		var contenu = '#' + this[0].id.replace(/titre/,'contenu');
		var bloc = this.parent().parent();
		bloc.children('.selected').removeClass('selected').end()
			.children('.onglets_liste').children('.selected').removeClass('selected');
		jQuery(contenu).addClass('selected');
		this.addClass('selected');
	}
	// click sur un titre
	if(this.is('.onglets_contenu')) {
		var titre = this[0].id.replace(/contenu/,'titre');
		jQuery('#'+titre).montre_onglet();
	}
	return this;
};

// compatibilite Ajax : ajouter "this" a "jQuery" pour mieux localiser les actions 
function onglets_init() {
  var cs_bloc = jQuery('div.onglets_bloc_initial', this);
  if(cs_bloc.length) {
	cs_bloc.prepend('<div class="onglets_liste"></div>')
		.children('.onglets_contenu').each(function(i) {
			this.id = 'onglets_contenu_' + i;
			jQuery(this).parent().children('.onglets_liste').append(
				'<'+onglets_balise+' id="'+'onglets_titre_' + i + '" class="onglets_titre">' + this.firstChild.innerHTML + '</'+onglets_balise+'>'
			);
		})
		.children(onglets_balise).remove();
	jQuery('div.onglets_liste', this).each(function() {
		this.firstChild.className += ' selected';
		this.nextSibling.className += ' selected';
	});
	jQuery(onglets_balise+'.onglets_titre', this).hover(
		function(){
			jQuery(this).addClass('hover')
		},function(){
			jQuery(this).removeClass('hover')
		}
	);
	jQuery('div.onglets_bloc_initial', this)
		.attr('class','onglets_bloc').each(function(i) {this.id = 'ongl_'+i;});
	// clic du titre...
	jQuery(onglets_balise+'.onglets_titre', this).click(function(e) {
		jQuery(this).montre_onglet();
		return false;
	});
	// clic des <a>, au cas ou...
	jQuery(onglets_balise+'.onglets_titre a', this).click(function(e){
		jQuery(this).parents(onglets_balise).click();
		if (e.stopPropagation) e.stopPropagation();
		e.cancelBubble = true;
		return false;
	});
	// activation d'onglet(s) grace a l'url
	var onglet_get = get_onglet(window.location);
	if(onglet_get && (this==document)) clic_onglet(onglet_get);
	// clic vers une note dans un onglet
	jQuery('.spip_note['+cs_sel_jQuery+'name^=nb], .spip_note['+cs_sel_jQuery+'id^=nb]').each(function(i) {
		jQuery(this).click(function(e){
			var href = this.href.substring(this.href.lastIndexOf("#"));
			jQuery(href).parents('.onglets_contenu').eq(0).montre_onglet();
			return true;
		});
	});
  }
}

function clic_onglet(liste) {
	var onglets = liste.split(',');
	for (var i=0; i<onglets.length; i++)
		jQuery('#onglets_titre_'+onglets[i]).click();
}

function get_onglet(url) {
 tab = url.search.match(/[?&]onglet=([0-9,]*)/) || url.hash.match(/#onglet([0-9,]*)/);
 return tab==null?onglet_actif:tab[1];
}

// fonction non utilisee car en principe, les notes orphelines sont supprimees en php
function decoupe_init() {
  // suppression des notes orphelines
  var that = this;
  jQuery('a[rev="footnote"].spip_note', that).each(function() {
		if(!jQuery(this.getAttribute('href'), that).length) jQuery(this).parents('div[id^=nb]').eq(0).remove();
	});
 }
var onglets_balise = 'h2';
function lancerlien(a,b){ return 'ma'+'ilto'+':'+a.replace(new RegExp(b,'g'),'@'); }
// variables modifiables afin d'initialiser l'ouverture d'un bloc (simple ou numerote)
if(typeof(bloc_actif)=='undefined') var bloc_actif = '';
if(typeof(bloc_actif_num)=='undefined') var bloc_actif_num = '';

// fonction surchargeable : gestion du slide jQuery
jQuery.fn.blocs_toggle_slide_dist = function( selector ) {
	this.toggleClass('blocs_slide');
	if(typeof jQuery.fn.blocs_toggle_slide=='function')
		return this.blocs_toggle_slide();
	return this.is(".blocs_slide")?this.slideUp(blocs_slide):this.slideDown(blocs_slide);
};

jQuery.fn.blocs_set_title = function( selector ) {
	var title = this.parent().find('.blocs_title:last').text();
	if(!title) title = blocs_title_def;
	title = title.split(blocs_title_sep);
	this.children('a').attr('title', title[jQuery(this).is('.blocs_replie')?0:1]);
	return this;
};

// fonction de de/re-pliement
jQuery.fn.blocs_toggle = function() {
	if(!this.length) return this;
	if(this.length>1) {
		this.each(function() { $(this).eq(0).blocs_toggle(); }); 
		return this; 
	}
	// applique-t-on la fonction sur cs_blocs ou sur blocs_titre ?
	var cible = this.is('.cs_blocs')? this.children('.blocs_titre').eq(0) : this;
	// on replie/deplie la cible...
	cible.toggleClass('blocs_replie').blocs_set_title();
	var dest = this[0].id.match('^cs_bloc_id_')?jQuery('div.'+this[0].id):cible.next();
	if(blocs_slide==='aucun') {
		dest.toggleClass('blocs_invisible');
		// est-on sur un resume ?
		if (dest.is('div.blocs_resume')) dest.next().toggleClass('blocs_invisible');
	} else {
		dest.blocs_toggle_slide_dist();
		// est-on sur un resume ?
		if (dest.is('div.blocs_resume')) dest.next().blocs_toggle_slide_dist();
	}
	// est-on sur un bloc ajax ?
	var lien = cible.children();
	var url = lien.attr("href");
	if(url != 'javascript:;') {
		// une fois le bloc ajax en place, plus besoin de le recharger ensuite
		lien.attr("href", 'javascript:;');
		// ici, on charge !
		cible.parent().children(".blocs_destination")
		//.animeajax()
		.load(url);
	}
	return this;
};

// replie tout sauf le bloc appelant et sa lignee parentale
jQuery.fn.blocs_replie_tout = function() {
	if(blocs_replier_tout) {
		// applique-t-on la fonction sur cs_blocs ou sur blocs_titre ?
		var cible = this.is('.cs_blocs')? this : this.parents('div.cs_blocs');
		// lignee du bloc
		var lignee = cible.children('.blocs_titre');
		jQuery('.blocs_titre').not('.blocs_replie').not(lignee).blocs_toggle();
	}
	return this;
}

// une variable globale stockant le(s) bloc(s) a deplier si un clic ajax a eu lieu
var blocs_clic_ajax = null;

// compatibilite Ajax : ajouter "this" a "jQuery" pour mieux localiser les actions 
// et tagger avec cs_done pour eviter de binder plrs fois le meme bloc
function blocs_init() {
	// clic sur un titre de bloc
	jQuery('.blocs_titre', this).cs_todo()
	  .click( function(){
		jQuery(this).blocs_replie_tout().blocs_toggle();
		// annulation du clic
		return false;
	   })
	  .each( function(){
		jQuery(this).blocs_set_title();
	  });
	// pour un lien 'replier_bloc' present dans le bloc
	jQuery('.blocs_destination a.replier_bloc', this).cs_todo()
	 .click( function(){
		s = jQuery(this).parents('.cs_blocs:first');
		// scroll vers le debut du bloc, si le plugin 'SrollTo' est present
		if(typeof jQuery.fn.scrollTo=="function") jQuery('body').scrollTo(s, 500, 
			{margin:true, /*axis:'y',*/ onAfter:function(){s.blocs_replie_tout().blocs_toggle();}});
		else s.blocs_replie_tout().blocs_toggle();
		// annulation du clic
		return false;
	   });
	// activation de blocs numerotes grace a l'url
	var blocs = blocs_get_blocs(window.location, true);
	if(blocs && (this==document)) blocs_clic_blocs(blocs, true);
	// activation de blocs simples (numerotes sur la base zero) grace a l'url
	blocs = blocs_get_blocs(window.location);
	if(blocs && (this==document)) blocs_clic_blocs(blocs);
	// clic vers une note dans un bloc
	jQuery('.spip_note['+cs_sel_jQuery+'name^=nb], .spip_note['+cs_sel_jQuery+'id^=nb]').each(function(i) {
		jQuery(this).click(function(e){
			var href = this.href.substring(this.href.lastIndexOf("#"));
			href = jQuery(href).parents('.cs_blocs').eq(0).children('.blocs_titre').eq(0);
			// on neutralise une eventuelle animation
			old_blocs_slide = blocs_slide;
			if(blocs_slide!='aucun') blocs_slide = -1;
			if(href.is('.blocs_replie')) href.click();
			blocs_slide = old_blocs_slide;
			return true;
		});
	});

/*
// LA SUITE DE CE CODE NE FONCTIONNE POUR L'INSTANT QUE SUR LE PREMIER CLIC, JE NE SAIS PAS ENCORE PKOI...
	// stockage du bloc (numerote !) a reouvrir dans le cas d'un clic ajax sur une 
	// pagination SPIP contenue a l'interieur
	jQuery(".ajaxbloc .pagination a.noajax", this).cs_todo()
	  .click( function(){
		var parent = jQuery(this).parents('.cs_blocs');
		if(!parent.length) return true;
		var numero = /cs_bloc\d+/.exec(parent[0].className);
		if(numero!==null) blocs_clic_ajax = numero[0];
		return true;
	   });
	// rouvre le nouveau bloc ajax si un clic a eu lieu a l'interieur de l'ancien
	if(blocs_clic_ajax!==null) {
		jQuery('.'+blocs_clic_ajax, this).blocs_toggle();
		blocs_clic_ajax = null
	}
*/
}

// un JS actif replie les blocs invisibles
document.write('<style type="text/css">div.blocs_invisible{display:none;}</style>');

// Sauve l'etat des blocs numerotes ET deplies dans un cookie si on quitte la page
function cs_blocs_cookie() {
	if(typeof jQuery.cookie!='function') return;
	var blocs_cookie_name = 'blocs' + window.location.pathname + window.location.search
	blocs_cookie_name = blocs_cookie_name.replace(/[ ;,=]/,'_');
	var deplies = jQuery.cookie(blocs_cookie_name);
	//var pourInfo = blocs_deplies();
	if(deplies) {
		// on replie tous les blocs numerotes et on deplie les blocs du cookie
		jQuery(".cs_blocs[id^='deplier_num'] .blocs_titre").not('.blocs_replie').blocs_toggle();
		jQuery(deplies).blocs_toggle();
	}
	jQuery(window).bind('unload', function() {
		jQuery.cookie(blocs_cookie_name, blocs_deplies());
	});
}

// renvoie la liste des selecteurs de blocs ouverts
function blocs_deplies() {
	var deplies = '';
	jQuery('.cs_blocs').each(function() {
		var numero = /cs_bloc\d+/.exec(this.className);
		if(numero==null) return;
		replie = jQuery(this).children('.blocs_titre').eq(0).is('.blocs_replie');
		if(!replie) deplies += (deplies.length?', ':'') + 'div.' + numero[0];
	});
	return deplies.length?deplies:null;
}

// clic sur les blocs (Niemes blocs en base zero pour les blocs simples)
function blocs_clic_blocs(liste, numerote) {
	var blocs = liste.split(',');
	for (var i=0; i<blocs.length; i++)
		(numerote)
			?jQuery('div.cs_bloc' + blocs[i] + ' .blocs_titre').eq(0).click()
			:jQuery('div.cs_blocs .blocs_titre').eq(blocs[i]).click();
}

// examen des parametes url (blocs simples ou numerotes)
function blocs_get_blocs(url, numerote) {
	tab = numerote
		?url.search.match(/[?&]deplier_num=([0-9,]*)/) || url.hash.match(/#deplier_num([0-9,]*)/)
		:url.search.match(/[?&]deplier=([0-9,]*)/) || url.hash.match(/#deplier([0-9,]*)/);
	return tab==null?(numerote?bloc_actif_num:bloc_actif):tab[1];
}

// une fonction et une variable pour reperer une pagination
function blocs_get_pagination(url) {
	tab = url.match(/#pagination([0-9]+)/);
	return tab==null?bloc_actif:tab[1];
}

var blocs_pagination = blocs_get_pagination(window.location.hash);

/*
// Ouvrir un bloc qui contiendrait un formulaire renvoyant une erreur
jQuery(document).ready(function() {
	jQuery('.cs_blocs').has('.erreur_message').find('.blocs_titre.blocs_replie').blocs_toggle();
});
*/

/*
// Si un bloc contient une pagination inseree dans un bloc,
// code JS a inserer dans le header de votre squelette APRES les appels du Couteau Suisse :
jQuery(document).ready(function() {
	if(blocs_pagination!==false) {
		jQuery('div.cs_bloc' + blocs_pagination + ' .blocs_titre').eq(0).click();
		window.location.hash = '#pagination' + blocs_pagination;
	}
});
*/

/*
//	Pour un bloc depliable du genre :
//	<BOUCLE_art(ARTICLES)>
//		#BLOC_TITRE
//		#TITRE
//		#BLOC_RESUME
//		#INTRODUCTION
//		#BLOC_DEBUT
//		#TEXTE
//		#BLOC_FIN
//	</BOUCLE_art>
//	le clic sur un point de suite cliquable de la balise #INTRODUCTION produit l'ouverture du bloc.
//	code JS a inserer dans le header de votre squelette APRES les appels du Couteau Suisse :
jQuery(document).ready(function(){
	jQuery('.blocs_resume>a.pts_suite')
	  .click( function(){
		jQuery(this).parents('.cs_blocs:first').children('.blocs_titre')
			.blocs_replie_tout().blocs_toggle();
		// annulation du clic
		return false;
		});
});
*/
/* Par defaut : blocs_slide = 'aucun' */
var blocs_replier_tout = 0;
var blocs_millisec = 100;
var blocs_slide = 'aucun';
var blocs_title_sep = /\|\|/g;
var blocs_title_def = 'Déplier||Replier';

var cs_init = function() {
	onglets_init.apply(this);
	jQuery('span.mcrypt', this).attr('class','cryptOK').html('&#6'+'4;');
	jQuery("a["+cs_sel_jQuery+"title*='..']", this).each(function () {
		this.title = this.title.replace(/\.\..t\.\./g,'[@]');
	});
	blocs_init.apply(this);
}
if(typeof onAjaxLoad=='function') onAjaxLoad(cs_init);
if(window.jQuery) {
var cs_sel_jQuery='';
var cs_CookiePlugin="prive/javascript/jquery.cookie.js";
jQuery(document).ready(function(){
	/* optimisation : 'IF(0) \{if(jQuery("div.cs_blocs").length)
		jQuery.getScript(cs_CookiePlugin, cs_blocs_cookie); \}' */
	cs_init.apply(document);
});
}