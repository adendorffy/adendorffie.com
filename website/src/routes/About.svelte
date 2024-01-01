<script>
    import { link } from "svelte-spa-router";
    import Expandable from "../components/Expandable.svelte";
</script>

<main>
    <div class="bar">
        <a class="nav-link" href="/" use:link>Home</a>  
    </div>  
    <h2>About Me</h2>
    
    
    
    <div class="description"> I am Danel Adendorff, a passionate illustrator and wed developer who is studying data engineering at Stellenbosch Univerity in South Africa. </div>
  
    <div class="center">    <img class= "heading-img" alt="heading" src="heading.jpeg"/>
    </div>
    <div class="column">

        <body>    
        <Expandable title = "Professional Summary" description = "
        With experience in Data Science, Web Design and Illustration, I bring an interesting perspective to any new project. "/>
    
        <Expandable title = "Values and Philosophy" description = " I believe in respect and dedication as the driving forces for any work that I do. 
        This means that I approach any new project with a hard-working attitude and give my all within the allotted time in my life for it."/>
    
        <Expandable title = "Skills and Expertise" description = " My expertise lie within Web-design and Development (particularly React and Svelte JS frameworks). 
        I also have considerable experience in Machine Learning and Data Science from my studies. "/>
    
        <Expandable title = "Education and Credentials" description = "I am currently busy with my 4-year BEng in Electrical and Electronic Engineering (with the focus area: Data Science) at the University of Stellenbosch."/>
    
        <Expandable title = "Professional Experience" description = "I have worked as a Summer Intern in Data Engineering at Spatial Edge in January 2023. 
        I have also worked as a Junior Developer/Intern at QuicklySign in July 2023."/>
    
        <Expandable title = "Passions and Hobbies" description = "Outside of my work and studies I am a passionate trail-runner and hiker who have competed in a few races with the dream of finishing my first ultra-marathon in 2024."/>
    
        
        </body>
    </div>

   
</main>



