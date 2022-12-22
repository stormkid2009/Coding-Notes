# what is NodeJs?
Node.js is an open-source, cross-platform (Windows,Linux or Mac OS) JavaScript RunTime environment capable of  executing javascript's code outside of the browser.  

That means node.js can execute standard javascript (ECMA script) and also new features, written in <code>C</code> and <code>C++</code> languages which can deal easily with low level programming operations which javascript not good at dealing with ,using <code>V8</code> (chrome engine).  

## what is the Engine?
we can say a program or interpreter which converts code from high level language to machine code and execute it.
for example *Chrome* <code>V8</code> which is <code>Javascipt </code>engine written in <code>C++</code>

## what is the RunTime environment?
It is a software which provide all the functionality necessary for a program to run means provide all the <code>APIs</code> needed for the Engine to run.  
For example the web browser  is Runtime environment and it provides <code>DOM</code> , STORAGE and TIMERS which the <code>V8</code> engine as example can use throw the <code>events loops </code>.  

### conclusion:
* Engine is a part of RunTime environment
* Engine and RunTime work together to get the job done.
