'use client';

import { useTheme } from './ThemeProvider';
import ThemeToggle from './ThemeToggle';
import Hero from './Hero';
import ArticleSection from './ArticleSection';
import Heading from './Heading';
import Paragraph from './Paragraph';

interface ArticleContentProps {
    children?: React.ReactNode;
}

export default function ArticleContent({ children }: ArticleContentProps) {
    // This ensures we're within the ThemeProvider context
    const { theme } = useTheme();

    return (
        <>
            <ThemeToggle />
            {children}
        </>
    );
}
