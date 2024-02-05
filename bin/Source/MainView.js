
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
	var thisObj = this;

	window.addEventListener('scroll', function() {
		console.log(window.scrollY);
		/*if (window.scrollY >= 1000) {
			thisObj.scrollInSection2();
		} else if (window.scrollY >= 2600) {
			thisObj.scrollInSection3();
		}*/
		window.scrollY >= 1000 ? thisObj.scrollInSection_rise(2) : null;
		window.scrollY >= 2600 ? thisObj.scrollInSection_rise(3) : null;
		window.scrollY >= 5000 ? thisObj.scrollInSection_rise(4) : null;
		window.scrollY >= 6800 ? thisObj.scrollInSection_rise(5) : null;
		window.scrollY >= 8500 ? thisObj.scrollInSection_rise(6) : null;
		
		window.scrollY >= 15000 ? thisObj.scrollInSection_rise(8) : null;
		window.scrollY >= 16500 ? thisObj.scrollInSection_rise(9) : null;
	});

};
MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.header_area.setStyle('position', 'fixed');
	
	this.hidden_view.addClass('visible');

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.scrollInSection_rise = function(index) 
{
	this.findCompByGroup(`section${index}`).forEach((item) => {
		item.addClass('on');
	});
};