
/**
Constructor
Do not call Function in Constructor.
*/
class toss_cloneApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function toss_cloneApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function toss_cloneApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
