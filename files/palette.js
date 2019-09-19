jQuery(function($){
	coloriagePalette = function() {
		$('.palette').each(function() {
			var me = $(this);
			me.colorPicker({
				doRender: 'div div',
				opacity: !!(me.hasClass('withalpha') || me.data('palette-withalpha')),
				cssAddon:
					'.cp-color-picker { z-index:10000; }'
			}).each(function(idx, elm) {
				if (!elm.value) {
					// #hex par défaut si aucune valeur à l’origine, et pas de couche alpha
					$(elm).data('colorMode', 'HEX');
				}
			});
		});
	}
	coloriagePalette();
	onAjaxLoad(coloriagePalette);
});

