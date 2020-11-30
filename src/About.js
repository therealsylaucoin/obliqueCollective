//Using a function component for the About Section since it's purely presentational.

const About = () => {
        return(
            <section id="about" className="about wrapper">
                
                <h3>About Oblique Strategies</h3>


                <article>
                    
                    <div>
                        
                        <p>Oblique Strategies, subtitled Over One Hundred Worthwhile Dilemmas, is a card-based method for promoting creativity jointly created by musician/artist <a href="https://brian-eno.net/index.html" target="_blank" rel="noreferrer">Brian Eno</a> and multimedia artist <a href="https://en.wikipedia.org/wiki/Peter_Schmidt_(artist)" target="_blank" rel="noreferrer">Peter Schmidt</a>, first published in 1975. While these startegies are normally interacted iwht in the form of a card measuring roughly 3 in x 3.5 in, what you find here is a digital version sourced from a <a href="http://www.rtqe.net/ObliqueStrategies/OSintro.html" target="_blank" rel="noreferrer">website widely acknowledged as the authoritative source</a> and put together by musician and educator Gregory Alan Taylor. Each card offers a challenging constraint intended to help artists, especially musicians, break creative blocks by encouraging lateral thinking.
                        The deck contains an instruction card, describing itself as follows:</p>

                    </div>
                    
                
                    <div>

                        <blockquote> These cards evolved from our separate observations on the principles underlying what we were doing. Sometimes they were recognized in retrospect (intellect catching up with intuition), sometimes they were identified as they were happening, sometimes they were formulated.</blockquote>
                    
                        <blockquote>They can be used as a pack (a set of possibilities being continuously reviewed in the mind) or by drawing a single card from the shuffled pack when a dilemma occurs in a working situation. In this case, the card is trusted even if its appropriateness is quite unclear. They are not final, as new ideas will present themselves, and others will become self-evident.</blockquote>

                        <p>Photos of the original handwritten cards can be found in <a href="https://www.brainpickings.org/2014/01/22/brian-eno-visual-music-oblique-strategies/" target="_blank" rel="noreferrer">this article</a>.</p>

                        

                        {/* <p className="quote">Would anyone want it?</p>

                        <p>When we are wrapped inside our idea, sometimes our vision can get blurry. It’s important to be empathic and consider, is this a good idea? Will anyone want this product or service? The bare bones of Google Glass contain some very cool, futuristic ideas, but perhaps no one at Google took the time to consider whether anyone would want it.</p>

                        <p className="quote">Be dirty.</p>

                        <p>Perhaps you’ve been too methodical and organized. What would happen if you tried to accomplish your task in 1/4 the time? Maybe rather than focusing on launching your company with the finished version of your offering, you should consider launching with an MVP (minimum viable product) to allow you to continuously improve and iterate via customer feedback.</p>

                        <p className="quote">Honor thy error as a hidden intention.</p>

                        <p>Breakthrough ideas often begin as mistakes. Perhaps you’ve been hitting the wall as you try to achieve an intended result. By treating the mistaken result as your desired outcome, you could make a discovery you would never consciously have arrived at.</p> */}

                    </div>
                
                    <div>
                        
                        <p>The cards are open-ended but offer direct advice.</p>

                        <p>The Oblique Strategies are part of a long tradition of <a href="https://www.goodreads.com/book/show/829643.The_Use_of_Lateral_Thinking" target="_blank" rel="noreferrer">lateral thinking</a> techniques. The basic principle behind lateral thinking is that by approaching a problem from a different angle, we may be able to find better solutions. Utilizing imagination and inspiration to generate unexpected solutions to the problems you face means not simply going for the obvious solution. There’s rarely only one solution to the problem. Ideas should not compete against each other, but instead should clarify our methods until we have chosen the optimal solution for an individual problem.</p>

                        {/* <p> Considered pseudo-science by some, the term was first used in 1967 by Edward de Bono in his book <a href="https://www.goodreads.com/book/show/829643.The_Use_of_Lateral_Thinking" target="_blank" rel="noreferrer">The Use of Lateral Thinking</a>. De Bono links to lateral thinking with humour, arguing there's a switch-over from a familiar pattern to a new, unexpected one. It is this moment of surprise, generating laughter and new insight, which facilitates the ability to see a different thought pattern which initially was not obvious. According to de Bono, lateral thinking deliberately distances itself from the standard perception of creativity as "vertical" logic, the classic method for problem solving.</p> */}

                    </div>
                    
                </article>
                
            </section>
        )
}

export default About;