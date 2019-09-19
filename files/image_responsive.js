function charger_url_image_responsive(this_img) {
	var dPR = window.devicePixelRatio;
		var src = this_img.attr("data-src");
		var l = this_img.attr("data-l");
		var h = this_img.attr("data-h");

		if (this_img.hasClass("image_responsive_v")) {
			var vertical = true;
			var dim= parseInt(this_img.parent().height());
		} else {
			var vertical = false;
			var dim= parseInt(this_img.parent().width());
		}
		
		var forcer_zoom = this_img.attr("data-zoom-responsive");
		if (forcer_zoom) dim = dim * forcer_zoom;
		
		var tailles = this_img.attr("data-tailles");
		
		var numdim = [];
		if (tailles) {
			var w_max = 0;
			var t = $.parseJSON(tailles.replace(/\\"/g, '"'));
			var changer_w = 1;
			
			var i = 0;
			
			$.each(t, function (index, value) {
				i++;
				value = parseInt(value);
				numdim[value] = i;
				//console.log(value + " " + dim + " " + changer_w);
				if (changer_w == 1) w_max = value;
				if (value >= dim) changer_w = 0;
				//numdim[w_max] = i;

			});			
			 //console.log ("Wmax: "+w_max);
			if (w_max > 0) dim = w_max;
		}
			// console.log ("W: "+dim);

			// console.log ("L: "+l);
			
		var autorisees = this_img.attr("data-autorisees");					
		if (autorisees) {
			autorisees = $.parseJSON(autorisees.replace(/\\"/g, '"'));		
		}


		// Si l'image est trop petite, c'est pas la peine de demander trop grand…
		if (vertical && parseInt(dim) > parseInt(h)) {
			dim = h;
			dpr = false;
		} else if (parseInt(dim) > parseInt(l)) {
			dim = l;
			dpr = false;
		}

			//console.log ("Wapres: "+dim);
		
				
		if (dim == 0) {
		
		} else {
		
				if(dPR && dPR > 1) {
					// si l'image d'origine n'est pas nettement plus grande que l'image demandée, 
					// ne pas passer dPR, sinon on récupère image de même taille mais trop compressée
					if (vertical && h < 1.5*dim) dPR = false;
					else if (l < 1.5*dim) dPR = false;
					// forcer à 2
					else dPR = 2;
					
				} else {
					dPR = false;
				}
				if (autorisees && autorisees[numdim[dim]]) {
					if (dPR < 1.5) url_img = autorisees[numdim[dim]][1];
					else url_img = autorisees[numdim[dim]][2];
				}
				else {				
					if (htactif) {
						racine = src.substr(0, src.length-4);
						terminaison = src.substr(src.length-3, 3);
						var url_img = racine+"-resp"+dim;
						if (vertical) url_img = url_img + "v";
						if (dPR) url_img = url_img + "-"+dPR;
						url_img = url_img + "."+terminaison;
					} else {
						var url_img = "index.php?action=image_responsive&img="+src+"&taille="+dim;
						if (vertical) url_img = url_img + "v";
						if (dPR) url_img = url_img + "&dpr="+dPR;
					}
				}
			this_img.attr("src", url_img).height("").width("").removeAttr("data-top");
		}

}

function charger_url_background_responsive(this_img) {
	var dPR = window.devicePixelRatio;
		vertical = false;

		var dim_l= parseInt(this_img.width());
		var dim_h = parseInt(this_img.height());

		if (dim_l > dim_h) {	
			var mode = "i";
			var src = this_img.attr("data-italien-src");
			var l = this_img.attr("data-italien-l");
			var h = this_img.attr("data-italien-h");
		} else {
			var mode = "p";
			var src = this_img.attr("data-portrait-src");
			var l = this_img.attr("data-portrait-l");
			var h = this_img.attr("data-portrait-h");
		}
		var mtime = this_img.attr("data-mtime");

		
		if ( (dim_l/dim_h) > (l/h) ) { /* fenetre plus large que l'image */
			dim = dim_l;
		} else {
			dim = dim_h *l / h;
			var pourcent = "auto 100%";
		}
				
		var tailles = this_img.attr("data-tailles");
							
		if (tailles) {
			var w_max = 0;
			var t = $.parseJSON(tailles.replace(/\\"/g, '"'));
			var changer_w = 1;
			
			$.each(t, function (index, value) {
				value = parseInt(value);
				//console.log(value + " " + d + " " + changer_w);
				if (changer_w == 1) w_max = value;
				if (value >= dim) changer_w = 0;
			});
			// console.log ("Wmax: "+w_max);
			if (w_max > 0) dim = w_max;
		}



		// Si l'image est trop petite, c'est pas la peine de demander trop grand…
		if (vertical && parseInt(dim) > parseInt(h)) {
			dim = h;
			dpr = false;
		} else if (parseInt(dim) > parseInt(l)) {
			dim = l;
			dpr = false;
		}

			//console.log ("Wapres: "+dim);


		if (dim == 0) {
		
		} else {
			if(dPR && dPR > 1) {
				// si l'image d'origine n'est pas nettement plus grande que l'image demandée, 
				// ne pas passer dPR, sinon on récupère image de même taille mais trop compressée
				if (vertical && h < 1.5*dim) dPR = false;
				else if (l < 1.5*dim) dPR = false;
				// forcer à 2
				else dPR = 2;
			} else {
				dPR = false;
			}


			var autorisees = this_img.attr("data-autorisees");					
			if (autorisees) {
				autorisees = $.parseJSON(autorisees.replace(/\\"/g, '"'));		
			}
							
			if (autorisees && autorisees[dim][mode]) {
				if (dPR < 1.5) url_img = autorisees[dim][mode][1];
				else url_img = autorisees[dim][mode][2];
			} else {
				if (htactif) {
					racine = src.substr(0, src.length-4);
					terminaison = src.substr(src.length-3, 3);
					var url_img = racine+"-resp"+dim;
					if (vertical) url_img = url_img + "v";
					if (dPR) url_img = url_img + "-"+dPR;
					url_img = url_img + "."+terminaison;
					if (mtime) url_img = url_img + "?" + mtime;

				} else {
					var url_img = "index.php?action=image_responsive&img="+src+"&taille="+dim;
					if (vertical) url_img = url_img + "v";
					if (dPR) url_img = url_img + "&dpr="+dPR;
					if (mtime) url_img = url_img + "&mtime="+mtime;
				}
			}


			if (this_img.attr("data-background-actif") != url_img) {
				this_img.attr("data-background-actif", url_img);
				this_img.css("background-image", "url("+url_img+")");
			}
		}

}

function charger_url_image_responsive_svg(this_img) {
	var dPR = window.devicePixelRatio;
		var src = this_img.attr("data-src");
		var l = this_img.attr("data-l");
		var h = this_img.attr("data-h");

		var cl = this_img.attr("class");

		if (cl.indexOf("image_responsive_svg_v") > 0) {
			var vertical = true;
			var dim= parseInt(this_img.parent().height());

			//console.log("Dimension v: "+dim);

		} else {
			var vertical = false;
			var dim= parseInt(this_img.parent().width());
			//console.log("Dimension h: "+dim);
		}
		
		
		var forcer_zoom = this_img.attr("data-zoom-responsive");
		if (forcer_zoom) dim = dim * forcer_zoom;
		
		
		
		var tailles = this_img.attr("data-tailles");
		
		if (tailles) {
			var w_max = 0;
			var t = $.parseJSON(tailles.replace(/\\"/g, '"'));
			var changer_w = 1;
			
			$.each(t, function (index, value) {
				value = parseInt(value);
				// console.log(value + " " + dim + " " + changer_w);
				if (changer_w == 1) w_max = value;
				if (value >= dim) changer_w = 0;
			});
			// console.log ("Wmax: "+w_max);
			if (w_max > 0) dim = w_max;
		}
			// console.log ("W: "+dim);

			// console.log ("L: "+l);
			
		var autorisees = this_img.attr("data-autorisees");					
		if (autorisees) {
			autorisees = $.parseJSON(autorisees.replace(/\\"/g, '"'));		
		}


		// Si l'image est trop petite, c'est pas la peine de demander trop grand…
		if (vertical && parseInt(dim) > parseInt(h)) {
			dim = h;
			dpr = false;
		} else if (parseInt(dim) > parseInt(l)) {
			dim = l;
			dpr = false;
		}

			//console.log ("Wapres: "+dim);
		
				
		if (dim == 0) {
		
		} else {
		
				if(dPR && dPR > 1) {
					// si l'image d'origine n'est pas nettement plus grande que l'image demandée, 
					// ne pas passer dPR, sinon on récupère image de même taille mais trop compressée
					if (vertical && h < 1.5*dim) dPR = false;
					else if (l < 1.5*dim) dPR = false;
					// forcer à 2
					else dPR = 2;
					
				} else {
					dPR = false;
				}
								
				if (autorisees && autorisees[dim]) {
					if (dPR < 1.5) url_img = autorisees[dim][1];
					else url_img = autorisees[dim][2];
				}
				else {				
					if (htactif) {
						racine = src.substr(0, src.length-4);
						terminaison = src.substr(src.length-3, 3);
						var url_img = racine+"-resp"+dim;
						if (vertical) url_img = url_img + "v";
						if (dPR) url_img = url_img + "-"+dPR;
						url_img = url_img + "."+terminaison;
					} else {
						var url_img = "index.php?action=image_responsive&img="+src+"&taille="+dim;
						if (vertical) url_img = url_img + "v";
						if (dPR) url_img = url_img + "&dpr="+dPR;
					}
				}
				
			this_img.attr("xlink:href", url_img).height("").width("").removeAttr("data-top");
		}


}

function calculer_top_image_responsive() {
	// Calculer le "top" des images lazy
	$(".lazy, [data-lazy]").each(function() {
		_calculer_top_image_responsive($(this));
	});
	
	charger_image_responsive();
}

function _calculer_top_image_responsive(this_img) {
	var offset = this_img.offset().top;
	this_img.attr("data-top", offset).addClass("lazy");
}

// valeur du scrollTop que l'on peut forcer par un outil externe (notamment skrollr)
var scrollT = false;

function charger_image_lazy() {
	if (scrollT) var sTop = scrollT;
	else var sTop = $(window).scrollTop();
	
	var hauteur = $(window).height();
	
	var limite_haut = sTop - 1.5*hauteur;
	
	var limite_bas = sTop + 1.5*hauteur;

	$(".image_responsive.lazy[data-top]").each(function() {
		this_img = $(this);
		var h = this_img.attr("data-top");
		if (h <= limite_bas && h >= limite_haut) {
			charger_url_image_responsive(this_img);
		} else {// sinon remettre l'image d'origine (rien ou basse def)
			this_img.attr("src", this_img.attr("data-src-lazy"));
		}
	});	
	$(".image_responsive_svg.lazy[data-top]").each(function() {
		this_img = $(this);
		var h = this_img.attr("data-top");
		if (h <= limite_bas && h >= limite_haut) {
			charger_url_image_responsive_svg(this_img);
		} else {// sinon remettre l'image d'origine (rien ou basse def)
			this_img.attr("src", this_img.attr("data-src-lazy"));
		}
	});	
	$("[data-responsive=background].lazy[data-top]").each(function() {
		this_img = $(this);
		var h = this_img.attr("data-top");
		if (h <= limite_bas && h >= limite_haut) charger_url_background_responsive(this_img);
	});	
}


function _charger_image_responsive () {

	$("[data-zoom-responsive]").each(function() {
		var forcer_zoom = $(this).attr("data-zoom-responsive");
		if (forcer_zoom > 1) $(this).find(".image_responsive").attr("data-zoom-responsive", forcer_zoom);
	});

	// Remplacer les URL non lazy
	$(".image_responsive:not('.lazy'):not('.avec_picturefill')").each(function() {
		charger_url_image_responsive($(this));
	});
	$(".image_responsive_svg:not('.lazy')").each(function() {
		charger_url_image_responsive_svg($(this));
	});
	charger_image_lazy();

	$("[data-responsive=background]:not('.lazy')").each(function() {
			charger_url_background_responsive($(this));
	});
}

$(document).ready(calculer_top_image_responsive);
$(window).smartresize(calculer_top_image_responsive);
$(window).on("load",calculer_top_image_responsive);
$(document).on("ajaxComplete", calculer_top_image_responsive);



$(window).on("scroll", charger_image_responsive);
	
var didScroll_image_responsive = false

function charger_image_responsive() {
	didScroll_image_responsive = true;
}

function render_image_responsive() {
    if(didScroll_image_responsive) {
		didScroll_image_responsive = false;
		_charger_image_responsive()
    }
}

(function animloop_image_responsive(){
  requestAnimationFrame(animloop_image_responsive);
  render_image_responsive();
})();



