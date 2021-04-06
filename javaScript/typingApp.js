let lessonsArray = ["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.","If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];
let count=0;
let minutes=0;
let seconds=0;
let milliSeconds=0;
let minuteTag=document.querySelector('#minute');
let secondTag=document.querySelector('#second');
let milliSecondTag=document.querySelector('#m-second');
let originalTextTag=document.querySelector('#original-text');
let textAreaTag=document.querySelector('#text-area');
let timerRunning=false;
let interval=null;
let congSection=document.querySelector('.cong-div');
let clapSound=document.querySelector('#clap-sound');


// Start Timer
let start=()=>
{
	count++;
	minutes=Math.floor((count/100)/60);
	seconds=Math.floor((count/100)-(minutes*60));
	milliSeconds=Math.floor(count-(seconds*100)-(minutes*6000));

	minuteTag.innerText=leadingZero(minutes);
	secondTag.innerText=leadingZero(seconds);
	milliSecondTag.innerText=leadingZero(milliSeconds);
}
// Leading Zero
let leadingZero=(time)=>
{
	if (time<10)
	 {
	 	return '0'+time;
	 }
	 else
	 {
	 	return time;
	 }
};	

	textAreaTag.addEventListener('keyup',function()
	{
		let textEnteredLength=textAreaTag.value.length;
	if(textEnteredLength=== 1 && !timerRunning)
	{
		interval=setInterval(start,10);
		timerRunning=true;
	}
	let originalText=originalTextTag.innerText;
	let textEntered=textAreaTag.value;
	let partialText=originalText.substr(0,textEntered.length);
	evaluateText(originalText,textEntered,partialText);
	});

	let evaluateText=(originalText,textEntered,partialText)=>
	{
		if(textEntered==='')
		{
			applyColors('grey');
		}
		else
		{
			if (originalText===textEntered) 
			{
				applyColors('green');
				congSection.style.display='block';
				clearInterval(interval);
				clapSound.play();

			}
			else
			{
				if(textEntered===partialText)
				{
					applyColors('blue');
				}
				else
				{
					applyColors('red');
				}
			}
		}
	}

let applyColors=(color)=>
{
	textAreaTag.style.borderColor=color;
	textAreaTag.style.boxShadow=`0 0 ${color}`
}

//change Text
let changeText=(index)=>
{
	let lessonText=lessonsArray[index];
	originalTextTag.innerText=lessonText;
}
//reset button

let resetBtn=document.querySelector('#reset');
resetBtn.addEventListener('click',function(){
	clearInterval(interval);
	count=0;
	minutes=0;
	seconds=0;
	milliSeconds=0;
	timerRunning=false;
	interval=null;

	minuteTag.innerText='00';
	secondTag.innerText='00';
	milliSecondTag.innerText='00';

	textAreaTag.value="";
	applyColors('grey');
	congSection.style.display='none';

});
 
