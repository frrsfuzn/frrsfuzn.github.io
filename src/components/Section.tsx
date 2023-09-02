import React from 'react'

interface SectionProps {
    children: React.ReactNode;
    id: string;
}

// eslint-disable-next-line react/display-name
const Section = React.forwardRef<HTMLDivElement | null, SectionProps>(({children, id}, ref) => {
    return <section id={id} className='mb-10' ref={ref}>{children}</section>
})

export default Section