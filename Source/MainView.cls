
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

function MainView*scrollInSection_rise(index) 
{
	this.findCompByGroup(`section${index}`).forEach((item) => {
		item.addClass('on');
	});
};