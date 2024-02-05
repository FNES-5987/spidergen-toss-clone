
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
    const scrollY = window.scrollY;
    
    const scrollActions = [
        { position: 1000, action: () => thisObj.scrollInSection_rise(2) },
        { position: 2600, action: () => thisObj.scrollInSection_rise(3) },
        { position: 5000, action: () => thisObj.scrollInSection_rise(4) },
        { position: 6800, action: () => thisObj.scrollInSection_rise(5) },
        { position: 8500, action: () => thisObj.scrollInSection_rise(6) },
        { position: 9300, action: () => {
            thisObj.scrollInSection_op(9300, 6, 1);
            thisObj.scrollInSection_op(9500, 6, 2);
            thisObj.scrollInSection_op(9700, 6, 3);
        }},
		{ position: 10000, action: () => thisObj.scrollInSection_panel() },
		{ position: 11200, action: () => {
            thisObj.scrollInSection_op(11200, 7, 1);
            thisObj.scrollInSection_op(12100, 7, 2);
            thisObj.scrollInSection_op(12500, 7, 3);
			thisObj.scrollInSection_op(12800, 7, 0);
			thisObj.scrollInSection_op(13300, 7, 4);
			thisObj.scrollInSection_op(13700, 7, 5);
			thisObj.scrollInSection_op(14400, 7, 6);
        }},
        { position: 15000, action: () => thisObj.scrollInSection_rise(8) },
        { position: 16500, action: () => thisObj.scrollInSection_rise(9) },
    ];

    // 스크롤 위치에 따른 동작 수행
    scrollActions.forEach(({ position, action }) => {
        if (scrollY >= position) {
            action();
        }
    });
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

MainView.prototype.scrollInSection_op = function(scroll_pos, section_index, item_index) 
{
	if (section_index === 6) {
		this.findCompByGroup(`section${section_index}_op${item_index}`).forEach((item)=>{
			item.element.style.opacity = (window.scrollY - `${scroll_pos}`) * 0.005;
		});
	} else if (section_index === 7) {
		this.findCompByGroup(`section${section_index}_op${item_index}`).forEach((item)=>{
			
			if (item_index === 0) {
				var transY = (window.scrollY - 12800) * 0.01;
				item.element.style.transform = `translateY(-${transY}%)`;
				item.element.style.opacity = (window.scrollY - `${scroll_pos}`) * 0.002;
			} else {
				item.element.style.opacity = (window.scrollY - `${scroll_pos}`) * 0.002;
			}
		});
	}
	
};

MainView.prototype.scrollInSection_panel = function() 
{
	var transX = (window.scrollY - 10000) / 10;
	this.section7_left.element.style.transform = `translateX(-${transX}%)`;
	this.section7_right.element.style.transform = `translateX(${transX}%)`;
};