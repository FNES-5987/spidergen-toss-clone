
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
	
	var thisObj = this;

	window.addEventListener('scroll', function() {
		console.log(window.scrollY);
		if (window.scrollY >= 1000) {
			thisObj.scrollInSection2();
		}
	});

};
function MainView*onInitDone()
{
	super.onInitDone();
	
	this.header_area.setStyle('position', 'fixed');
	
	this.hidden_view.addClass('visible');

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MainView*scrollInSection2() 
{
	this.findCompByGroup('section2').forEach((item) => {
		item.addClass('on');
	});
};