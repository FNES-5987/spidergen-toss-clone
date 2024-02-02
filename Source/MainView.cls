
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainView*onInitDone()
{
	super.onInitDone();
	
	this.hidden_view.addClass('visible');

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MainView*onMainViewScroll(comp, info, e)
{

	var thisObj = this;
	
	// section2
	/*var section2Start = e.target.scrollTop - this.clientHeigth;
	var section2ScrollViewH = this.clientHeight + this.section2.element.clientHeight;
	console.log(section2Start, section2ScrollViewH);*/

};
