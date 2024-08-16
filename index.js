// #4. adding menu interaction
var menuLinks = [
    {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
  ];


const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>DOM Manipulation</h1>.`;
mainEl.classList.add("flex-ctr");

// create menu bar
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

// iterate through the menu
menuLinks.forEach((link) => {
  const anchorEl = document.createElement("a");
  anchorEl.setAttribute("href", link.href);
  anchorEl.textContent = link.text;
  topMenuEl.appendChild(anchorEl);
});

/*...... Second Part .....*/

// #3. creating the submenu
const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height ='100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


// #4. adding menu interaction
// Select and cache all <a> elements inside of topMenuEl in variable topMenuLinks
const topMenuLinks =  topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener('click', (e) => 
{
    e.preventDefault();
    if (e.target.tagName !=='A')
    return;
    console.log(e.target.textContent);

//  #4.1  add event listener to add "active" class to <a></a>
// removing "active" class
topMenuLinks.forEach( (link) => {
    link.classList.remove('active');
    // console.log(link);
    });   
//  adding active class
 e.target.classList.add('active');

 // #5. add menu interaction ---- LAST CODE 
 if(topMenuLinks){
    // check if the clicked item is already active
    if(!e.target.classList.contains('active')){
        // test console
        console.log(`${e.target.textContent.toUpperCase()} This anchor contains active`);
        // check if clicked <a> has a sublink
       
        const buildSubmenu = (subLinks) => {

          subMenuEl.innerHTML = '';
        
        
          subLinks.forEach(sublink => {
              const newSubLink = document.createElement('a');
              newSubLink.setAttribute('href', sublink.href);
              newSubLink.innerHTML = sublink.text;
              subMenuEl.appendChild(newSubLink);
          });
        }
        //Attach a delegated &#39;click&#39; event listener to subMenuEl.
subMenuEl.addEventListener(&#39;click&#39;, ( event ) =&gt; {
  event.preventDefault()
  // Check if the clicked element is an &lt;a&gt; element
  if (!event.target.matches(&#39;a&#39;)) {
  return; // Exit the function if the clicked element is not an &lt;a&gt; element
  }
  // Log the content of the &lt;a&gt; element to verify the handler is working
  console.log(event.target.textContent);
  // the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = &#39;0%&#39;; // Set the CSS top property of subMenuEl to 0%
  // Remove &#39;active&#39; class from all &lt;a&gt; elements inside topMenuEl
  topMenuLinks.forEach(link =&gt; {
  link.classList.remove(&#39;active&#39;);
  });
  
  // Update the contents of mainEl within an &lt;h1&gt; to the contents of the &lt;a&gt; element clicked
  within subMenuEl.
  mainEl.innerHTML = `&lt;h1&gt;${event.target.textContent}&lt;/h1&gt;`;
  // If the ABOUT link is clicked, an &lt;h1&gt;About&lt;/h1&gt; should be displayed.
  
  if (event.target.textContent === &quot;about&quot;) {
  mainEl.innerHTML = &#39;&lt;h1&gt;About&lt;/h1&gt;&#39;;
  }
  });
        
        


 
      }}})
  
    subMenuEl.addEventListener('click', ( event )=>{ 
      event.preventDefault()
    
      if (!event.target.matches('a')) {
          return; 
      }

    })  

