<script>
    import { link } from "svelte-spa-router";
</script>

<section class="section">
    <div class="block has-text-centered is-size-2">
        <h1>Welcome to my Website!</h1>
    </div>
    <div class="block is-flex is-horizontal-center">
        <figure class="image is-128x128">
            <img
                class="is-rounded"
                src="./home_pictures/melodica.jpg"
                alt="Here's me being silly and playing my Melodica"
                title="That instrument I'm playing is called a Melodica! It's so fun to play."
            />
        </figure>
    </div>
    <div class="columns">
        <div class="column">
            
            <div class="block has-text-centered is-size-4">
                <h1>About Me!</h1>
            </div>
            <div class="block has-text-justified is-size-6">
                Hi! My name is Elie Diaz. I'm currently a PhD student at the
                University of Utah, working on Computer Graphics.
            </div>
            <div class="block has-text-justified is-size-6">
                My first two degrees (BS and MS) were from Georgia Tech in
                Computer Science, so I have been learning more about the field
                for a few years now. Currently, my projects have specialized in
                physics-based simulation, focusing on different frameworks and 
                materials.
            </div>
            <div class="block has-text-justified is-size-6">
                Go ahead and explore my site to learn more about me!
            </div>
            <!-- <div class="block is-size-7">
                I've also built up experience teaching! During my undergrad and
                master's, I was a TA for Georgia Tech's undergrad Computer
                Graphics course (CS 3451), under various faculty at Tech. After
                about 4 years of being a TA, I was awarded the College of
                Computing's "Outstanding Undergraduate TA" Award.
            </div> -->
            <!-- <div class="block is-size-7">
                My other projects are especially focused on music, as you can
                see on the other tabs. Throughout my years in ensembles, I've
                built up a music resume that includes performances with Piano
                and Voice as well as experience directing and arranging music
                for small ensembles. I'm an especially big fan of Barbershop
                Quartet Singing, having been a member of the Barbershop Harmony
                Society on and off since high school.
            </div> -->
        </div>
        <div class="column">
            <div class="block has-text-centered is-size-4">
                <h1>About my Website!</h1>
            </div>
            <div class="block has-text-justified is-size-6">
                I built this site using Svelte and Bulma as frameworks. With
                these, I was able to split the site into several tabs.
            </div>
            <div class="block has-text-justified is-size-6">
                You'll find that <a href="#/Projects" use:link>project tab</a> useful if
                you're interested in finding a general overlook of the Computer Graphics
                projects I've worked on and am working on.
            </div>
            <div class="block has-text-justified is-size-6">
                Another large part of my life revolves around music, so you can
                go to <a href="#/Music" use:link>that tab</a> to check out the various music-related
                projects I'm able to share.
            </div>
            <div class="block has-text-justified is-size-6">
                Finally, that last <a href="#/CV" use:link> CV tab</a> should take you to a link to download
                a pdf of my most recent version of my CV.
            </div>
        </div>
    </div>
</section>
<section class="section">
    <div class="block has-text-centered is-size-5">Contact Me!</div>
    <div class="block has-text-centered">
        <p>
            Email me at
            <a href="mailto:eliericardo@hotmail.com">eliericardo@hotmail.com</a>
            <br />
            Find me on
            <a href="https://www.linkedin.com/in/eliediaz">LinkedIn</a>
            <br />
            Check out my
            <a href="https://github.com/eliendiaz">GitHub</a>
            <br />
            And my
            <a href="https://www.instagram.com/charliethebuzz/"
                >Travel Instagram!</a
            >
        </p>
    </div>
</section>

<style>
    .is-horizontal-center {
        justify-content: center;
    }
</style>
