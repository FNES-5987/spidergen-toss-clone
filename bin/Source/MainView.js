
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
		if (window.scrollY >= 1000) {
			thisObj.scrollInSection2();
		}
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

MainView.prototype.scrollInSection2 = function() 
{
	this.findCompByGroup('section2').forEach((item) => {
		item.addClass('on');
	});
};