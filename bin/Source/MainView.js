
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

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.hidden_view.addClass('visible');

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.onMainViewScroll = function(comp, info, e)
{

	var thisObj = this;
	
	// section2
	/*var section2Start = e.target.scrollTop - this.clientHeigth;
	var section2ScrollViewH = this.clientHeight + this.section2.element.clientHeight;
	console.log(section2Start, section2ScrollViewH);*/

};
