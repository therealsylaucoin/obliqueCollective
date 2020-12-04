
//Using a function component for the About Section since it's purely presentational.

const About = () => {
        return(

            <section id="about" className="about">

                <h3>About Oblique Strategies</h3>


                <article className="wrapper">
                    
                    <div>
                        
                        <p>Oblique Strategies, subtitled Over One Hundred Worthwhile Dilemmas, is a card-based method for promoting creativity jointly created by musician/artist <a href="https://brian-eno.net/index.html" target="_blank" rel="noreferrer">Brian Eno</a> and multimedia artist <a href="https://en.wikipedia.org/wiki/Peter_Schmidt_(artist)" target="_blank" rel="noreferrer">Peter Schmidt</a>, first published in 1975. While these strategies normally take the form of a card measuring roughly 3 in x 3.5 in, what you find here is a digital version sourced from a <a href="http://www.rtqe.net/ObliqueStrategies/OSintro.html" target="_blank" rel="noreferrer">website widely acknowledged as the authoritative source</a> and put together by musician and educator Gregory Alan Taylor. Each card offers a challenging constraint intended to help artists, especially musicians, break creative blocks by encouraging lateral thinking.
                        The deck contains an instruction card, describing itself as follows:</p>

                    </div>

                    <div>

                        <blockquote> These cards evolved from our separate observations on the principles underlying what we were doing. Sometimes they were recognized in retrospect (intellect catching up with intuition), sometimes they were identified as they were happening, sometimes they were formulated.</blockquote>
                    
                        <blockquote>They can be used as a pack (a set of possibilities being continuously reviewed in the mind) or by drawing a single card from the shuffled pack when a dilemma occurs in a working situation. In this case, the card is trusted even if its appropriateness is quite unclear. They are not final, as new ideas will present themselves, and others will become self-evident.</blockquote>

                        <p>Photos of the original handwritten cards can be found in <a href="https://www.brainpickings.org/2014/01/22/brian-eno-visual-music-oblique-strategies/" target="_blank" rel="noreferrer">this article</a>.</p>

                    </div>
                
                    <div>
                        
                        <p>The cards are open-ended but offer direct advice.</p>

                        <p>The Oblique Strategies are part of a long tradition of <a href="https://www.goodreads.com/book/show/829643.The_Use_of_Lateral_Thinking" target="_blank" rel="noreferrer">lateral thinking</a> techniques. The basic principle behind lateral thinking is that by approaching a problem from a different angle, we may be able to find better solutions. Utilizing imagination and inspiration to generate unexpected solutions to the problems you face means not simply going for the obvious solution. There’s rarely only one solution to the problem. Ideas should not compete against each other, but instead should clarify our methods until we have chosen the optimal solution for an individual problem.</p>

                    </div> 
                    
                </article>
                

            </section>

        )
}

export default About;