import { useState } from "react"

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            quote: "Test Quote 1",
            author: "Author 1"
        },
        {
            quote: "Test Quote 2",
            author: "Author 2"
        },
        {
            quote: "Test Quote 3",
            author: "Author 3"
        },
        {
            quote: "Test Quote 4",
            author: "Author 4"
        },
    ];

    const handlePrevClick = () => setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)

    const handleNextClick = () => setCurrentIndex((currentIndex + 1) % testimonials.length)

    return (
        <div>
            <div>
                {testimonials[currentIndex].quote}
            </div>
            <div>
                - {testimonials[currentIndex].author}
            </div>

            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    )
}

export default Testimonials