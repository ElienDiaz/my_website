<section class="section">
    <div class="block has-text-centered is-size-2">
        <h1>Welcome to my Projects Page!</h1>
    </div>
    <div class="block is-flex has-text-centered is-very-horizontal-center">
        <figure class="image is-very-horizontal-center">
            <img
                src="./project_pictures/ternary.gif"
                alt="GIF of my ternary star system"
                title="This is my attempt at coding a stable ternary star system. The three spheres are orbiting each other while the system has built-in momentum in one direction."
            />
        </figure>
    </div>
    <div class="block has-text-justified is-size-6">
        Throughout my studies, I have ended up working on several projects
        specializing in Computer Graphics and in Physics Simulations. Here are a
        few I can share here.
    </div>
    <div class="block has-text-justified is-size-6">
        You can check out more projects from <a
            href="https://graphics.cs.utah.edu/research/projects/#u"
            >my current lab's page.</a
        >
    </div>
</section>

<section class="section">
    <div class="block has-text-centered is-size-4">
        <h1>Some of my Projects!</h1>
    </div>

    <div class="block">
        <div class="card is-size-6">
            <div class="card-header">
                <figure class="image is-very-horizontal-center">
                    <img
                        src="./project_pictures/snow.gif"
                        alt="GIF of my snow simulation"
                        title="This was research done under the advising of Dr. Greg Turk at Georgia Tech"
                    />
                </figure>
            </div>
            <div class="card-content">
                <div class="block">
                    <div class="is-size-4">Snow Melting Simulation</div>
                    <div class="card-content has-text-left">
                        This is a simulation using the code available <a
                            href="https://github.com/yuanming-hu/taichi_mpm"
                            >here</a
                        >
                        that uses the material point method to simulate the physics
                        of snow. My contribution to this code included the effects
                        of melting on the simulation. You can see how the warmer
                        air temperature melts the block of snow. Although the gif
                        appears to be in two dimensions, there are actually 3 dimensions
                        being simulated here. The z-dimension is much thinner than
                        the other two, giving that two-dimensional effect.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="block">
        <div class="card is-size-6">
            <div class="card-header">
                <figure class="image is-very-horizontal-center">
                    <img
                        src="./project_pictures/swarm.gif"
                        alt="GIF of flocking boids"
                        title="This flocking project was a part of Georgia Tech's Simulation of Biology course, taught by Dr. Greg Turk."
                    />
                </figure>
            </div>
            <div class="card-content">
                <div class="block">
                    <div class="is-size-4">Flocking</div>
                    <div class="card-content has-text-left">
                        This project was created from scratch using Processing
                        Java. This shows several boids showing flocking
                        behavior, including cohesion, alignment, and separation,
                        as well as random individual changes in each boid's
                        movements. This specific animation was made while they
                        were actively avoiding a point on the screen while
                        flocking.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="block">
        <div class="card is-size-6">
            <div class="card-header">
                <figure class="image is-very-horizontal-center">
                    <img
                        src="./project_pictures/jellies.gif"
                        alt="GIF of my locomotion project"
                        title="This project was a part of Georgia Tech's Simulation of Biology course, taught by Dr. Greg Turk."
                    />
                </figure>
            </div>
            <div class="card-content">
                <div class="block">
                    <div class="is-size-4">Self-Propelling Creatures</div>
                    <div class="card-content has-text-left">
                        This was a project in creating creatures that could
                        self-propel using systems of springs and masses. As with
                        the flocking project, this was made from scratch using
                        Processing Java. The springs have a natural frequency
                        that they are actively oscillating at, which causes the
                        rest of the springs to adjust and propel the fins of
                        these creatures. Different creatures have different
                        oscillation frequencies, leading to differing speeds. As
                        different parts of the fins oscillate, some
                        course-correction could be done with the creatures'
                        paths.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .is-very-horizontal-center {
        justify-content: center;
    }

    .card {
        background-color: rgb(66, 142, 145);
    }

    .card-content {
        font-family: "Fira Sans";
        color: #a8d1ce;
    }

    li {
        margin-left: 10px;
        list-style-type: circle;
        display: list-item;
    }
</style>
