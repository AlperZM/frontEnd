Learn Svelte by MDN and Svelte.dev  
for support: svelte.dev/chat  
discord: https://discord.com/invite/svelte  
svelte uses file.svelte, thet includes <script></script> , \<html>\</html>, <style></style> tags in same file.
you can import components "component.svelte", 
you can import an other compenent and use like: <NestedComponent /> in other component

reactive declares and reactive states are useful for manage state.
$: reactiveDeclare = count + 1;  

$: if(reactiveDeclare >= 5 ? "Reactive States" : "Reactive Declare";
